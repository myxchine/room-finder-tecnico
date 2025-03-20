import Header from "@/components/global/header";
import Nav from "@/components/global/header/nav";
import Footer from "@/components/global/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="w-full hidden md:hidden p-4 pt-2" id="mobile-nav">
        <Nav className="flex flex-col gap-4 p-8 py-2 items-center justify-center px-4  mx-auto   w-full" />
      </div>
      <main id="site-main">{children}</main>
      <Footer />
    </>
  );
}
