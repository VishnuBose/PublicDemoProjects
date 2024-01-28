import HeroSection from "../organs/HeroSection"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopVehicles"


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            {/* <BookingSteps /> */}
            <Testimonials />
            {/* <Partners />
            <NewsLetter /> */}
        </>
    )
}

export default Home