import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomeScreen from "./Screens/Welcome/WelcomeScreen";
import {connect} from "react-redux";
import ProjectsScreen from "./Screens/Projects/ProjectsScreen";
import LayoutScreen from "./Screens/Layout/LayoutScreen";

function MyWebSite (props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutScreen><WelcomeScreen /></LayoutScreen>} />
                <Route path="*" element={<LayoutScreen><WelcomeScreen /></LayoutScreen>} />
                <Route path="Projects" element={<LayoutScreen><ProjectsScreen /></LayoutScreen>} />
            </Routes>
        </BrowserRouter>
    );

}


const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWebSite);
