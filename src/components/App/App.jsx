import cn from "classnames";
import s from "./App.module.css"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Project from "../Project/Project.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Team from "../Team/Team.jsx";
import Assistants from "../Assistants/Assistants.jsx";
import Social from "../Social/Social.jsx";
import Volunteering from "../Volunteering/Volunteering.jsx";
import Order from "../Order/Order.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";


function App() {

    return (
        <>
            <Router basename="/muznii">
                <Header/>
                <Routes>
                    <Route path="/" element={<Project/>}/>
                    <Route path="/reviews" element={<Reviews/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/assistants" element={<Assistants/>}/>
                    <Route path="/social" element={<Social/>}/>
                    <Route path="/volunteering" element={<Volunteering/>}/>
                    <Route path="/order" element={<Order/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App
