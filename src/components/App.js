import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"

import HomePage from "./homepage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {

    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route  === "/about") return <AboutPage/>;
    //     if (route  === "/courses") return <CoursesPage/>;
    //     return <HomePage />;
    // }

    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={NotFoundPage} />
            </Switch>
            
        </div>
    )
}

export default App;
