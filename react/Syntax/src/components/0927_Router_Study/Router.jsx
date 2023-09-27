import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';


// old version
// export default function Router() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/user' element={<User />} />
//           <Route path='/redirect' element={<Redirect />} />
//           <Route path='/user/:userId' element={<UserInfo />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// new version
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        // 컴포넌트에 해당하는 에러 페이지 지정 가능
        // errorElement: <NotFound2 />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'redirect',
        element: <Redirect />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/user',
    element: <App />,
    children: [
      {
        index: true,
        element: <User />,
      },
      {
        path: ':userId',
        element: <UserInfo />,
        children: [
          {
            path: 'comment',
            element: <Comment />,
          },
        ],
      },
    ],
  },
]);

export default Router;
