
import About from "@/components/about";
import Hero from "@/components/banner";
import Card from "@/components/cards";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Location from "@/components/location";
import OpeningHours from "@/components/openinghours";
import Reservation from "@/components/reservation";
import Header from "../components/header";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Card />
      <Carousel />
      <Reservation active={"create"} />
      <Location />
      <OpeningHours />
      <Footer />
      
    </>
  );
}
