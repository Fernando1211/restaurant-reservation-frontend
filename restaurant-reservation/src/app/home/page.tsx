import About from "@/components/about";
import Card from "@/components/cards";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Location from "@/components/location";
import OpeningHours from "@/components/openinghours";
import Reservation from "@/components/reservation";
import Header from "../../components/header";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
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
