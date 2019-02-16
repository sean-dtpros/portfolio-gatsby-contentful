import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div>
      <h3 className="text-2xl font-medium mb-0">
        <Link className="leading-normal py-0" to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
        className="my-2 text-base text-grey-darker"
      />
      <p className="my-1">{article.publishDate}</p>
  </div>
)
