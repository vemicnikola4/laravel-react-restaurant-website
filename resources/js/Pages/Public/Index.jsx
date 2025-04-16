import AboutUs from "./Partials/AboutUs";
import Footer from "./Partials/Footer";
import Hero from "./Partials/Hero";
import MapSection from "./Partials/MapSection";
import MenuSection from "./Partials/MenuSection";


export default function Index ()
{
    return (
        <div>
            <Hero />
            <AboutUs />
            <MenuSection />
            <MapSection />
            <Footer />
        </div>
    )
}