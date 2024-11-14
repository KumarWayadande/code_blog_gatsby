import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

const Post = ({ title, author, path, date, body, fluid }) => {
  const imageUrl = getImage(fluid)
  return (
    <Card>
      <Link to={path}>
        <GatsbyImage image={imageUrl} />
      </Link>
      <CardBody>
        <Link to={path}>
          <CardTitle>{title}</CardTitle>
        </Link>
        <CardSubtitle>
          <span className="text-info">{date}</span>
          <br />
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
