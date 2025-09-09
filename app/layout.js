import Script from "next/script";
import "./globals.css";
import Provider from "./Provider";
import { Cinzel } from "next/font/google"

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
})



export const metadata = {
  title: "Doraemonism – Faith of the Blue Guardian",
  description: "Explore the sacred lore, prophets, and teachings of Doraemonism – from divine arrival to epic crusades against rival cartoon faiths.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="yszqlDoRKS6U1tdVLGVIIxKyWd52VER3wa9TD6S5Psw" />
        <meta name="google-adsense-account" content="ca-pub-7154543574051359"></meta>
      </head>
      <body className={cinzel.className}>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="fed6926e-00f5-49fd-9e12-d4c9c13a990f"
          strategy="afterInteractive"
          defer
        />

        <Provider>
          {children}
        </Provider>
      </body>
    </html >
  );
}
