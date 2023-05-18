import Id from "../hooks/useId";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import AboutPage from "../pages/ServicesPage";
import DriverPage from "../pages/DriverPage";

interface NavbarList {
  id: any;
  title: string;
  path: string;
  element: JSX.Element;
  hidden: boolean;
}

export const navbar: NavbarList[] = [
  {
    id: Id,
    title: "Asosiy",
    path: "/home",
    element: <HomePage />,
    hidden: false,
  },
  {
    id: Id,
    title: "Buyurtma",
    path: "/order",
    element: <OrderPage />,
    hidden: false,
  },
  {
    id: Id,
    title: "Xizmatlar",
    path: "/services",
    element: <AboutPage />,
    hidden: false,
  },
  {
    id: Id,
    title: "Haydovchi",
    path: "/driver",
    element: <DriverPage />,
    hidden: false,
  },
];
