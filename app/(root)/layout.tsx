import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Yuri",
    lastName: "Developer",
    email: "yuri@dev.com",
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            width={30}
            height={30}
            src="/icons/logo.svg"
            alt="Horizon logo"
          />

          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}
