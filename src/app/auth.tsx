// 'use client'
// // import { Button } from '@/components/ui/button'
// // import { useRouter, useSearchParams } from 'next/navigation'
// // import { toast } from "react-hot-toast";
// // import React, { useState, useEffect } from 'react'
// // import axios from "axios";

// // export const LoginButton = () => {
// //   const onLogin = async (e: React.FormEvent) => {
// //     try{
// //       const router = useRouter()
// //       const response = await axios.post("/api/logout");
// //       console.log("Login success", response.data);
// //       toast.success("Login success");
// //       router.push("/");
// //     } catch (error: any) {
// //       console.log("Login failed", error.message);
// //       toast.error(error.message);
// //     } 
// //   }
// //   return <button onClick={(onLogin)}>Sign in</button>
// // }

// // export const LogoutButton = () => {
  
// //   return <Button onClick={onLogout}>Sign Out</Button>
// // }

// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import axios from "axios";

// const LogoutButton = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const onLogout = async () => {
//     setIsLoading(true);
//     try {
//       // Send a POST request to the logout endpoint
//       const response = await axios.post("/api/logout");
//       toast.success("Logout success");
//     } catch (error: any) {
//       console.log("Logout failed", error.message);
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <button onClick={onLogout} disabled={isLoading}>
//       {isLoading ? "Logging out..." : "Sign Out"}
//     </button>
//   );
// };

// export default LogoutButton;
'use client'

import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
  return <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Sign Out</button>
}