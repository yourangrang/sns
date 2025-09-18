'use client';

import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { getFollowingPosts } from '../_lib/getFollowingPosts';
import Post from "@/app/(afterLogin)/_component/Post";
import {Post as IPost} from "@/model/Post"
import { useInView } from 'react-intersection-observer';
import { Fragment, useEffect } from 'react';

export default function FollowingPosts() {
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string],
    number
  >({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    initialPageParam: 0, // required
    getNextPageParam: (lastPage) => {
  if (Array.isArray(lastPage) && lastPage.length > 0) {
    return lastPage[lastPage.length - 1]?.postId;
  }
  return undefined;
},
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    //. inView: ref가 화면에 보일 때
    //. !isFetching: 패칭상태 아닐때 (중복 패칭 방지)
    //. hasNextPage: 다음 페이지가 있을 때
    console.log('useEffect', { inView, isFetching, hasNextPage });
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return data?.pages.map((page, index) => (
    <Fragment key={`posts-followings-page-${index}`}>
      {page.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
      {!isFetching && <div ref={ref} style={{ height: 50 }}></div>}
      {isFetching && <div style={{ height: 50 }}></div>}
    </Fragment>
  ));
}