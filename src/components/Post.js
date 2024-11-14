import { Link } from "gatsby"
import React from "react"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

const Post = ({ title, author, path, date, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span><br />
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
