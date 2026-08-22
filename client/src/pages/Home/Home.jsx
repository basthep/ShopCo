import React, { useState } from 'react' 
import OfferDisplay from '../../components/OfferDisplay/OfferDisplay'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Home/Hero/Hero'
import Brands from '../../components/Home/Brands/Brands'
import NewArrivals from '../../components/Home/NewArrivals/NewArrivals'
import TopSelling from '../../components/Home/TopSelling/TopSelling'
import BrowseDressStyle from '../../components/Home/BrowseDressStyle/BrowseDressStyle'
import OurHappyCustomers from '../../components/Home/OurHappyCustomers/OurHappyCustomers'
import FooterSection from "../../components/FooterSection/FooterSection";


const Home = () => { 

    return (
        <div className="min-h-screen">
            <OfferDisplay /> 
            <Navbar /> 
            <Hero /> 
            <Brands />
            <NewArrivals /> 
            <TopSelling /> 
            <BrowseDressStyle /> 
            <OurHappyCustomers /> 
            <FooterSection />
        </div>
    )
}

export default Home