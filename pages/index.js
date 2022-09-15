import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={`${utilStyles.listItem} ${"card"}`}
              key={id}
              style={{ width: "100%", margin: "auto" }}
            >
              {" "}
              <Link href={`/posts/${id}`}>
                <a>
                  <b> {title}</b>
                  <br />
                  <br />
                  {/* {id} */}
                  <i>Posted by Techleeds on</i>
                  <br />
                  {date}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
