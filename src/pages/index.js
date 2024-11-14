import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import { Row, Col } from "reactstrap"
import Siderbar from "../components/Sidebar"
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
                        tags={node.frontmatter.tags}
                      />
                    )
                  })}
                </div>
              )
            }}
          />
        </Col>
        <Col md="4">
          <Siderbar />
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
            tags
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
