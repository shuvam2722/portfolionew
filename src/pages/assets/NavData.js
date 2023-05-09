import { AiOutlineHome, AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiCodeSSlashLine } from "react-icons/ri";
import { BiConversation } from "react-icons/bi";
import { TfiControlForward } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";

const my_navbar_data = [
  {
    index: 1,
    nav_link: `/#home_page`,
    navbar_name: "Home",
    nav__icon: AiOutlineHome,
    bc: "#00a5ee",
  },
  {
    index: 2,
    nav_link: `/#about_myself`,
    navbar_name: "About",
    nav__icon: TfiControlForward,
  },
  {
    index: 3,
    nav_link: `/#my_skill`,
    navbar_name: "Skills",
    nav__icon: RiCodeSSlashLine,
  },
  {
    index: 4,
    nav_link: "Qualification/#my-qualification",
    navbar_name: "Qualification",
    nav__icon: AiOutlineSafetyCertificate,
  },
  {
    index: 5,
    nav_link: "Achievements/#my-achievements",
    navbar_name: "Activities",
    nav__icon: AiOutlineSafetyCertificate,
  },
  {
    index: 6,
    nav_link: "/#my-work",
    navbar_name: "Projects",
    nav__icon: RxDashboard,
  },
  {
    index: 7,
    nav_link: `/#contact_page`,
    navbar_name: "Contact",
    nav__icon: BiConversation,
  },
];

export default my_navbar_data;
