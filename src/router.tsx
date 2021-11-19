import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Error404 } from "./pages/Error";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}