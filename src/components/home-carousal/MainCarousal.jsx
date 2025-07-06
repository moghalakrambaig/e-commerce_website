import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarousalData } from './MainCarousalData';
import './MainCarousal.css';

const MainCarousal = () => {
    const items = MainCarousalData.map((item) => <img className='cursor-pointer' role='presentation' src={item.path} alt="" />);


    return (<div className='-mb-7 carousal-container'><AliceCarousel
        items={items}
        disableButtonsControls
        //autoPlay
        autoPlayInterval={3000}
        infinite
    /></div>)
}

export default MainCarousal;