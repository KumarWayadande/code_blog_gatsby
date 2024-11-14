import { StaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { graphql } from "gatsby"
import {
  Card,
  CardTitle,
  CardBody,
  Input,
  Button,
  Form,
  FormGroup,
} from "reactstrap"
const Siderbar = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            Newsletter
          </CardTitle>
          <Form className="text-center">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Enter Your Email..."
              />
            </FormGroup>
            <Button className="btn btn-outline-success text-upppercase">
              Subscribe
            </Button>
          </Form>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-uppercase text-center">
            Advertisement
          </CardTitle>
          <img
            // src="https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill"
            src="https://picsum.photos/200/300"
            style={{ width: "100%" }}
          />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            Recent Posts
          </CardTitle>
          <StaticQuery
            query={sidebarQuery}
            render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => {
                    const imageUrl = getImage(node.frontmatter.image)
                    return (
                      <Card key={node.frontmatter.path}>
                        <Link to={node.frontmatter.path}>
                          <GatsbyImage
                            class="card-image-top"
                            image={imageUrl}
                          />
                        </Link>
                        <CardBody>
                          <CardTitle>
                            <Link to={node.frontmatter.path}>
                              {node.frontmatter.title}
                            </Link>
                          </CardTitle>
                        </CardBody>
                      </Card>
                    )
                  })}
                </div>
              )
            }}
          />
        </CardBody>
      </Card>
    </div>
  )
}

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
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

export default Siderbar
