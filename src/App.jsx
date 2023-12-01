import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/Login";
import Main from "./page/Main";
import Signup from "./components/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";
import RootLayout from "./root/RootLayout";
import LoanForm from "./page/LoanRec";
import Diet from "./page/Diet";
import Gym from "./page/Gym";
import LoanRec from "./page/LoanRec";

function App() {
  const { user } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: user ? <Main /> : <Navigate to="/login" />,
        },
        {
          path: "/loanrec",
          element: user ? <LoanRec /> : <Navigate to="/login" />,
        },
        {
          path: "/diet",
          element: <Diet />,
        },
        {
          path: "/gym",
          element: user ? <Gym /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: !user ? <Login /> : <Navigate to="/" />,
        },
        {
          path: "/signup",
          element: !user ? <Signup /> : <Navigate to="/" />,
        },
        {
          path: "*",
          element: <Main />,
        },
      ],
    },
  ]);
  // const router = createBrowserRouter({
  //   path: "/",
  //   element: <RootLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: user ? <Main /> : <Navigate to="/login" />,
  //     },
  //     {
  //       path: "/login",
  //       element: !user ? <Login /> : <Navigate to="/" />,
  //     },
  //     {
  //       path: "/signup",
  //       element: !user ? <Signup /> : <Navigate to="/" />,
  //     },
  //     {
  //       path: "loanform",
  //       element: <LoanForm />,
  //     },
  //     {
  //       path: "diet",
  //       element: <Diet />,
  //     },
  //     {
  //       path: "gym",
  //       element: <Gym />,
  //     },
  //     {
  //       path: "*",
  //       element: user ? <Main /> : <Navigate to="/login" />,
  //     },
  //   ],
  // });
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
