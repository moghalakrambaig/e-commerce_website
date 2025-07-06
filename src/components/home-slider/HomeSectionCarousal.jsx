import HomeSectionCard from '../home-slider-card/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material"
import { useRef, useState } from 'react';
<div>
    
</div>
const HomeSectionCarousal = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = data.map((item, index) => <HomeSectionCard key={index} product={item} />);

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
        <div className='-mt-16 mr-5 '>
            <h2 className='text-2xl font-extrabold text-black py-5'>{sectionName}</h2>
            <div className='relative p-5 justify-center'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    touchTracking
                    disableButtonsControls
                    autoPlayInterval={1000}
                    responsive={responsive}
                    disableDotsControls
                    animationDuration={400} // Controls smoothness
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