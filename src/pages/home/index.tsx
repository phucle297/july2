import Header from "@/elements/header";
import { FC } from "react";
import Banner from "./components/banner";

const HomePage: FC = () => {
  return (
    <section>
      <Header />
      <Banner />
    </section>
  );
};

export default HomePage;
