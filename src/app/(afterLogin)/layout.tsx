import { ReactNode } from "react";
import style from '@/app/(afterLogin)/layout.module.css';
import Link from "next/link";
import Logo from "../../../public/Logo.png"
import Image from "next/image";
import LogoutButton from "./_component/LogoutButton";
import NavMenu from "./_component/NavMenu";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecomnend";
import RightSearchZone from "./_component/RightSearchZone";

type Props = {children:ReactNode, modal:ReactNode};

export default function AfterLoginLayout({ children, modal}: Props ) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href={"/home"}>
                            <div className={style.logoPill}>
                                <Image src={Logo} alt="padotaki로고" width={70} height={30} priority />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href=" /compose/tweet" className={style.postButton}>게시하기</Link>
                        </nav>
                        <LogoutButton/>
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWraaper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <RightSearchZone />
                        <TrendSection />
                        <div className={style.followRecommend}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </div>
            </div>
            {modal}
        </div>
    )
}