import { useContext } from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { ThemeContext } from "./context";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`min-h-lvh w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main className="min-h-[calc(100vh-14rem)]">
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
