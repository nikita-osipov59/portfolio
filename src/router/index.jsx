import { Routes, Route } from "react-router-dom";

import { ROUTER_PATH } from "@/router/PATH/";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import PreviewPage from "@/pages/PreviewPage";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
      <Route path={ROUTER_PATH.ABOUT} element={<AboutPage />} />
      <Route path={ROUTER_PATH.PREVIEW + "/:link"} element={<PreviewPage />} />
    </Routes>
  );
};
