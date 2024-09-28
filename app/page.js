import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import IdeaForm from "@/components/Form";
import Header from "@/components/Header";
import Scroll from "@/components/Scroll";
import AnthillNetworksInfo from "@/components/why";
import Workheader from "@/components/Workheader";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="about"><About /></section>
      <section id="works"><Scroll /></section>
      <section id="anthill"><AnthillNetworksInfo /></section>
      <section id="workheader"><Workheader /></section>
      <section id="works-section"><Works /></section>
      <section id="blogs"><Blogs /></section>
      <section id="idea-form"><IdeaForm /></section>
      <Footer /> 
    </main>
  );
}
