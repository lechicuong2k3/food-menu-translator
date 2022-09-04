import { 
  BsGrid1X2Fill,
  BsFillBookmarkHeartFill,
  BsCloudUploadFill,
  BsFillCursorFill,
} from "react-icons/bs";

export const SidebarData = [
  {
    icon: BsGrid1X2Fill,
    heading: "Explore Restaurant",
    path: "",
  },
  {
    icon: BsFillBookmarkHeartFill,
    heading: "Your Favorite",
    path: "favorite",
  },
  {
    icon: BsCloudUploadFill,
    heading: "Menu Extraction",
    path: "extractmenu",
  },
  {
    icon: BsFillCursorFill,
    heading: "Find Restaurant",
    path: "findrestaurant",
  },
];