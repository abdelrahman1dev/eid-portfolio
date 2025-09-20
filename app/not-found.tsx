import React from 'react'

function notFound() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-4 text-center'>
      <h1 className='text-4xl font-bold'>
        <span className='text-teal-400'>404</span> - Page Not Found
      </h1>
      <h2 className='text-lg text-gray-400'>
        The page you are looking for does not exist.
      </h2>
    </div>
  )
}

export default notFound
