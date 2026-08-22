import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ProductBreadcrumb = ({ product }) => {
  return (
    <section className="w-full flex justify-center py-6 border-t border-gray-200">
      <div className="w-[90%]">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{
              color: "#9CA3AF",
              fontSize: 14,
            }}
          >
            Home
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="#"
            sx={{
              color: "#9CA3AF",
              fontSize: 14,
            }}
          >
            {product.category}
          </Link>

          <Link
            underline="hover"
            color="inherit"
            href="#"
            sx={{
              color: "#000",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {product.sub_category}
          </Link>
 
        </Breadcrumbs>
      </div>
    </section>
  );
};

export default ProductBreadcrumb;