import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import GalleryImage from '../components/GalleryImage'

export const GalleryTemplate = ({
  title,
  description,
  images,
}) => {

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <GalleryImage galleryImages={images} />
          </div>
        </div>
      </div>
    </section>
  )
}

GalleryTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
}

const Gallery = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <GalleryTemplate
      title={frontmatter.title}
      description={frontmatter.description}
      images={frontmatter.images}
    />
  )
}

Gallery.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Gallery

export const pageQuery = graphql`
  query GalleryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        images {
          image
          alt
          title
          description
        }
      }
    }
  }
`
