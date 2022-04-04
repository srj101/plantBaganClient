import React from 'react';
import BoCarousel from '../Carousel/BoCarousel';
import "./Home.css"
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import SectionTitle from "../SectionTitle/SectionTitle";
import NewsSection from '../NewsSection/NewsSection'
import CourseCarousel from '../CourseCarousel/CourseCarousel';
import Banner from '../BannerSection/Banner';
import MiniShop from '../MiniShop/MiniShop';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div className='hompage_area'>
           <BoCarousel/>

            <SectionTitle  title="VIDEOS FOR PLANT BAGAN"/>
            <VideoCarousel/>
            <SectionTitle  title="NEWS FOR PLANT ROOM"/>
            <NewsSection/>
            <SectionTitle  title="COURSES FOR PLANT ROOM"/>
            <CourseCarousel/>
            <Banner/>
            <SectionTitle  title="SHOP FOR PLANT ROOM"/>
            <MiniShop/>
            <Footer/>
        </div>
    );
};

export default Home;