import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Overview />
            <Portfolio />
            <Contact />
        </>
    );
}
