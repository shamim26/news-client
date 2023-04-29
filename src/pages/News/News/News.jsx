import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsight from "../EditorsInsight/EditorInsight";

const News = () => {
  const selectedNews = useLoaderData();
  const { _id, image_url, title, details, category_id } = selectedNews;
  return (
    <div>
      <h5 className="mb-4">Dragon News</h5>
      <Card className="p-4">
        <img src={image_url} alt="" />

        <h4 className="my-4">{title}</h4>
        <p className="text-secondary">{details}</p>

        <Link to={`/category/${category_id}`} className="btn btn-danger w-25 fw-semibold rounded-0"><FaArrowLeft></FaArrowLeft> All news in this category</Link>
      </Card>
      <EditorInsight></EditorInsight>
    </div>
  );
};

export default News;
