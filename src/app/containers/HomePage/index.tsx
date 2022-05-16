
import {BookCard, Marginer, Navbar} from "../../components";
import TopSection from "./topSection/topSection";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";
import TopCars from "./topCars";
import tw from "twin.macro";
import styled from "styled-components";


const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin="4em" />
            <BookCard />
            <Marginer direction="vertical" margin="10em" />
            <BookingSteps />
            <Marginer direction="vertical" margin="8em" />
            <AboutUs />
            <Marginer direction="vertical" margin="8em" />
            <TopCars />
        </PageContainer>
    )
}

export default HomePage;