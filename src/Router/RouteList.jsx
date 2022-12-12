
import Login from "../Pages/Login";
import Link1 from "../Pages/Link1";
import Link2 from "../Pages/Link2";
import Link3 from "../Pages/Link3";

export const routepath = [
  {
    path: "/",
    Element: Login,
    private: false,
  },
  {
    path: "/link1",
    Element: Link1,
    private: true,
  },
  {
    path: "/link2",
    Element: Link2,
    private: true,
  },
  {
    path: "/link3",
    Element: Link3,
    private: true,
  },

];


