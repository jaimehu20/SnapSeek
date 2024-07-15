import { GalleryHeader } from "../components/Header/GalleryHeader"
import { Navbar } from "../components/Navbar/Navbar"
import { GalleryMainContent } from "../components/MainContent/GalleryMainContent"
import { Footer } from "../components/Footer/Footer"


export const MyGallery = () => {
    return <>
        <Navbar />
        <GalleryHeader />
        <GalleryMainContent />
        <Footer />
    </>
}