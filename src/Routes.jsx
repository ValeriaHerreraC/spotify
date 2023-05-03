import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { LogIn } from "./components/LogIn";
import { HomePage } from "./components/HomePage";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/homepage" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;