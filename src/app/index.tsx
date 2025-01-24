import { globalStyles } from "./styled";
import { useAtomValue } from "jotai";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { currentRouteAtom } from "@/shared/atoms/current-route.atom";
import { HomePage } from "@/pages/home";

export const App = () => {
    const currentRoute = useAtomValue(currentRouteAtom);

    return (
        <div>
            <Global styles={globalStyles} />
            {currentRoute}
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
};
