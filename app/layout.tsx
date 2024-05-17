import ActiveContextProvider from "./context/active.context-provider";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

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
        className={`${inter.className}bg-gray-100 text-slate-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        <div className="absolute top-[-6rem] right-[11rem] bg-[#fbe2e3] h-[31.25rem] blur-[5rem] sm:w-[69rem] -z-10"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] rounded-full w-[50rem] h-[31.25rem] blur-[5rem] sm:w-[69rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
        <ActiveContextProvider>
          <Header />
          {children}
        </ActiveContextProvider>
      </body>
    </html>
  );
}
