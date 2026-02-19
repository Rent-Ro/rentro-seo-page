"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavigateAuto() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("https://rentro.sa");
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return null;
}
