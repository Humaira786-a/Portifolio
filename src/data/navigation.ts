import { Home, User, FolderGit2, BookOpen, Mail } from "lucide-react";
import { ComponentType } from "react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

export const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Projects",
    href: "/project",
    icon: FolderGit2,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];
