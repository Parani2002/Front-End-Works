// import React from "react";

// import { useForm } from "react-hook-form";

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };
//   return (
//     <div className="flex justify-center flex-row bg-gray-200 ">
//       <div className="rounded-2xl border w-9/12 h-3/12 flex flex-row mt-16  mb-16 bg-white">
//         <div className="w-6/12 rounded-2xl ">
//           <img
//             src="src/assets/image.jpg"
//             alt="image"
//             srcset=""
//             className="rounded-2xl"
//           />
//         </div>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col mr-8 ml-8 w-1/2 justify-center"
//         >
//           <h1 className="font-bold text-3xl text-center mb-4">
//             Create Your Account
//           </h1>

//           <h1 className="font-bold text-3xl tracking-widest text-center mb-8">
//             Signup Form
//           </h1>

//           <label className="tracking-wider mb-4 font-semibold">
//             First Name
//           </label>
//           <input
//             {...register("firstname", { required: true })}
//             className="border rounded h-10 bg-gray-100 mb-4 pl-2"
//           />
//           {errors.firstname && (
//             <span className="mt-1">This field is required</span>
//           )}

//           <label className="tracking-wider mb-4 font-semibold">Last Name</label>
//           <input
//             {...register("lastname", { required: true })}
//             className="border rounded h-10 bg-gray-100 mb-4 pl-2"
//           />
//           {errors.lastname && (
//             <span className="mt-1">This field is required</span>
//           )}

//           <label className="tracking-wider mb-4 font-semibold">
//             Email Address
//           </label>
//           <input
//             type="email"
//             {...register(
//               "emailaddress",
//               { required: true },
//               { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }
//             )}
//             className="border rounded mb-4 h-10 bg-gray-100 pl-2 focus:ring-1 focus:ring-sky-500"
//           />
//           {errors.emailaddress && (
//             <span className="mt-1">This field is required</span>
//           )}
//           <label
//             htmlFor="password"
//             className="tracking-wider mb-4 font-semibold"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="border rounded mb-4 h-10 bg-gray-100 pl-2 focus:ring-sky-500"
//             {...register("password", { required: true })}
//           />
//           <p className="mb-4 tracking-wider">
//             If already have an account?{" "}
//             <a href="http://" className="text-indigo-600 hover:text-indigo-500">
//               Sign in
//             </a>
//           </p>
//           <div className="flex items-center mb-4">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="terms and privacy"
//               className="ml-2 block tracking-wider"
//             >
//               I agree to the{" "}
//               <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                 {" "}
//                 Terms{" "}
//               </a>
//               and{" "}
//               <a
//                 href="privacy and policy"
//                 className="text-indigo-600 hover:text-indigo-500"
//               >
//                 Privacy Policy
//               </a>
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="font-semibold tracking-wide border rounded-xl border-transparent transition delay-100 ease-in-out bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:tracking-widest pt-4 pb-4"
//           >
//             SIGN UP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
