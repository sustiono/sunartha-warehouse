import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/");

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((path, index) => {
        let linkText = path || "Home";
        linkText = linkText[0].toUpperCase() + linkText.slice(1).toLowerCase();

        return index === pathnames.length - 1 && pathnames.length > 2 ? (
          <Typography key={path} color="text.primary">
            WarehouseId
          </Typography>
        ) : (
          <Link
            to={`/${path}`}
            key={path}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {linkText}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
