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

            <SectionTitle  title="এক নজরে কিছু সফলতার গল্প"/>
            <VideoCarousel/>
            <SectionTitle  title="এক নজরে কৃষি বিষয়ক তথ্য"/>
            <NewsSection/>
            <SectionTitle  title="আধুনিক কৃষি বিষয়ে শিক্ষা"/>
            <CourseCarousel/>
            <Banner/>
            <SectionTitle  title="আধুনিক কৃষি বিজ্ঞান ও প্রযুক্তি সামগ্রী"/>
            <MiniShop/>
            <Footer/>
        </div>
    );
};

export default Home;