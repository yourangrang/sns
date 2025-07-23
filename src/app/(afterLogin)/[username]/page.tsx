import style from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import Image from 'next/image';

export default function Profile() {
  const user = { // 임시
    id: 'yourang',
    nickname: '유랑',
    image: '/yourang.jpg',
  };
 

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image src={user.image} alt={user.id} width={40} height={40} priority />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>{user.id}</div>
        </div>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}