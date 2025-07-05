import HomeSectionCard from '../home-slider-card/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material"
import { useRef, useState } from 'react';
import { HomeSliderData } from './HomeSliderData';
const HomeSectionCarousal = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = HomeSliderData.map((item) => <HomeSectionCard product={item} />);

    const carouselRef = useRef();
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const handleSlideChanged = (e) => {
        setActiveIndex(e.item);
    };

    // How many items are visible at once based on screen size?
    const visibleItems = 5.5; // Match this to the `responsive[1024].items` value
    const isNextDisabled = activeIndex >= items.length - visibleItems;
    const isPrevDisabled = activeIndex <= 0;

    // const slidePrev = () => setActiveIndex(activeIndex - 1);
    // const slideNext = () => setActiveIndex(activeIndex + 1);
    // const syncActiveIndex = ({ item }) => setActiveIndex(item);

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
                    animationDuration={700} // Controls smoothness
                    onSlideChanged={handleSlideChanged}
                    infinite={false}
                    activeIndex={activeIndex}
                />
                {!isNextDisabled && (<Button variant="contained" onClick={() => carouselRef.current?.slideNext()} sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: 'white' }} aria-label="next" className='z-50'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>)}
                {!isPrevDisabled && (<Button variant="contained" onClick={() => carouselRef.current?.slidePrev()} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: 'white' }} aria-label="next" className='z-50'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>)}
            </div>

        </div>
    )
}

export default HomeSectionCarousal;