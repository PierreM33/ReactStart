import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const [activeLink, setActiveLink] = useState("/");

    const handleSetActiveLink = (path) => {
        setActiveLink(path);
    };

    const linkMenu = (name, path) => {
        return (
            <NavLink
                exact to={path}
                className={activeLink === path ? "linkActive":"link"}
                onClick={() => handleSetActiveLink(path)}
            >
                {name}
            </NavLink>
        )
    }

    return (
        <div className="navigation">
            {linkMenu("Projects", "/Projects")}
        </div>
    );
};

export default Navigation;
