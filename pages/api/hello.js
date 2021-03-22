// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import cheerio from "cheerio";

export default (req, res) => {
  res.statusCode = 200;

  axios.get(req.query["site"]).then((response) => {
    const keyword = req.query["keyword"];
    const data = cheerio.load(response.data);
    console.log(keyword);
    res.status(200).json({ html: response.data });
  });
};
