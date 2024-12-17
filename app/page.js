import Community from "./community/page";
import Footer from "./footer/page";
import Header from "./Header/page";
import MayEdition from "./May/page";
import Navbar from "./Navbar/page";
import Section from "./Section/page";
import Sponsor from "./sponsor/page";


export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className=' bg-[#f9f1ff] relative'>
        <Navbar/>
        <Header/>
        <Section/>
         <Sponsor/>
        <MayEdition/>
         <Community/>
        <Footer/>  
      </div>
    </div>
  );
}
