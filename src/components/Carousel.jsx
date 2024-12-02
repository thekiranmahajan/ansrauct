import React from 'react'

const Carousel = ({images}) => {
  return (
    <div className='carousel'>
      {images.map((image) => {
        return <div>{image.title}</div>
      })}
      </div>
  )
}

export default Carousel