import home from "../assets/images/home.svg";
import wish from "../assets/images/wishlist.svg";
import user from "../assets/images/users.svg";
import bar from "../assets/images/bar.svg";

type SidebarRoute = {
  id: string;
  path: string;
  label: string;
  icon: string;
};
export const SidebarRoutes: SidebarRoute[] = [
  {
    id: "1",
    path: "/",
    label: "Home",
    icon: home,
  },
  {
    id: "2",
    path: "/",
    label: "bar",
    icon: bar,
  },
  {
    id: "3",
    path: "/",
    label: "wishlist",
    icon: wish,
  },
  {
    id: "4",
    path: "/",
    label: "User",
    icon: user,
  },
];
