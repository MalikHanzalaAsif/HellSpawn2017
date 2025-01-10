import React from 'react';

const NotFound = () => {
  return (
    <div id='NotFound' className='h-[100vh] w-[100%] flex flex-col justify-center items-center'>
        <div className='w-[70%]'>
              <h1 className='text-7xl font-bold text-red-700'> 404! </h1>
              <h1 className='text-4xl'> Couldn't find the page you are looking for! </h1>
        </div>
    </div>
  )
}

export default NotFound;