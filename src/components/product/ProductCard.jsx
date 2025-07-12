import React from 'react'

const ProductCard = ({cardImage} ) => {
    return (
        <div className='productCard mt-5 ml-10 flex flex-col items-center bg-white w-full max-w-[16rem]'>
            <div className='w-full h-[16rem] overflow-hidden rounded-lg'>
                <img className='object-cover object-top w-full h-full' src={cardImage} alt=''></img>
            </div>
            <div className='textPart bg-white p-1 text-center'>
                <p className='font-bold opacity-60'>Nike Flex Runner 3</p>
                <p>Younger Kids' Shoes</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>$200</p>
                <p className='line-through opacity-45'>$300</p>
                <p className='text-green-500 font-semibold'>70% Off</p>
            </div>
        </div>

    )
}

export default ProductCard;