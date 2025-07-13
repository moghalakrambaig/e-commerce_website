import './ProductCard.css';

const ProductCard = ({ cardImage }) => {
    return (
        <div className='productCard mt-5 mx-auto flex flex-col items-center rounded-lg shadow-md overflow-hidden bg-white transition-all w-full max-w-[19rem]'>
            <div className=' w-full'>
                <img className='object-cover object-top w-full h-auto' src={cardImage} alt='Product' />
            </div>
            <div className='textPart text-center bg-white p-2'>
                <p className='font-bold opacity-60'>Nike Flex Runner 3</p>
                <p>Younger Kids' Shoes</p>
                <div className='flex space-x-2 justify-center mt-1'>
                    <p className='font-semibold'>$200</p>
                    <p className='line-through opacity-45'>$300</p>
                    <p className='text-green-500 font-semibold'>70% Off</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;