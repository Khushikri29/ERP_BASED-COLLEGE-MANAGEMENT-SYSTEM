import React from 'react';
import {
  Person,
  Folder,
  Slideshow,
  ImportContacts,
  Checklist,
  TrendingUp,
  Groups,
  Grading,
  Notifications,
} from '@mui/icons-material';

// --- Sidebar Data ---
const sidebarItems = [
    { name: 'Profile', icon: Person, href: '#', active: false },
    { name: 'Resources', icon: Folder, href: '#', active: false },
    { name: 'Classes', icon: Slideshow, href: '#', active: true }, // The active one
    { name: 'Library', icon: ImportContacts, href: '#', active: false },
    { name: 'Attendance', icon: Checklist, href: '#', active: false },
    { name: 'Dropout Prediction', icon: TrendingUp, href: '#', active: false },
    { name: 'Students', icon: Groups, href: '#', active: false },
    { name: 'Exams', icon: Grading, href: '#', active: false },
];

// --- Sidebar Component ---
const Sidebar = () => (
    <aside className="w-64 bg-white flex flex-col flex-shrink-0 transition-all duration-300 border-r border-[#F5F6FA]">
        <div className="h-20 flex items-center px-6">
            <div className="flex items-center gap-3">
                <svg className="text-[#3660E1] h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
                <h1 className="text-xl font-bold text-gray-800">University</h1>
            </div>
        </div>
        <nav className="flex-grow px-4 py-4 space-y-2">
            {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                    <a
                        key={item.name}
                        className={`relative flex items-center px-4 py-2 ${item.active ? 'text-gray-900 bg-purple-50 rounded-lg font-bold glow' : 'text-gray-700 hover:bg-gray-100'} rounded-lg transition-colors duration-200`}
                        href={item.href}
                    >
                        {item.active && <span className="absolute left-0 top-0 bottom-0 w-1 gradient-bg rounded-r-full"></span>}
                        <Icon className={`mr-3 ${item.active ? 'text-purple-600' : ''}`} />
                        {item.name}
                    </a>
                );
            })}
        </nav>
        <div className="px-4 pb-4">
            <a className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" href="#">
                <Notifications className="mr-3" />
                Notifications
            </a>
        </div>
    </aside>
);

// --- Header Component ---
const Header = () => (
    <header className="bg-white h-20 flex items-center justify-between px-8 border-b border-[#F5F6FA] relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg"></div>
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Faculty Dashboard</h2>
        </div>
        <div className="text-center">
            <p className="text-lg text-gray-600">Welcome, Prof. Sharma</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="relative group">
                <button className="flex items-center gap-2">
                    <img alt="Profile Avatar" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDORpaKJVoP5aXm1QgKiEPccR6q8k6nKdld7Ztf8ipWdhR3UloqCbXsSsGnR6fk7V_BzHvgiXqKhmO4Y0BopFkEhPajF5BGtK0H5pHEM7azY2Jgk92SMQDsmxl1g1mDWJSiTabmDT1EJOczXgwbqgg-0ERjKNIHpc086R614F99R0qNSOrxT6kDDvKaPtY8JSUi1FsfmXu9jNDO6KukAowD903HLLNLrcpLAoW3cQvnGLbso3BfkyV0sugkl29LZg0YpuzlULpAln8" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 hidden group-hover:block">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Settings</a>
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#">Logout</a>
                </div>
            </div>
        </div>
    </header>
);

// --- Layout Component ---
const Layout = ({ children }) => {
    // CSS from the original HTML necessary for global styling (e.g., gradients)
    const styleBlock = `
        :root {
          --gradient-start: #3660E1;
          --gradient-end: #8737E0;
        }
        body {
          font-family: 'Inter', sans-serif;
        }
        .gradient-text {
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-bg {
          background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
        }
        .glow {
            box-shadow: 0 0 15px 0 rgba(135, 55, 224, 0.4);
        }
    `;

    return (
        <div className="bg-white">
            <style jsx="true">{styleBlock}</style>
            
            <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    {/* Main content (dashboard cards, tables, etc.) is passed as children */}
                    {children} 
                    
                    {/* Footer remains in the Layout as a consistent element */}
                    <footer className="bg-gray-800 text-white text-sm text-center py-4 px-8 flex justify-between">
                        <div>
                            <p>© 2023 University Portal. All rights reserved.</p>
                        </div>
                        <div className="flex gap-4">
                            <a className="hover:underline" href="#">About</a>
                            <a className="hover:underline" href="#">Contact</a>
                            <a className="hover:underline" href="#">Support</a>
                            <a className="hover:underline" href="#">Helpdesk</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Layout;