/**
 * لجأنا الي استخدام صفحة خاصة بالرووتس لأنه مش أحسن اشي اني احطهم بالاب
 * الافضل ارتب شغلي ويكون كل اشي مفصول,
 *  أحسن الي في أي عملية بقوم فيها من  تعديل او تتطوير في البرنامج الي عندي
 *
 * const routes : عشان أقدر اعمله اكسبورت وأستعمله وين ما بدي خارج الملف
 */

import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import VerificationCode from "./pages/verificationCode/VerificationCode";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    //  في حالة صار عندي مشكلة بأي باث عندي بيطلعله الي جوا الErrorPage
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/verificationCode",
        element: <VerificationCode />,
      },
    ],
  }, // End MainLayout
]);
export default routes;
