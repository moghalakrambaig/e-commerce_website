import React from 'react';

const HomeSectionCard = ({ product }) => {
    return (
        /*Card container*/
        <div className='border border-grey-50 flex flex-col items-center bg-white rounded-lg shadow-lg w-full max-w-[15rem]'>
            <div className='w-full h-[13rem]'>
                <img className='object-cover object-top w-full h-full' src={product.path} alt='' />

            </div>

            {/*Title container*/}
            <div className='p-4 text-center'>
                <h3 className='text-lg font-medium text-gray-500'>{product.brand}</h3>
                <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
    )
}

export default React.memo(HomeSectionCard);