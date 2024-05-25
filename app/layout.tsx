import ActiveContextProvider from "./context/activecontext-provider";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import Theme from "./components/theme";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emeka | Frontend Developer",
  description: "Emeka is frontend developer with 2 years experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}bg-gray-100 text-slate-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="absolute top-[-6rem] right-[11rem] bg-[#fbe2e3] h-[31.25rem] blur-[10rem] sm:w-[69rem] -z-10 rounded-full dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] rounded-full w-[50rem] h-[31.25rem] blur-[10rem] sm:w-[69rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10 dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <Theme />
          </ActiveContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
