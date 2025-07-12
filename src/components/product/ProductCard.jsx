import React from 'react'

const ProductCard = () => {
    return (
        <div className='productCard mt-5 ml-10 flex flex-col items-center bg-white w-full max-w-[16rem]'>
            <div className='w-full h-[16rem] overflow-hidden rounded-lg'>
                <img className='object-cover object-top w-full h-full' src="https://res.cloudinary.com/demo/image/fetch/w_256,h_256,c_fill,f_auto,q_auto/https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea22c193-f576-4353-975d-d7eda69bde53/FLEX+RUNNER+3+%28PS%29.png" alt=''></img>
            </div>
            <div className='textPart bg-white p-3 text-center'>
                <p className='font-bold opacity-60'>Nike Flex Runner 3</p>
                <p>Younger Kids' Shoes</p>
            </div>
        </div>

    )
}

export default ProductCard;