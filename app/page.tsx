import Bestsellers from "@/components/bestsellers/page";
import Filler from "@/components/filler/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Craft from "@/components/ourcraft/page";
import WhyUs from "@/components/whyus/page";
import Discover from "@/components/discover/page";

export default function Home() {
  return (
   <main className="bg-[#e1d7d0]">
    <div>
      <Header />
      <Bestsellers />
      <WhyUs />
      <Discover />  
      <Craft /> 
      <Filler /> 
      <div className="bg-[#efefec] p-8"></div>
      <Footer />  

      
    </div>

   </main>
  );
}
