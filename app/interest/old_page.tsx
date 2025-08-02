import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Interest() {
  return (
    <main className="w-dvw h-dvh overflow-hidden">
      {/* background gradient is defined within globals.css */}
      <div className="fixed">
        <Navbar />
      </div>

      <div className="2xl:scale-125 lg:scale-80 flex flex-col items-center w-screen justify-center h-screen">
        <Header />
      </div>

      <div className="p-10 fixed bottom-0 w-full">
        <Footer />
      </div>

      {/* if you need more control over SVG logo, consider using https://react-svgr.com/playground/ */}
    </main>
  )
}
