import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  GraduationCap,
  Code,
  FolderOpen,
  Briefcase,
  Award,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import pro from "@/assets/profile.jpg"
const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = !darkMode;
    setDarkMode(isDark);
    root.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "About", path: "/about", icon: User },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Certificates", path: "/certificates", icon: Award },
    { name: "LeetCode", path: "/leetcode", icon: Trophy },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md bg-background text-foreground shadow"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`w-80 h-screen fixed top-0 left-0 z-50 bg-background text-foreground border-r border-border flex flex-col justify-between transition-transform duration-300 transform
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block`}
      >
        {/* Scrollable Top Section */}
        <div className="overflow-y-auto flex-1 px-6 pt-8 pb-4 scrollbar-thin font-sans text-base font-medium">
          {/* Mobile Header */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Menu</h1>
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center text-center mb-10">
            <img
              src={pro}
              alt="Profile"
              className="w-28 h-28 rounded-full border-2 border-border shadow-md"
            />
            <h2 className="text-xl font-semibold mt-4">Pasupuleti Harish</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer | ML Enthusiast
            </p>
          </div>

          {/* Nav Links */}
          <nav>
            <ul className="space-y-3">
              {navLinks.map(({ name, path, icon: Icon }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 font-medium text-[16px] ${
                      location.pathname === path
                        ? "bg-blue-600 text-white dark:bg-blue-500 shadow scale-[1.03]"
                        : "hover:bg-muted dark:hover:bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="px-6 py-6 border-t border-border text-center space-y-4 font-sans">
          <a
            href="https://drive.google.com/file/d/1ScpegabWyGsp6qcTjd7GPNoPBpBmU8m1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow transition"
          >
            <Download className="inline w-4 h-4 mr-1" />
            Resume
          </a>

          <div className="flex justify-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle Theme"
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>

          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://github.com/harish-pasupuleti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/harish-pasupuleti"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:harishpasupuleti18@gmail.com"
              className="hover:text-blue-600 dark:hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
