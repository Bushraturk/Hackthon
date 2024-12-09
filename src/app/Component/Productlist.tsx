import React from 'react';
import Image from 'next/image';

const NewArrivals = () => {
  const products = [
    {
      name: "T-Shirt with Tape Details",
      rating: 4.5,
      price: 120,
      discountedPrice: 180,
      discount: 20,
      imageUrl: '/img1.png', // Added imageUrl
    },
    {
      name: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      discountedPrice: 130,
      discount: 30,
      imageUrl: '/img2.png', // Added imageUrl
    },
    {
      name: "Checkerered Shirt",
      rating: 4.5,
      price: 260,
      discountedPrice: 160,
      discount: 30,
      imageUrl: '/img3.png', // Added imageUrl
    },
    {
      name: "Sleeve Striped T-Shirt",
      rating: 4.5,
      price: 180,
      discountedPrice: 120,
      discount: 20,
      imageUrl: '/img4.png', // Added imageUrl
    },
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <div className="relative mb-4">
              {/* Render the image along with the URL */}
              <Image
                src={product.imageUrl} // Use imageUrl from the product data
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <div className="flex items-center space-x-1 text-yellow-400">
              {/* Render star ratings */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.5 3 2-6.5L0 7h6.5L10 0l3.5 7H20l-6.5 4.5L15.5 18z" />
                </svg>
              ))}
            </div>
            <div className="flex items-baseline mt-2">
              {product.discountedPrice ? (
                <>
                  <span className="text-lg font-semibold text-gray-900">${product.discountedPrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
                </>
              ) : (
                <span className="text-lg font-semibold text-gray-900">${product.price}</span>
              )}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {/* Show image URL */}
              <span>Image URL: {product.imageUrl}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-lg font-semibold text-blue-500">
          View All
        </a>
      </div>
    </section>
  );
};

export default NewArrivals;












// import React from 'react';
// import Image from 'next/image';

// const NewArrivals = () => {
//   const products = [
//     {
//       name: "T-Shirt with Tape Details",
//       rating: 4.5,
//       price: 120,
//       discountedPrice: 180,
//       discount: 20,
//     },
//     {
//       name: "Skinny Fit Jeans",
//       rating: 3.5,
//       price: 240,
//       discountedPrice: 130,
//       discount: 30,
//     },
//     {
//       name: "Checkerered Shirt",
//       rating: 4.5,
//       price: 260,
//       discountedPrice: 160,
//       discount: 30,
//     },
//     {
//       name: "Sleeve Striped T-Shirt",
//       rating: 4.5,
//       price: 180,
//       discountedPrice: 120,
//       discount: 20,
//     },
//   ];

//   return (
//     <section className="p-6 bg-white">
//       <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div key={index} className="border p-4 rounded-lg shadow-lg">
//             <div className="relative mb-4">
//               {/* Replace with actual image */}
//               <Image src={`/images/product${index + 1}.jpg`} alt={product.name} width={300} height={300} className="object-cover rounded-lg"/>
//               {product.discount && (
//                 <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                   {product.discount}% OFF
//                 </span>
//               )}
//             </div>
//             <h3 className="font-semibold text-lg">{product.name}</h3>
//             <div className="flex items-center space-x-1 text-yellow-400">
//               {/* Render star ratings */}
//               {[...Array(5)].map((_, i) => (
//                 <svg key={i} className={`w-4 h-4 ${i < product.rating ? "fill-current" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M10 15l-5.5 3 2-6.5L0 7h6.5L10 0l3.5 7H20l-6.5 4.5L15.5 18z"/>
//                 </svg>
//               ))}
//             </div>
//             <div className="flex items-baseline mt-2">
//               {product.discountedPrice ? (
//                 <>
//                   <span className="text-lg font-semibold text-gray-900">${product.discountedPrice}</span>
//                   <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
//                 </>
//               ) : (
//                 <span className="text-lg font-semibold text-gray-900">${product.price}</span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <a href="#" className="text-lg font-semibold text-blue-500">View All</a>
//       </div>
//     </section>
//   );
// };

// export default NewArrivals;




// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";

