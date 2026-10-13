import React from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../data/seo.json";
import { applySeo } from "../../utils/applySeo";

export function RouteSeo() {
  const { pathname } = useLocation();
  React.useEffect(() => applySeo(pathname, SEO), [pathname]);
  return null;
}
