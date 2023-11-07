import { useState, useEffect } from "react";
import './Theme.css';

function Theme() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme
    },[theme]);

    return (
        <>
        <img id="click" onClick={toggleTheme}src="./public/images/circle.svg" alt="" />
        </>
    )
}

export default Theme;