import '@/styles/global.css';
import { Manrope, Space_Grotesk, Poppins } from 'next/font/google';
import { AppContextProvider } from '@/AppContext';


// import { Metadata } from "next";
// // ... other imports

// export const metadata: Metadata = {
//   manifest: "/manifest.json", // we are accessing our manifest file here
//   title: "...",
//   // ... other options    
// };


export const metadata ={
  manifest: "/manifest.json",
  title: 'ChainCheckmate',
  description: 'Decentrailized Web3 chess game on Flow network',
};

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  subsets: ['latin'],
});

const space_grotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '800', '900'],
  variable: "--font-poppins",
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <AppContextProvider>
      <html lang="en">
      {/* <Head>
      <link rel="manifest" href="/manifest.json" />
      </Head> */}
        <body
          className={`${manrope.className} ${space_grotesk.className} ${poppins.className}`}
          suppressHydrationWarning={true}
        >
          {children}
        </body>
      </html>
    </AppContextProvider>
  );
}
