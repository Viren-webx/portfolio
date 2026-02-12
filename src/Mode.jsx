import { useState, useEffect } from "react";
import "./App.css"

function Mode() {
    // Get initial mode from localStorage or default to false
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === "true";
    });

    useEffect(() => {
        // Set body classes for background and text color
        document.body.className = darkMode ? "bg-gray-900 text-white" : "bg-white text-black";
        // Save mode to localStorage
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <label className="flex items-center cursor-pointer mt-2 mb-2">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleTheme}
                        className="sr-only"
                    />
                    <div className="block bg-gray-400 w-12 h-5 rounded-full"></div>
                    <div
                        className={
                            "dot absolute ml-1 top-1 bg-white w-4 h-3 rounded-full transition " +
                            (darkMode ? "transform translate-x-6 bg-black" : "")
                        }
                    ></div>
                </div>
              
            </label>
        </div>
    );
}

export default Mode;