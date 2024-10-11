import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("TCL: BlogPage -> searchParams", searchParams.get("search"));

  useEffect(() => {
    setSearchParams({ search: "lvlinh" });
  });
  return <div>BlogPage</div>;
};

export default BlogPage;
