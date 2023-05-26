import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";
// import { Login2 } from "./Dataspotify";

const AppRoutes = () => {

    return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LogIn/>}/> */}
        <Route path="/" element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
    </BrowserRouter>
    )
};

export default AppRoutes;