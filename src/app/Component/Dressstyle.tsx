import React from "react";
import Image from "next/image";

const BrowseByDressStyle = () => {
  // Data for the images and titles
  const dressStyles = [
    { title: "Casual", imgSrc: "/image-1.png", styles: "w-[407px] h-[289px]" },
    { title: "Formal", imgSrc: "/image-2.png", styles: "w-[684px] h-[289px]" },
    { title: "Party", imgSrc: "/image-3.png", styles: "w-[684px] h-[289px]" },
    { title: "Gym", imgSrc: "/image-4.png", styles: "w-[407px] h-[289px]" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-6 flex justify-center">
      <div className="max-w-[1440px] w-full">
        {/* Title */}
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Browse By Dress Style
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 ml-20 mr-20 gap-5 lg:gap-4 justify-items-center">
          {dressStyles.map((style, index) => (
            <div
              key={index}
              className={`relative rounded-[20px] overflow-hidden bg-white shadow-lg ${style.styles}`}
            >
              {/* Image */}
              <Image
                src={style.imgSrc}
                alt={style.title}
                layout="fill"
                className="object-cover"
              />
              {/* Title Overlay */}
              <div className="absolute inset-0 bg-opacity-40 flex">
                <span className="text-black text-lg lg:text-2xl mt-5 ml-5 font-semibold">
                  {style.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;



















// import React from "react";
// import Image from "next/image";

// const Carousel = () => {
//   return (
//     <div>
//       <section className="bg-[#F2F0F1]">
//         <div className="py-4 px-2 mx-suto max-w-screen-xl sm:py-4 lg:px-6">
//         <h1 className="font-bold text-4xl mb-4 text-black z-10 relative">
//         BROWSE BY dress STYLE
//       </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[63] h-full">
//             <div className="col-span-2 px-[64] py-[192] sm:col-span-1 md:col-span-2 bd-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
//               <a
//                 href=""
//                 className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
//               >
//                 <Image
//                   src="/image-1.png"
//                   alt="burger 1"
//                   width ={407}
//                   height ={289}
//                   className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
//                   Classic {" "}
//                 </h3>
//               </a>
//             </div>

//             {/*  */}
//             <div className="col-span-2 px-[491]py-[192] sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
//               <a
//                 href=""
//                 className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
//               >
//                 <Image
//                   src="/image-2.png"
//                   alt="burger 2"
//                   width={684}
//                   height={289}
//                   className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
//                   {" "}
//                   Formal{" "}
//                 </h3>
//               </a>

//               <div className="grid gap-4 px-[64] py-[501] grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
//                 <a
//                   href=""
//                   className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4"
//                 >
//                   <Image
//                     src="/image-3.png"
//                     alt="burger 3"
//                     width={684}
//                     height={289}
//                     className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                   />
//                   <div className="absolute px-[786] py-[501] inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                   <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
//                     {" "}
//                     Party{" "}
//                   </h3>
//                 </a>

//                 <a
//                   href=""
//                   className="group relative flex flex-col overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src="/image-4.png"
//                     alt="burger 4"
//                     width={407}
//                     height={289}
//                     className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                   <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
//                     {" "}
//                     Gym{" "}
//                   </h3>
//                 </a>
//               </div>
//             </div>
           
//             {/*    */}

//             {/* <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex  flex-col">
//               <a
//                 href=""
//                 className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
//               >
//                 <Image
//                   src="/burger05.jpg"
//                   alt="burger 5"
//                   width={100}
//                   height={100}
//                   className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
//                 <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
//                   {" "}
//                   Cheesy Delights{" "}
//                 </h3>
//               </a>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Carousel;
