import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import {
  Card,
  Badge,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import { slugify } from "../util/utilityFunctions"
const Post = ({ title, author, path, date, body, fluid, tags }) => {
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
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read More
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
