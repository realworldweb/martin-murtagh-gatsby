import React from 'react'

import Img from 'gatsby-image'
import { useStaticQuery, graphql} from 'gatsby'






export default function CallToAction(){
 
 const data = useStaticQuery(graphql`query MyQuery {
  file(relativePath: {eq: "growth-hacking-xl.webp"}) {
    id
    absolutePath
    childImageSharp {
      id
      fluid(webpQuality: 4) {
        aspectRatio
        base64
        sizes
        src
        srcSet
        originalImg
      }
    }
    relativePath
    publicURL
  }
}

`)

return ( 
 <div className="d-flex d-block position-relative call-to-action">
 
 <Img fluid={data.file.childImageSharp.fluid} src="growth-hacking-xl.webp" alt="growth-hacking-img" />
  <div className="col-7 call-to-action__tagline">
  <p>
  &ldquo; were technicolor for your social startegy &rdquo;
  </p>
  </div>
 </div> 
  )

}