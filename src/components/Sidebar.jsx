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
import pro from "@/assets/profile.jpg";

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
          className="p-2 rounded-md bg-background text-foreground shadow border border-border"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`w-72 h-screen fixed top-0 left-0 z-50 bg-card text-foreground border-r border-border flex flex-col justify-between transition-transform duration-300 transform
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block`}
      >
        {/* Top Section */}
        <div className="overflow-y-auto flex-1 px-6 pt-6 pb-4 scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted">
          {/* Mobile Header */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Menu</h1>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center text-center mb-10">
            <img
              src={pro}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-border shadow-md object-cover"
            />
            <h2 className="text-lg font-bold mt-3">Pasupuleti Harish</h2>
            <p className="text-sm text-muted-foreground mt-1">Full Stack Developer | ML Enthusiast</p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-1">
              {navLinks.map(({ name, path, icon: Icon }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-colors duration-200 text-[15px] font-medium
                    ${
                      location.pathname === path
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
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

        {/* Bottom Section */}
        <div className="px-6 py-5 border-t border-border text-center">
          <a
            href="https://drive.google.com/file/d/1fkZoNoI1k2QAMHMXzVbsWDMraa19vtfb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full shadow transition"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </a>

          <div className="flex justify-center mt-4 space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex justify-center gap-5 text-xl mt-4">
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
