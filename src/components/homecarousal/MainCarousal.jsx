import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarousalData } from './MainCarousalData';
import './HomeCarousal.css';



const MainCarousal = () => {
    const items = MainCarousalData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.path} alt=""/>);


    return(<AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />)
    }

export default MainCarousal;