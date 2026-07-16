import HomeContenTitle from "./HomeContentTitle";
import BooksSection from "./HomePageContentSections/Books";
import MaleFootwearSection from "./HomePageContentSections/MaleFootwear";
import MobilesSection from "./HomePageContentSections/Mobiles";

export default function HomePageContent(){
    return <>
    <HomeContenTitle />
    <MobilesSection />
    <BooksSection />
    <MaleFootwearSection />
    </>
}