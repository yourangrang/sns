import styles from "./main.module.css";
import Image from "next/image";
import Logo from "../../../../public/Logo.png";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={Logo}  width={400} height={150}  alt="logo" priority />
      </div>
      <div className={styles.right}>
        <h1>
          새로운 이야기의 파도를 타고<br/>
          더 넓은 세상과 이어지는 즐거움!
        </h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <h3>이미 파도타기에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={styles.login}>로그인</Link>
      </div>
    </>
  )
}