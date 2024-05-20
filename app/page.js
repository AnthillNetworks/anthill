import About from "@/components/About";
import Footer from "@/components/Footer";
import IdeaForm from "@/components/Form";
import Header from "@/components/Header";
import Scroll from "@/components/Scroll";
import Workheader from "@/components/Workheader";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Workheader/>
      <Works/>
      <Scroll/>
      <Workheader/>
      <IdeaForm/>
      <Footer/> 
    </main>
  );
}
