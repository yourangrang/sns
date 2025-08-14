"use client";


import Trend from './Trend';
import style from './trendSection.module.css';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function TrendSection() {
    const pathname = usePathname();
    const { data } = useSession();

    if(pathname === '/explore')return null;


  if(data?.user) {
    return (
      <div className={style.trendBg}>
          <div className={style.trend}>
              <h3>나를 위한 트렌드</h3>
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
          </div>
      </div>
    )
  }

  return(
    <div className={style.trendBg}>
          <div className={style.noTrend}>
              로그인해서 트렌드를 확인하세요
          </div>
      </div>
  )
}
