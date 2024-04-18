import React, {} from 'react';
import Navigation from "../../Navigation/Navigation";

const LayoutScreen = ({ children }) => {

    const handleContactClick = () => {
        window.open('mailto:bourdaispe@gmail.com');
    };

    const onPressGit = () => {
        window.open('https://github.com/PierreM33?tab=repositories', '_blank');
    }

    return (
        <section className="Layout">
            <div className={"LayoutName"}>
                PierreM Dev
            </div>
            <div className={"LayoutContact"}>
                <div className="ContactTitle" onClick={handleContactClick}>Contactez-moi</div>
                <div className="ContactTitle" onClick={onPressGit}><i className="fa-brands fa-github"></i></div>
            </div>
                {children}
            <div className="LayoutNavigation">
                <Navigation />
            </div>
        </section>
    );
};



export default LayoutScreen
