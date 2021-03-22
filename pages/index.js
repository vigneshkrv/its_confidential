import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A Passionate Developer on his journey to seek knowledge</p>
        <p>
          This is a sample scraper - But can be developed as a powerfool tool
          with report generation, user monitoring and user analysis
        </p>

        <p>
          Start <Link href="/dashboard">Scraping</Link> here
        </p>
      </section>
    </Layout>
  );
}
