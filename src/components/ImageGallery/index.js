import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import './styles.css'

function ImageGallery({ images, ...leftoverProps }) {
  return <ReactImageGallery items={images} {...leftoverProps} />
}

export default ImageGallery
