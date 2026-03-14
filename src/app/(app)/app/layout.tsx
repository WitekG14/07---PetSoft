import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />

      <div className="flex flex-col max-w-262.5 mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}

export default Layout;
