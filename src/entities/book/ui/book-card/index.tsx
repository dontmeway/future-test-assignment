import { Card, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { bookModel } from "entities/book";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

type BookCardProps = {
  bookId: string;
};
export const BookCard = ({ bookId }: BookCardProps) => {
  const book = bookModel.selectors.useBook(bookId);
  const navigate = useNavigate();

  if (!book) return null;

  const title = book.volumeInfo.title;
  const category = book.volumeInfo.categories?.[0];
  const authors = book.volumeInfo.authors;

  return (
    <Card
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/${bookId}`)}
      className={styles.root}
    >
      <div>
        <img
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt="bookThumbnail"
        />
      </div>
      <Typography className={styles.category}>{category}</Typography>
      <Title level={4}>{title}</Title>
      <Typography>
        {authors?.map((author, index) => (
          <span>
            {author}
            {bookModel.getAuthorsCommas(authors, index)}
          </span>
        ))}
      </Typography>
    </Card>
  );
};
