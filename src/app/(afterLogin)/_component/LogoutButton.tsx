"use client"

import style from "./logoutButton.module.css";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Image from 'next/image';

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogout = () => {
    signOut({ redirect: false })
      .then(() => {
        router.replace('/');
      });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={me.user?.image as string} alt={me.user?.email as string} width={20} height={20} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  )
}