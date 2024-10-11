import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetail = () => {
  console.log(useParams());
  const { slug } = useParams();
  console.log(slug);
  //// fetching.com?slug=${slug}

  // useNavigate là điều hướng đến trang nào đó
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/blog")}
        className="p-3 text-white bg-blue-500 rounded-sm"
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetail;
