import { Button } from "@components";
import type { NextPage } from "next";
import styles from "@styles/pages/404.module.css";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <section className={styles.notFoundContainer}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        Sorry, we couldn&apos;t find the page you were looking for. Check that
        you have the correct address.
      </p>
      <Button onClick={() => router.push("/")}>Go back to home page</Button>
    </section>
  );
};

export default NotFound;
