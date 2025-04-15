import "@/styles/globals.css";
import { Viewport } from "next";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="pt-8 px-10 flex-grow ml-[250px] bg-slate-100 dark:bg-stone-950 ">
        {children}
      </main>
    </>
  );
}
