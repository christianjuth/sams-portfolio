'use client'

import Script from 'next/script';
import _ from 'lodash'
import { useEffect, useState } from 'react';
import { v4 as uuid } from "uuid"

const UUID_KEY = "user_uuid";
const GA_ID = "G-MH5XGPCC5G";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        id="ga-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${GA_ID}');`}
      </Script>
    </>
  )
}

function identifyUser(uuid: string) {
  if (typeof window !== "undefined" && 'gtag' in window && _.isFunction(window.gtag)) {
    window.gtag("config", GA_ID, {
      user_id: uuid,
    });
  }
}

export function useUserIdentity() {
  const [identity, setIdentity] = useState<string>();

  useEffect(() => {
    const storedUuid = window.localStorage.getItem(UUID_KEY)
    if (!storedUuid) {
      const newUuid = uuid();
      window.localStorage.setItem(UUID_KEY, newUuid)
      setIdentity(newUuid)
    } else {
      setIdentity(storedUuid)
      identifyUser(storedUuid)
    }
  }, [])

  return identity
}
