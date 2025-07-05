import HomeSectionCard from '../home-slider-card/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material"
const HomeSectionCarousal = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)
    return (
        <div className='border'>

            <div className='relative p-5 justify-center'>

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlayInterval={1000}
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
                <Button variant="contained" sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: 'white' }} aria-label="next" className='z-50'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                <Button variant="contained" sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: 'white' }} aria-label="next" className='z-50'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
            </div>

        </div>
    )
}

export default HomeSectionCarousal