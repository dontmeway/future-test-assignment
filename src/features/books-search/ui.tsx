import { Input } from "antd";
import { bookModel } from "entities/book";
import React from "react";
import { useDispatch } from "react-redux";

export const BooksSearch = () => {
  const queryConfig = bookModel.selectors.useQueryConfig();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      bookModel.actions.setListQueryConfig({
        ...queryConfig,
        q: event.currentTarget.value,
      })
    );
  };

  return (
    <Input
      style={{ width: 350 }}
      value={queryConfig.q}
      onChange={handleChange}
    />
  );
};
