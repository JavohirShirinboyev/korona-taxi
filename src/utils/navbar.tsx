import Id from "../hooks/useId";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/AboutPage";
import DriverPage from "../pages/DriverPage";

interface NavbarList {
  id: any;
  title: string;
  path: string;
  element: any;
}

export const navbar: NavbarList[] = [
  {
    id: Id,
    title: "Asosiy",
    path: "/home",
    element: <HomePage />,
  },
  {
    id: Id,
    title: "Buyurtma",
    path: "/order",
    element: <OrderPage />,
  },
  {
    id: Id,
    title: "Biz haqimizda",
    path: "/about",
    element: <AboutPage />,
  },
  {
    id: Id,
    title: "Haydovchi",
    path: "/driver",
    element: <DriverPage />,
  },
];
