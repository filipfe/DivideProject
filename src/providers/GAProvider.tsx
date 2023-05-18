import Script from "next/script";

export default function GAProvider({
  children,
}: {
  children: React.JSX.Element[];
}) {
  return (
    <div>
      {children}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7GE1YZ53QT"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7GE1YZ53QT');`}
      </Script>
    </div>
  );
}
