import { bookModel } from "entities/book";
import React from "react";

type BookCardProps = {
  bookId: number;
};
export const BookCard = ({ bookId }: BookCardProps) => {
  const book = bookModel.selectors.useBook(bookId);

  return <div>BookCard</div>;
};
