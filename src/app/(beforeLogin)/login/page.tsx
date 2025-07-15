'use client';

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();


useEffect(() => {
  if (true) {
    router.replace("/i/flow/login");
  }
}, []);

//if (조건) router.replace()  >   React가 의도된 로직으로 인식해 즉시 실행


  return <Main />;
}