import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from './pages/Auth/Auth'
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import ProfilePage from "./components/Avater/ProfilePage";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route  path="/Auth" element={<Auth/>}/>
                <Route  path="/Questions" element={<Questions/>}/>
                <Route  path="/askquestion" element={<AskQuestion/>}/>
                <Route  path="/Questions/:id" element={<DisplayQuestion/>}/>
                <Route path="/User" element={<ProfilePage/>}/>
            </Routes>
        </div>
    );
};

export default AllRoutes;
