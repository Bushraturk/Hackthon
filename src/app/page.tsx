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
<<<<<<< HEAD
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
<<<<<<< HEAD
            Get started by editing Hello{" "}
=======
            Get started by editing{" "}
>>>>>>> fee0302 (Initial commit from Create Next App)
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
=======
    <div>
      <HeroSection />
      <NewArrivals />
      <Cart />
>>>>>>> cf9b836 (Your commit message here)

      <BrowseByDressStyle />
      <CustomerTestimonials />
      <NewsletterSubscription />
    </div>
  );
}
