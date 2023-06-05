import { Outlet } from "react-router-dom";

import Navbar from "./components/template/Navbar";
import ScrollToTopButton from "./components/template/ScrollToTopButton";
import Footer from "./components/template/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTopButton />
            <Footer />
        </>
    );
}
