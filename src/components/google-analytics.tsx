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

      <Script id="utm-clean" strategy="afterInteractive">
        {`(function(){
              var url=new URL(location.href), p=new URLSearchParams(url.search),
                  keys=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','msclkid','twclid','yclid','dm_i'];
              var changed=false; keys.forEach(k=>{ if(p.has(k)){p.delete(k); changed=true;}});
              if(changed){ url.search=p.toString(); history.replaceState(history.state,'',url.toString()); }
            })();`}
      </Script>
    </>
  )
}