// const ProductCardGrid = () => {
//   // Define the product images
//   const ProductImages = [
//     "/img1.png",
//     "/img2.png",
//     "/img3.png",
//     "/img4.png",
//     // "/img5.jpg",
//     // "/img6.jpg",
//   ];

//   // State to manage visibility of all cards
//   const [showAll, setShowAll] = useState(false);

//   // Show either 4 cards or all cards based on state
//   const visibleCards = showAll ? ProductImages : ProductImages.slice(0, 4);

//   return (
//     <div className="relative text-center p-10">
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundColor: "gray-700", // Hardcoded background color
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           opacity: 0.1,
//         }}
//       />

//       <h1 className="font-bold text-4xl mb-4 text-black z-10 relative">
//         NEW ARRIVALS
//       </h1>

//       {/* Card Grid */}
//       <section
//         id="projects"
//         className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mt-10 mb-5"
//       >
//         {visibleCards.map((image, index) => (
//           <div
//             key={index}
//             className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
//           >
//             <a href="#">
//               <Image
//                 src={image}
//                 alt={`Product ${index + 1}`}
//                 width={288}
//                 height={320}
//                 className="object-cover rounded-t-xl"
//               />
//               <div className="px-4 py-3 w-full">
//                 <span className="text-slate-500 mr-3 uppercase text-xs">
//                   Category
//                 </span>
//                 <p className="text-lg font-bold text-red-700 truncate block capitalize">
//                   Product Name {index + 1}
//                 </p>
//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold text-black my-3 cursor-auto">
//                     $149
//                   </p>
//                   <del>
//                     <p className="text-sm text-blue-800 cursor-auto ml-2">
//                       $199
//                     </p>
//                   </del>
//                   <div className="ml-auto">
//                     <FaShoppingCart className="w-5 h-5 text-blue-800" />
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </section>

//       {/* Toggle Button */}
//       <button
//         className="mt-6 w-52 bg-white text-black border border-gray-400 py-3 px-6 rounded-full hover:bg-gray-800 hover:text-white"
//         onClick={() => setShowAll(!showAll)}
//       >
//         {showAll ? "Show Less" : "View All"}
//       </button>
//     </div>
//   );
// };

// export default ProductCardGrid;

// good code but try more

// "use client";
// import Image from "next/image";
// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";

// // import Image from "next/image";

// const ProductCardGrid = () => {
//   const ProductImages = [
//     "/img1.jpg",
//     "/img2.jpg",
//     "/img3.jpg",
//     "/img4.jpg",
//     "/img5.jpg",
//     "/img6.jpg",
//   ];

//   return (
//     <div className="relative text-center p-10">
//       <div
//         className="absolute inset-0 "
//         style={{
//           backgroundColor: "gray-700", // Hardcoded color
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 0,
//           opacity: 0.1,
//         }}
//       />

//       <h1 className="font-bold text-4xl mb-4 text-black z-10 relative">
//       NEW ARRIVALS
//       </h1>
//       {/* <h1 className="text-3xl text-black z-10 relative">Order Now</h1> */}

//       <section
//         id="projects"
//         className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 "
//       >
//         {Array.from({ length: 6 }).map((image, index) => (
//           <div
//             key={index}
//             className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
//           >
//             <a href="#">
//               <Image
//                 src={ProductImages[index]}
//                 alt={`Product ${index + 1}`}
//                 width={288}
//                 height={320}
//                 className="object-cover rounded-t-xl"
//               />
//               <div className="px-4 py-3 w-72">
//                 <span className="text-slate-500 mr-3 uppercase text-xs">
//                   Category
//                 </span>
//                 <p className="text-lg font-bold text-red-700 truncate block capitalize">
//                   Burger Name {index + 1}
//                 </p>
//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold terxt-black my-3 cursor-auto">
//                     $149
//                   </p>
//                   <del>
//                     <br />
//                     <p className="text-sm text-blue-800 cursor-auto ml-2">
//                       {""}$199
//                     </p>
//                   </del>

//                   <div className="ml-auto">
//                     <FaShoppingCart className="w-5 h-5 text-blue-800" />
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </section>
//       <button className="mt-6 w-52 bg-white text-black border border-spacing-2 py-3 px-6 rounded-full hover:bg-gray-800">
//             View All
//           </button>
//     </div>
//   );
// };

// export default ProductCardGrid;
