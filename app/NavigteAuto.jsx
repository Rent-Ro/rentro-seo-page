"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavigateAuto() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("https://rentro.ae");
  //   }, 20000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return null;
}
