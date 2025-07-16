"use client"

import style from './followRecommend.module.css';
import Image from 'next/image';

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
        id : 'elonmusk',
        nickname : 'Elon Musk',
        image : '/yRsRRjGO.jpg'
    };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <Image src={user.image} alt={user.id} width={20} height={20} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  )
}


