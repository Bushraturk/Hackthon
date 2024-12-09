// components/HeroSection.jsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0F1] px-4 md:px-8 py-9">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Find Clothes That Matches Your Style
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 w-52 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
            Shop Now
          </button>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600">International Brands</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">2,000+</h3>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">30,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          
          <Image
            src="/hero1.png" // Replace with the actual image path
            alt="Hero Section"
            fill
            className="object-cover rounded-lg"
          />
          {/* First Column */}
  <div className="items-center mt-5">
    <Image
      src="/public/vector.png"
      alt="Vector"
      
      width={100}
      height={100}
      
      className="w-[100px] h-auto bg-black text-black"
    />
    <Image
      src="/public/vector1.png"
      alt="Vector1"
      width={100}
      
      height={100}
      className="w-[100px] h-auto bg-black mt-4"
    />
  </div>
          <div className="bg-black text-white mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
  
  </div>
         
        </div>
      </div>
      {/* <div className="flex mt-1  w-[1440px] top-[797px] h-[122px] bg-black text-white gap-8">
        
        <img src="logo1.png" alt="" className="w-[166.48px] h-[33.16px] top-[841px] left-[100px] ml-10"/>
        <img src="logo2.png" alt="" className="w-[91px] h-[38px] top-[839px] left-[372.48px]"/>
        <img src="logo3.png" alt="" className="w-[156px] h-[36px] top-[840px] left-[569.48px]"/>
        <img src="logo4.png" alt="" className="w-[194px] h-[32px] top-[842px] left-[831.48px]" />
        <img src="logo5.png" alt="" className="w-[206.79px] h-[33.35px] top-[841px] left-[1131.48px]"/>
       
      </div> */}
      <div className="flex justify-center items-center mt-0 w-full h-[122px] bg-black text-white space-x-8 px-6 md:px-16">
  {/* Logo 1 */}
  <img
    src="logo1.png"
    alt="Logo 1"
    className="w-[120px] md:w-[166.48px] h-auto"
  />
  {/* Logo 2 */}
  <img
    src="logo2.png"
    alt="Logo 2"
    className="w-[80px] md:w-[91px] h-auto"
  />
  {/* Logo 3 */}
  <img
    src="logo3.png"
    alt="Logo 3"
    className="w-[130px] md:w-[156px] h-auto"
  />
  {/* Logo 4 */}
  <img
    src="logo4.png"
    alt="Logo 4"
    className="w-[160px] md:w-[194px] h-auto"
  />
  {/* Logo 5 */}
  <img
    src="logo5.png"
    alt="Logo 5"
    className="w-[170px] md:w-[206.79px] h-auto"
  />
</div>


    </section>
  );
}


// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#F2F0F1] px-4 md:px-8 py-9">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Text Content */}
//         <div className="text-center md:text-left mt-4">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-gray-900 leading-tight">
//             Find Clothes That Matches Your Style
//           </h1>
//           <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-6 leading-relaxed">
//             Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//           </p>
//           <button className="mt-6 w-44 sm:w-52 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition">
//             Shop Now
//           </button>
//         </div>
//         {/* Statistics Section */}
//       <div className="flex lg:hidden sm:block mt-10 gap-6 text-center">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">200+</h3>
//           <p className="text-gray-600">Incredible Brands</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">2,000+</h3>
//           <p className="text-gray-600">High-Quality Products</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">30,000+</h3>
//           <p className="text-gray-600">Happy Customers</p>
//         </div>
//         </div>

//         {/* Hero Image */}
//         <div className="w-full lg:h-[full] ">
//           <img
//             src="/hero1.png"
//             alt="Hero Image"
//             // layout="fill"
//             // objectFit="cover"
//             className="w-full sm:h-64 lg:h-[450px]"
//           />
//         </div>
//       </div>

      
//       {/* </div> */}
//     </section>
//   );
// }










// // // components/HeroSection.jsx
// // import Image from "next/image";

// // export default function HeroSection() {
// //   return (
// //     <section className="bg-[#F2F0F1] ml-3 px-4 md:px-8 py-9">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
// //         {/* Text Content */}
// //         <div className="text-center mt-0 md:text-left">
// //           <h1 className="text-4xl w-[577] h-[173]top-1 lg:text-7xl md:text-6xl font-bold text-gray-900">
// //             Find Clothes That Matches Your Style
// //           </h1>
// //           <p className="text-gray-600 text-xl mt-9">
// //             Browse through our diverse range of meticulously crafted garments,
// //             designed to bring out your individuality and cater to your sense of
// //             style.
// //           </p>
// //           <button className="mt-6 w-52 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
// //             Shop Now
// //           </button>
// //         </div>
// //         {/* Hero Image */}
// //         <div className="relative w-full h-64 md:h-auto">
// //           <img
// //             src="/hero1.png"
// //             alt="Hero Image"
// //             // layout="fill"
// //             // objectFit="cover"
// //             className="rounded-md"
// //           />
// //         </div>
// //         {/* Statistics */}
// //         <div className="mt-8 flex justify-center md:justify-start space-x-6">
// //           <div>
// //             <h3 className="text-xl font-bold text-gray-900">200+</h3>
// //             <p className="text-gray-600">Incredible Brands</p>
// //           </div>
// //           <div>
// //             <h3 className="text-xl font-bold text-gray-900">2,000+</h3>
// //             <p className="text-gray-600">High-Quality Products</p>
// //           </div>
// //           <div>
// //             <h3 className="text-xl font-bold text-gray-900">30,000+</h3>
// //             <p className="text-gray-600">Happy Customers</p>
// //           </div>
// //                  
// //         </div>
// //         <div className="w-full h-[full] bg-black mt-4" />
// //       </div>
// //     </section>
// //   );
// // }
