import Header from "@/elements/header";
import { FC } from "react";
import Banner from "./components/banner";
import AboutUs from "./components/about-us";
import WhyChooseUs from "./components/why-choose-us";
import Certificates from "./components/certificates";
import Footer from "./components/footer";
import Stats from "./components/stats";
import Feedback from "./components/feedback";
import Services from "./components/services";
import Info from "./components/info";
import ContactUs from "./components/contact-us";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Info />
      <WhyChooseUs />
      <Certificates />
      <Stats />
      <Services />
      <Feedback />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
