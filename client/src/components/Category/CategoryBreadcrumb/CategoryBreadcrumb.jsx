import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSearchParams } from "react-router-dom";

const CategoryBreadcrumb = () => {
  const [searchParams] = useSearchParams();
  const style = searchParams.get("style");
  const category = style || "All Products";
  return (
    <div className="w-[90%] mx-auto py-6">

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>

        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Home
        </Link>

        <Typography color="text.primary">
          {category}
        </Typography>

      </Breadcrumbs>

    </div>
  );
};

export default CategoryBreadcrumb;