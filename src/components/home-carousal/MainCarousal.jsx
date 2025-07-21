import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarousalData } from './MainCarousalData';
import './MainCarousal.css';

const MainCarousal = () => {
    const items = MainCarousalData.map((item) => <img className='cursor-pointer rounded-3xl w-full object-cover' role='presentation' src={item.path} alt="" />);


    return (<div className="rounded-3xl mt-4 overflow-hidden mx-auto"
  style={{ width: '96%', maxWidth: '2000px' }}><AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1700}
        infinite
    /></div>)
}

export default MainCarousal;