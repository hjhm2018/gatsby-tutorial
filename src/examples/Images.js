import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import img from '../images/image4.jpeg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image3.jpeg"}) {
    childImageSharp {
      fixed(width: 200, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image4.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Images = () => {
    const data = useStaticQuery(getImages);
    // console.log(data)
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic Image</h3>
                <img src={img} width="100%" />
            </article>
            <article className="single-image">
                <h3>Fixed Image/Blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>Fluid Image/SVG</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid} />
                </div>
            </article>
        </section>
    )
}

export default Images
