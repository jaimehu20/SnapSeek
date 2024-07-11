import { Header } from "../components/Header/Header"
import { Navbar } from "../components/Navbar/Navbar"
import { MainContent } from "../components/MainContent/MainContent"
import { Footer } from "../components/Footer/Footer"




export const Home = () => {
    return <>
        <Navbar />
        <Header />
        <MainContent />
        <Footer />
    </>
}