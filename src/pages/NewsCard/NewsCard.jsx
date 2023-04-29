import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaBookmark, FaRegBookmark, FaRegStar, FaShare, FaStar } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, author, rating, total_view, image_url, details } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1 ps-3">
          <p className="m-0 fw-semibold fs-5">{author?.name}</p>
          <p className="m-0 text-secondary">
            <small>{moment(author?.published_data).format("YYYY-MM-DD")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark className="fs-4 text-secondary me-2"></FaRegBookmark>
          <BsShare className="fs-4 text-secondary"></BsShare>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="mb-3 fs-3">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="lh-3 fs-6 text-secondary mt-4">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`} className="text-warning fw-bold">
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div>
          <Rating className="text-warning fs-5"
            readonly
            placeholderRating={rating?.number}
            emptySymbol={
              <FaRegStar></FaRegStar>
            }
            placeholderSymbol={
              <FaStar></FaStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
          />
          <span className="fs-6 fw-semibold align-middle ms-2">{rating?.number}</span>
        </div>
        <div>
          <MdRemoveRedEye className="fs-4 me-2"></MdRemoveRedEye>{" "}
          <span className="text-secondary align-middle fw-semibold">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
