import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="max-w-[100vw] w-screen h-screen max-h-[100vh] overscroll-none fixed overflow-hidden">
      {/* background gradient is defined within globals.css */}
      <div className="fixed">
        <Navbar />
      </div>

      <div className="lg:scale-125 flex flex-col items-center w-screen justify-center h-screen">
        <Header />
      </div>

      <div className="p-10 fixed bottom-0 w-full">
        <Footer />
      </div>

      {/* if you need more control over SVG logo, consider using https://react-svgr.com/playground/ */}
    </main>
  )
}
