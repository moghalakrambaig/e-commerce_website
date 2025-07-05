import React from 'react'

const HomeSectionCard = () => {
    return (
        <div className='border border-gray-50 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-4'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' />

            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-500'>Shirt</h3>
                <p className='mt-2 text-sm text-gray-500'>This is a shirt T</p>
            </div>
        </div>
    )
}

export default HomeSectionCard