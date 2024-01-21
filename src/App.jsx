import Enquire from "./components/Enquire";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <>
    <body className="bg-gradient-to-r from-black to-slate-900 min-w-screen min-h-screen text-white px-28 max-sm:p-3">
     <Header />
     <Hero />
     <Services />
     <Enquire />
     <Footer />
    </body>
    </>
  )
}