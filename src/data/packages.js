export const packages = [
  {
    id: "kedarkantha",
    type: "trek",
    title: "Kedarkantha Trek",
    subtitle: "The finest summit climb for beginners",
    duration: "6 days & 5 nights",
    rating: 4.8,
    reviews: "1.4k",
    images: ["/src/assets/9.jpg", "/src/assets/10.jpg", "/src/assets/9.jpg"],
    route: ["Sankri", "Juda Ka Talab", "Base Camp", "Summit"],
    price: 12500,
    originalPrice: 16500,
  },

  {
    id: "rajasthan-luxury",
    type: "tour",
    title: "Luxury Rajasthan – Winter Flash Sale",
    subtitle: "Free hotel & SUV upgrade",
    duration: "6 days & 5 nights",
    rating: 4.5,
    reviews: "3k",
    images: ["/src/assets/rajasthan1.jpg", "/src/assets/rajasthan2.jpg"],
    route: ["Jaipur", "Jodhpur", "Jaisalmer"],
    price: 30052,
    originalPrice: 40052,
  },
];
  // const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollAmount = clientWidth * 0.8;
//       const scrollTo =
//         direction === "left"
//           ? scrollLeft - scrollAmount
//           : scrollLeft + scrollAmount;
//       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12 font-sans overflow-visible">
//       {/* Heading */}
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
//           <span className="text-orange-500">India</span> Packages of the Week
//           <span className="text-2xl">✨</span>
//         </h2>
//         <p className="text-gray-400 text-sm mt-1 font-medium">
//           Price updated as of 21st Jan
//         </p>
//       </div>

//       {/* Slider Container with Absolute Navigation */}
//       <div className="relative group">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Scrollable Area */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory touch-pan-x"
//           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//         >
//           {packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="min-w-[300px] md:min-w-[380px]  h-[520px] relative rounded-2xl overflow-hidden snap-start shadow-lg group/card"
//             >
//               {/* Actual Visible Image */}
//               <img
//                 src={pkg.image}
//                 alt={pkg.title}
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//               />

//               {/* Gradient Overlay (Fade from bottom to middle) */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-t ${pkg.overlayColor} z-10`}
//               />

//               {/* Text Content */}
//               <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-[11px] font-bold bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
//                     {pkg.duration}
//                   </span>
//                   <div className="flex items-center gap-1 text-xs font-bold bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
//                     <Star
//                       size={14}
//                       className="fill-yellow-400 text-yellow-400"
//                     />{" "}
//                     {pkg.rating}
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold leading-tight mb-3 group-hover/card:text-orange-400 transition-colors">
//                   {pkg.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {pkg.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="text-[10px] font-medium bg-white/10 px-2 py-1 rounded backdrop-blur-sm border border-white/10"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-end gap-2">
//                     <span className="text-2xl font-black italic">
//                       INR {pkg.price}
//                     </span>
//                     <span className="text-xs line-through opacity-60 mb-1">
//                       INR {pkg.oldPrice}
//                     </span>
//                     <div className="relative mb-1">
//                       <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-sm font-black">
//                         SAVE INR {pkg.save}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button className="p-3 bg-white/10 hover:bg-orange-500 rounded-2xl border border-white/20 transition-all flex items-center justify-center">
//                       <Phone size={20} />
//                     </button>
//                     <button className="flex-1 bg-white text-slate-900 font-bold py-3.5 rounded-2xl hover:bg-orange-600 hover:text-white transition-all shadow-lg active:scale-95">
//                       Request Callback
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }  



  // return (
  //   <>
  //     <div className="bg-white rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
  //       {/* Header */}
  //       <div className="mb-5">
  //         <h3 className="text-lg font-bold text-slate-800">Get a Callback</h3>
  //         <p className="text-sm text-slate-500 mt-1">
  //           Get exclusive offers & expert assistance
  //         </p>
  //       </div>

  //       {/* Form */}
  //       <form onSubmit={handleSubmit} className="space-y-3">
  //         <input
  //           required
  //           placeholder="Your Name"
  //           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
  //         />

  //         <input
  //           type="email"
  //           required
  //           placeholder="Email Address"
  //           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
  //         />

  //         {/* Phone */}
  //         <div className="flex gap-3">
  //           <input
  //             value="+91"
  //             disabled
  //             className="w-[70px] px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-center"
  //           />
  //           <input
  //             required
  //             placeholder="Phone Number"
  //             className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
  //           />
  //         </div>

  //         <input
  //           type="date"
  //           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
  //         />

  //         <input
  //           type="number"
  //           min="1"
  //           placeholder="Traveller Count"
  //           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
  //         />

  //         <textarea
  //           rows="2.5"
  //           placeholder="Message (Optional)"
  //           className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-400 outline-none"
  //         />

  //         {/* Privacy */}
  //         {/* Privacy – compact single line */}
  //         {/* <div className="flex items-start gap-2 text-sm text-slate-600 mt-2">
  //           <CheckCircle2
  //             size={16}
  //             className="text-emerald-500 mt-0.5 shrink-0"
  //           />
  //           <span>
  //             Your contact details are secure and will only be used to contact
  //             you.
  //           </span>
  //         </div> */}

  //         <button
  //           type="submit"
  //           className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-bold"
  //         >
  //           Send Enquiry
  //         </button>
  //       </form>
  //     </div>

  //     {/* SUCCESS MODAL */}
  //     <AnimatePresence>
  //       {showSuccess && (
  //         <motion.div
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
  //         >
  //           <motion.div
  //             initial={{ scale: 0.9, opacity: 0 }}
  //             animate={{ scale: 1, opacity: 1 }}
  //             exit={{ scale: 0.9, opacity: 0 }}
  //             className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative"
  //           >
  //             <button
  //               onClick={() => setShowSuccess(false)}
  //               className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
  //             >
  //               <X />
  //             </button>

  //             <CheckCircle2
  //               size={48}
  //               className="text-emerald-500 mx-auto mb-4"
  //             />

  //             <h3 className="text-xl font-bold text-slate-800 mb-2">
  //               Thank you!
  //             </h3>

  //             <p className="text-sm text-slate-600 mb-6">
  //               Your enquiry has been received successfully.
  //               <br />
  //               Our destination expert will reach out to you shortly.
  //             </p>

  //             <button
  //               onClick={() => setShowSuccess(false)}
  //               className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg font-semibold"
  //             >
  //               OK
  //             </button>
  //           </motion.div>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>
  //   </>
  // );