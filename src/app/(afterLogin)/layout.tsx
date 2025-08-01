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
                            <Link href="/compose/tweet" className={style.postButton}>
                                <span>게시하기</span>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                            </Link>
                        </nav>
                        <LogoutButton/>
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
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