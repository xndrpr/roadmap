import { globalStyles } from "./styled";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { HomePage } from "@/pages/home";

export const App = () => {
    return (
        <div>
            <Global styles={globalStyles} />
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
};
