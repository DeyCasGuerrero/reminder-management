import { IconType } from "react-icons";
import { AiFillAlert, AiFillBook, AiFillHome, AiFillSetting, AiFillSignal, AiOutlineUser } from "react-icons/ai";

interface Route {
  name: string;
  path: string;
  icon: IconType;
}

interface Section {
  sectionName: string;
  routes: Route[];
}

interface RoutesTypes {
  mainMenu: Section;
  general: Section;
  account: Section;
}

export const routes: RoutesTypes = {
  mainMenu: {
    sectionName: 'Main Menu',
    routes: [
      {
        name: 'Home',
        path: '/',
        icon: AiFillHome,
      },
      {
        name: 'Reminders',
        path: '/reminders',
        icon: AiFillBook,
      },
      {
        name: 'Analytic',
        path: '/analytic',
        icon: AiFillSignal,
      },
    ],
  },
  general: {
    sectionName: 'General',
    routes: [
      {
        name: 'Reports',
        path: '/general/reports',
        icon: AiFillAlert,
      },
    ],
  },
  account: {
    sectionName: 'Account',
    routes: [
      {
        name: 'Profile',
        path: '/account/profile',
        icon: AiOutlineUser,
      },
      {
        name: 'Settings',
        path: '/account/settings',
        icon: AiFillSetting,
      },
    ],
  },
};