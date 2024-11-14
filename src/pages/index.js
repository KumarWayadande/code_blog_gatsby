import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import { Row, Col } from "reactstrap"
const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-info mt-3 font-weight-bold">Home Page</h1>
      <Row>
        <Col md="8">
          <StaticQuery
            query={indexQuery}
            render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => {
                    return (
                      <Post
                        title={node.frontmatter.title}
                        author={node.frontmatter.author}
                        path={node.frontmatter.path}
                        date={node.frontmatter.date}
                        body={node.excerpt}
                        fluid={node.frontmatter.image}
                      />
                    )
                  })}
                </div>
              )
            }}
          />
        </Col>
        <Col md="4">
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          ></div>
        </Col>
      </Row>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            image {
              childImageSharp {
                gatsbyImageData(width: 1200, height: 300, placeholder: BLURRED)
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
