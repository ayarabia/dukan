"use client";
import Footer from "./components/footer";
import Gifts from "./components/gifts";
import HighestCashback from "./components/highestCashback";
import Info from "./components/info";
import Links from "./components/links";
import NavBar from "./components/navbar";
import Orders from "./components/orders";
import Productes from "./components/products/index";
import Timers from "./components/timers";
import TopNav from "./components/top-nav";
import Welcome from "./components/welcome";
import axios from "axios";
import { useEffect, useState } from "react";
import TopDeals from "./components/topDeals";
import MostPopularProducts from "./components/popularProducts";
import PersonalCare from "./components/PersonalCare";
import Offers from "./components/offers";
import MobileNavbar from "./components/mobileNavbar";
import Address from "./components/address";
export default function Home() {
  const [highestCashback, setHighestCashback] = useState([]);
  const [topDeals, setTopDeals] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [personalCare, setPersonalCare] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://innova.products.aait-d.com/api/website/home?guest_token=ZZoEhLlFeEs6rSh9UT9nUFgVgLgR762J1VJJcpZu9wYVdqtDtzSvFAewKcMgNFD2"
      )
      .then(function (response) {
        console.log(response.data.data);
        setHighestCashback(response.data.data[6].content);
        setTopDeals(response.data.data[8].content);
        setPopularProducts(response.data.data[10].content);
        setPersonalCare(response.data.data[3].content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <main>
      <div className="bg-secondary  block lg:hidden  ">
        <MobileNavbar />
      </div>
      <div className="bg-blue block lg:hidden ">
        <Address />
      </div>
      <div className="container mx-auto">
        <TopNav />
        <NavBar />
        <Links />
        <Welcome />
        <Orders />
        <Productes />
        <Info />
        <HighestCashback highestCashback={highestCashback} />
      </div>
      <div className="hidden lg:block">
       <Offers />
      </div>
      <div className="container mx-auto">
        <TopDeals topDeals={topDeals} />
        <Gifts />
        <MostPopularProducts popularProducts={popularProducts} />
        <Timers />
        <PersonalCare personalCare={personalCare} />
      </div>
      <Footer />
    </main>
  );
}