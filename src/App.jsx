import { Outlet } from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";

import Navbar from "./components/template/Navbar";
import ScrollToTopButton from "./components/template/ScrollToTopButton";
import Footer from "./components/template/Footer";

export default function App() {
    return (
        <>
            <LanguageProvider>
                <Navbar />
                <Outlet />
                <ScrollToTopButton />
                <Footer />
            </LanguageProvider>
        </>
        
    );
}
