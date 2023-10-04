// "use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header/header";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tripmaster AI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const path ='';
  return (
    <html lang="en">
      <body
        className={
          path == "/pages/recommend" || path == "/pages/country_wise"  ? `${styles.body_position}`:`${styles.body_position} ${styles.body_bg}`
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
