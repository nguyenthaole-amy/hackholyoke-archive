import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import PagesWNav from "./PagesWNav";
import LeadingPage from "./component/pages/leadingPage/LeadingPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LeadingPage />} />
                <Route path="*" element={<PagesWNav />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
