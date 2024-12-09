import Image from "next/image";
import HeroSection from "./Component/Hero";
import NewArrivals from "./Component/Productlist";
import BrowseByDressStyle from "./Component/Dressstyle";
import TopSelling from "./Component/Topselling";
import CustomerTestimonials from "./Component/Testi";
import NewsletterSubscription from "./Component/Newsletter";

import Cart from "./Component/Topselling";

export default function Home() {
  return (

    
    <div>
      <HeroSection />
      <NewArrivals />
      <Cart />

      <BrowseByDressStyle />
      <CustomerTestimonials />
      <NewsletterSubscription />
    </div>
  );
}
