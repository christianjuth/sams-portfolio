import Script from 'next/script';

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        id="ga-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${gaId}');`}
      </Script>
    </>
  )
}
