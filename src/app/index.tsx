import { globalStyles } from "./styled";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { HomePage } from "@/pages/home";
import { RoadmapPage } from "@/pages/roadmap";

export const App = () => {
    return (
        <div>
            <Global styles={globalStyles} />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/roadmap" element={<RoadmapPage />} />
                </Routes>
            </Router>
        </div>
    );
};
