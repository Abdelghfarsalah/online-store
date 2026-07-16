import HomeContenTitle from "./HomeContentTitle";
import BooksSection from "./HomePageContentSections/Books";
import MobilesSection from "./HomePageContentSections/Mobiles";

export default function HomePageContent(){
    return <>
    <HomeContenTitle></HomeContenTitle>
    <MobilesSection></MobilesSection>
    <BooksSection></BooksSection>
    </>
}