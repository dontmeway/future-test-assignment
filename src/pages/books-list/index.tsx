import { bookModel } from "entities/book";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleApi } from "shared/api";
import { RootState } from "store";
import { Header } from "widgets/header";
const BooksListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    googleApi.books.getBooksList({ maxResults: 30 });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default BooksListPage;
