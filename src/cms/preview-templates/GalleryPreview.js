import React from 'react'
import PropTypes from 'prop-types'
import { GalleryTemplate } from '../../templates/gallery'

const GalleryPreview = ({ entry, widgetFor }) => {
  const entryImages = entry.getIn(['data', 'images'])
  const images = entryImages ? entryImages.toJS() : []
  return (
    <GalleryTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      images={images}
    />
  )
}

GalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GalleryPreview
