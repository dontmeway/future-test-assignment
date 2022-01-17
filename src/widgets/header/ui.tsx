import { Layout } from "antd";
import Title from "antd/lib/typography/Title";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <Layout.Header className={styles.root}>
      <Title className={styles.title}>Search for books</Title>
    </Layout.Header>
  );
};
