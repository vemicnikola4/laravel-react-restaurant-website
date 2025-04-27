import { PageProvider } from "../../Contexts/PageContext";
import AboutUs from "./Partials/AboutUs";
import Footer from "./Partials/Footer";
import Hero from "./Partials/Hero";
import MapSection from "./Partials/MapSection";
import MenuSection from "./Partials/MenuSection";



export default function Index ()
{
    // should accept page{hero:...,AboutUs:..., MenuSection:...,MapSection:...,}
    return (
        <div>
           <PageProvider>
                <Hero />
                <AboutUs />
                <MenuSection />
                <MapSection />
                <Footer />
           </PageProvider>
                
            
        </div>
    )
}