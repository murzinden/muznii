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
import {useState} from "react";
import closeicon from "./images/closeicon.jpg"
import burgermenu from "./images/burgermenu.jpg"
import Footer from "../Footer/Footer.jsx";


function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false)
    }


    return (
        <>
            <Router>
                <header className={cn(s.header)}>
                    <nav>
                        <ul className={cn(s.header__nav, {[s.open]: isMenuOpen})}>
                            <li><Link to="/" className={cn(s.header__link)} onClick={closeMenu}>О проекте</Link></li>
                            <li><Link to="/reviews" className={cn(s.header__link)} onClick={closeMenu}>Отзывы</Link>
                            </li>
                            <li><Link to="/team" className={cn(s.header__link)} onClick={closeMenu}>Команда</Link></li>
                            <li><Link to="/assistants" className={cn(s.header__link)} onClick={closeMenu}>Наши
                                помощники</Link></li>
                            <li><Link to="/social" className={cn(s.header__link)} onClick={closeMenu}>Социальная
                                деятельность</Link></li>
                            <li><Link to="/volunteering" className={cn(s.header__link)}
                                      onClick={closeMenu}>Волонтерство</Link></li>
                            <li><Link to="/order" className={cn(s.header__link)} onClick={closeMenu}>Заказать</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={cn(s.menuToggle)} onClick={toggleMenu}>
                        {isMenuOpen ? <img src={closeicon} alt="Close"/> : <img src={burgermenu} alt="Menu"/>}
                    </div>
                    <a href="mailto:muznii4you@gmail.com"
                       className={cn(s.header__link, s.emailLink)}>muznii4you@gmail.com</a>
                </header>
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
