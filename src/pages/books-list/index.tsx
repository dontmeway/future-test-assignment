import { Col, Row, Layout } from "antd";
import { BookCard, bookModel } from "entities/book";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "widgets/header";
import styles from "./styles.module.scss";

const BooksListPage = () => {
  const dispatch = useDispatch();
  const books = bookModel.selectors.useBooks();
  const queryConfig = bookModel.selectors.useQueryConfig();

  useEffect(() => {
    dispatch(bookModel.getBooksList(queryConfig));
  }, [queryConfig, dispatch]);

  return (
    <div>
      <Header />
      <Layout.Content>
        <Row className={styles.container} justify="center" gutter={[20, 15]}>
          {books.map((book) => (
            <Col key={book.id} span={4}>
              <BookCard bookId={book.id} />
            </Col>
          ))}
        </Row>
      </Layout.Content>
    </div>
  );
};

export default BooksListPage;
