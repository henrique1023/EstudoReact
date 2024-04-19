import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import UserCroud from "../components/user/userCrud";

export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCroud />} />
        <Route path="*" element={<Home />} />
    </Routes>
