import style from './search.module.css';
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "@/app/(afterLogin)/search/_component/Tab";
import Post from "@/app/(afterLogin)/_component/Post";

//외부데이터 가져오기 위해 비동기처리
//서버컴포넌트라서useSearchParams()훅을 사용x -> props를 사용해 외부에서 쿼리데이터를 받아와야 함
type Props = {
    searchParams: Promise<{ q: string, f?: string, pf?: string }>;
}

export default async function Search({ searchParams }: Props) {
  const { q } = await searchParams;
  
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton/>
          </div>
          <div className={style.formZone}>
            <SearchForm q={q} />
          </div>
        </div>
        <Tab/>
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  )
}