import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarousalData } from './MainCarousalData';
import './MainCarousal.css';

const MainCarousal = () => {
    const items = MainCarousalData.map((item) => <img className='cursor-pointer' role='presentation' src={item.path} alt="" />);


    return (<AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
    />)
}

export default MainCarousal;