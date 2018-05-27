import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const GalleryImage = ({ galleryImages }) => (
  <div>
    {galleryImages.map(image => (
      <article key={v4()} className="message">
        <div className="message-body">
          <h2>{image.title}</h2>
          <h3>{image.description}</h3>
          <img src={image.image} />
        </div>
      </article>
    ))}
  </div>
)

GalleryImage.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default GalleryImage
