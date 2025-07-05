import HomeSectionCard from '../home-slider-card/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material"
import { useRef, useState } from 'react';
import { HomeSliderData } from './HomeSliderData';
const HomeSectionCarousal = () => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = HomeSliderData.map((item) => <HomeSectionCard product={item} />);
    return (
        <div className='border'>
            <div className='relative p-5 justify-center'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && <Button variant="contained" onClick={slideNext} sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: 'white' }} aria-label="next" className='z-50'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}
                {activeIndex > 0 && (<Button variant="contained" onClick={slidePrev} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: 'white' }} aria-label="next" className='z-50'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>)}
            </div>

        </div>
    )
}

export default HomeSectionCarousal