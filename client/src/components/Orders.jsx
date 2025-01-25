import React from 'react';

const Orders = () => {
    return (
        // <section className="py-24 relative">
        //     <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        //         <div className="flex items-start flex-col gap-6 xl:flex-row ">
        //             <div className="w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
        //                 <div className="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
        //                     <h2
        //                         className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
        //                         Order Summary
        //                     </h2>
        //                     <div className="data py-6 border-b border-gray-200">
        //                         <div className="flex items-center justify-between gap-4 mb-5">
        //                             <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Product Cost</p>
        //                             <p className="font-medium text-lg leading-8 text-gray-900">$360.00</p>
        //                         </div>
        //                         <div className="flex items-center justify-between gap-4 mb-5">
        //                             <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Shipping</p>
        //                             <p className="font-medium text-lg leading-8 text-gray-600">$40.00</p>
        //                         </div>
        //                         <div className="flex items-center justify-between gap-4 ">
        //                             <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">Coupon Code</p>
        //                             <p className="font-medium text-lg leading-8 text-emerald-500">#APPLIED</p>
        //                         </div>
        //                     </div>
        //                     <div className="total flex items-center justify-between pt-6">
        //                         <p className="font-normal text-xl leading-8 text-black ">Subtotal</p>
        //                         <h5 className="font-manrope font-bold text-2xl leading-9 text-indigo-600">$400.00</h5>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-full max-w-sm md:max-w-3xl max-xl:mx-auto">
        //                 <div className="grid grid-cols-1 gap-6">
        //                     <div className="rounded-3xl p-6 bg-gray-100 border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 transition-all duration-500 hover:border-gray-400">
        //                         <div className="img-box ">
        //                             <img src="https://pagedone.io/asset/uploads/1701167635.png" alt="Denim Jacket image" className="w-full md:max-w-[122px] rounded-lg object-cover"/>
        //                         </div>
        //                         <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
        //                             <div className="">
        //                                 <h2 className="font-medium text-xl leading-8 text-black mb-3">Dark Denim Jacket</h2>
        //                                 <p className="font-normal text-lg leading-8 text-gray-500 ">By: Dust Studios</p>

        //                             </div>
        //                             <div className="flex items-center justify-between gap-8">
        //                                 <div className="flex items-center gap-3">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                 </div>
        //                                 <h6 className="font-medium text-xl leading-8 text-indigo-600">$120.00</h6>
        //                             </div>
        //                         </div>
        //                     </div>

        //                     <div class="rounded-3xl p-6 bg-gray-100 flex flex-col md:flex-row md:items-center gap-5 border border-gray-100 transition-all duration-500 hover:border-gray-400">
        //                         <div className="img-box ">
        //                             <img src="https://pagedone.io/asset/uploads/1701167652.png" alt="Leather Military Boots image" className="w-full md:max-w-[122px] rounded-lg object-cover"/>
        //                         </div>
        //                         <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
        //                             <div className="">
        //                                 <h2 className="font-medium text-xl leading-8 text-black mb-3">Leather Military Boots
        //                                 </h2>
        //                                 <p className="font-normal text-lg leading-8 text-gray-500 ">Lethal Lifestyle</p>

        //                             </div>
        //                             <div className="flex items-center justify-between gap-8">
        //                                 <div className="flex items-center gap-3">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                 </div>
        //                                 <h6 className="font-medium text-xl leading-8 text-indigo-600">$120.00</h6>
        //                             </div>
        //                         </div>
        //                     </div>

        //                     <div className="rounded-3xl p-6 bg-gray-100 flex flex-col md:flex-row md:items-center gap-5 border border-gray-100 transition-all duration-500 hover:border-gray-400">
        //                         <div className="img-box ">
        //                             <img src="https://pagedone.io/asset/uploads/1701167668.png" alt="Writing Pad image" className="w-full md:max-w-[122px] rounded-lg object-cover"/>
        //                         </div>
        //                         <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 md:gap-8">
        //                             <div className="">
        //                                 <h2 className="font-medium text-xl leading-8 text-black mb-3">Writing Pad</h2>
        //                                 <p className="font-normal text-lg leading-8 text-gray-500 ">Books</p>

        //                             </div>
        //                             <div className="flex items-center justify-between gap-8">
        //                                 <div className="flex items-center gap-3">
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        //                                         viewBox="0 0 20 20" fill="none">
        //                                         <g clip-path="url(#clip0_14099_1497)">
        //                                             <path
        //                                                 d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
        //                                                 fill="#FBBF24" />
        //                                         </g>
        //                                         <defs>
        //                                             <clipPath id="clip0_14099_1497">
        //                                                 <rect width="20" height="20" fill="white" />
        //                                             </clipPath>
        //                                         </defs>
        //                                     </svg>
        //                                 </div>
        //                                 <h6 className="font-medium text-xl leading-8 text-indigo-600">$120.00</h6>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                    Orders
                </h2>
                <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                    <div
                        className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                        <div className="data">
                            <p className="font-semibold text-base leading-7 text-black">Order Id: <span className="text-indigo-600 font-medium">#10234987</span></p>
                            <p className="font-semibold text-base leading-7 text-black mt-4">Order Payment : <span className="text-gray-400 font-medium"> 18th march
                                2021</span></p>
                        </div>
                        <button
                            className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Track
                            Your Order</button>
                    </div>
                    <div className="w-full px-3 min-[400px]:px-6">
                        <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                            <div className="img-box max-lg:w-full">
                                <img src="https://pagedone.io/asset/uploads/1701167607.png" alt="Premium Watch image"
                                    className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover" />
                            </div>
                            <div className="flex flex-row items-center w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                    <div className="flex items-center">
                                        <div className="">
                                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                                Premium Quality Dust Watch</h2>
                                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                                By: Dust Studios</p>
                                            <div className="flex items-center ">
                                                <p
                                                    className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Size: <span className="text-gray-500">100 ml</span></p>
                                                <p className="font-medium text-base leading-7 text-black ">Qty: <span
                                                    className="text-gray-500">2</span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">price</p>
                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">$100</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Status
                                                </p>
                                                <p
                                                    className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                    Ready for Delivery</p>
                                            </div>

                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                    Expected Delivery Time</p>
                                                <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                    23rd March 2021</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
                            <div className="img-box max-lg:w-full">
                                <img src="https://pagedone.io/asset/uploads/1701167621.png" alt="Diamond Watch image"
                                    className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover" />
                            </div>
                            <div className="flex flex-row items-center w-full ">
                                <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                    <div className="flex items-center">
                                        <div className="">
                                            <h2 className="font-semibold text-xl leading-8 text-black mb-3 ">
                                                Diamond Platinum Watch</h2>
                                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                                                Diamond Dials</p>
                                            <div className="flex items-center  ">
                                                <p
                                                    className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Size: <span className="text-gray-500">Regular</span></p>
                                                <p className="font-medium text-base leading-7 text-black ">Qty: <span
                                                    className="text-gray-500">1</span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">price</p>
                                                <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">$100</p>
                                            </div>
                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm leading-7 text-black">Status
                                                </p>
                                                <p
                                                    className="font-medium text-sm leading-6 py-0.5 px-3 whitespace-nowrap rounded-full lg:mt-3 bg-indigo-50 text-indigo-600">
                                                    Dispatched</p>
                                            </div>

                                        </div>
                                        <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                            <div className="flex gap-3 lg:block">
                                                <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                    Expected Delivery Time</p>
                                                <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                    23rd March 2021</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                        <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                            <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Paid using Credit Card <span className="text-gray-500">ending with 8822</span></p>
                        </div>
                        <p className="font-semibold text-lg text-black py-6">Total Price: <span className="text-indigo-600"> $200.00</span></p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Orders;