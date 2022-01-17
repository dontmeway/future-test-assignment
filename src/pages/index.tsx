import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const BooksListPage = lazy(() => import("./books-list"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksListPage />} />
      <Route path=":bookId" element={<div>test 2</div>} />
    </Routes>
  );
};
