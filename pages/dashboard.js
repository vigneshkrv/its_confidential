import Head from "next/head";
import Layout from "../components/layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import dashStyles from "../styles/Dashboard.module.css";
import React, { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [site, useSite] = useState("");
  const [keyword, useKeyword] = useState("");

  const onScrape = async () => {
    let $ = await axios.get(`api/hello?site=${site}&keyword=${keyword}`);
  };

  return (
    <Layout>
      <Head>
        <title>Scraper</title>
      </Head>

      <form autoComplete className={dashStyles.scrape}>
        <Grid item xs={12} className={dashStyles.website}>
          <TextField
            variant="outlined"
            label="website"
            fullWidth
            value={site}
            onChange={(e) => useSite(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className={dashStyles.website}>
          <TextField
            variant="outlined"
            label="keyword"
            fullWidth
            value={keyword}
            onChange={(e) => useKeyword(e.target.value)}
          />
        </Grid>
        <Button variant="contained" color="primary" onClick={onScrape}>
          Scrape
        </Button>
      </form>
    </Layout>
  );
}
