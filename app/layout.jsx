import { Inter, Outfit } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Haulster Transport Ltd | Reliable Freight Across Canada & USA",
  description:
    "Haulster Transport moves freight across Canada and the USA with on-time delivery, real-time tracking, and safety-first operations. Get a quote today.",
}

export const viewport = {
  themeColor: "#0D3B66",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
