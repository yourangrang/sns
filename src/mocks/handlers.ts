import {http, HttpResponse} from 'msw'
import {faker} from "@faker-js/faker";


function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const User = [
  {id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg'},
  {id: 'yourang', nickname: '유랑', image: '/yourang.jpg'},
  {id: 'neko', nickname: '네코', image: faker.image.avatar()},
]

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const handlers = [
  http.post(`${baseUrl}/api/login`, () => {
    console.log('로그인');
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      },
    })
  }),
  http.post(`${baseUrl}/api/logout`, () => {
    console.log('로그아웃');
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  }),
  http.post(`${baseUrl}/api/users`, async ({ request }) => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      },
    });
  }),
  // 게시글
  http.get(`${baseUrl}/api/postRecommends`, ({ request }) => {
    const url = new URL(request.url)
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
    return HttpResponse.json(
      [
        {
          postId: cursor + 1,
          User: User[0],
          content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 2,
          User: User[0],
          content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            {imageId: 1, link: faker.image.urlPicsumPhotos()},
            {imageId: 2, link: faker.image.urlPicsumPhotos()},
          ],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 3,
          User: User[0],
          content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 4,
          User: User[0],
          content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            {imageId: 1, link: faker.image.urlPicsumPhotos()},
            {imageId: 2, link: faker.image.urlPicsumPhotos()},
            {imageId: 3, link: faker.image.urlPicsumPhotos()},
            {imageId: 4, link: faker.image.urlPicsumPhotos()},
          ],
          createdAt: generateDate(),
        },
        {
          postId: cursor + 5,
          User: User[0],
          content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
          Images: [
            {imageId: 1, link: faker.image.urlPicsumPhotos()},
            {imageId: 2, link: faker.image.urlPicsumPhotos()},
            {imageId: 3, link: faker.image.urlPicsumPhotos()},
          ],
          createdAt: generateDate(),
        },
      ]
    )
  }),
 http.get(`${baseUrl}/api/followingPosts`, ({ request }) => {
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} Stop following me. I'm too famous.`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[0],
          content: `${2} Stop following me. I'm too famous.`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} Stop following me. I'm too famous.`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[0],
          content: `${4} Stop following me. I'm too famous.`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[0],
          content: `${5} Stop following me. I'm too famous.`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  http.get(`${baseUrl}/api/search/:tag`, ({ request, params }) => {
    const { tag } = params;
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} 검색결과 ${tag}`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[0],
          content: `${2} 검색결과 ${tag}`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} 검색결과 ${tag}`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[0],
          content: `${4} 검색결과 ${tag}`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[0],
          content: `${5} 검색결과 ${tag}`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  http.get(`${baseUrl}/api/users/:userId/posts`, ({ request, params }) => {
    const { userId } = params;
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} ${userId}의 게시글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[0],
          content: `${2} ${userId}의 게시글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} ${userId}의 게시글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[0],
          content: `${4} ${userId}의 게시글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[0],
          content: `${5} ${userId}의 게시글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  http.get(`${baseUrl}/api/users/:userId`, ({ request, params }) => {
    const {userId} = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(
        found,
      );
    }
    return HttpResponse.json({ message: 'no_such_user' }, {
      status: 404,
    })
  }),
  http.get(`${baseUrl}/api/posts/:postId`, ({ request, params }) => {
    const {postId} = params;
    if (parseInt(postId as string) > 10) {
      return HttpResponse.json({ message: 'no_such_post' }, {
        status: 404,
      })
    }
    return HttpResponse.json(
      {
        postId,
        User: User[0],
        content: `${1} 게시글 아이디 ${postId}의 내용`,
        Images: [
          {imageId: 1, link: faker.image.urlPicsumPhotos()},
          {imageId: 2, link: faker.image.urlPicsumPhotos()},
        ],
        createdAt: generateDate(),
      },
    );
  }),
  http.get(`${baseUrl}/api/posts/:postId/comments`, ({ request, params }) => {
    const { postId } = params;
    return HttpResponse.json(
      [
        {
          postId: 1,
          User: User[0],
          content: `${1} 게시글 ${postId}의 답글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 2,
          User: User[0],
          content: `${2} 게시글 ${postId}의 답글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 3,
          User: User[0],
          content: `${3} 게시글 ${postId}의 답글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 4,
          User: User[0],
          content: `${4} 게시글 ${postId}의 답글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
        {
          postId: 5,
          User: User[0],
          content: `${5} 게시글 ${postId}의 답글`,
          Images: [{imageId: 1, link: faker.image.urlPicsumPhotos()}],
          createdAt: generateDate(),
        },
      ]
    )
  }),
  http.get(`${baseUrl}/api/followRecommends`, ({ request}) => {
    return HttpResponse.json(User);
  }),
  //트렌드
  http.get(`${baseUrl}/api/trends`, ({ request }) => {
    return HttpResponse.json(
      [
        {tagId: 1, title: '아이폰17', count: 1264},
        {tagId: 2, title: '서울 맛집', count: 1264},
        {tagId: 3, title: '비트코인 급등', count: 1264},
        {tagId: 4, title: '주식 대박 종목', count: 1264},
        {tagId: 5, title: '넷플릭스 추천', count: 1264},
        {tagId: 6, title: '날씨', count: 1264},
        {tagId: 7, title: '인공지능 챗봇', count: 1264},
        {tagId: 8, title: '오늘의 운세', count: 1264},
        {tagId: 9, title: '트럼프', count: 1264},
      ]
    )
  }),
];