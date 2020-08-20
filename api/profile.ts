import { NowRequest, NowResponse } from "@vercel/node";
// import { renderImage } from "../images";
import { createReadStream } from "fs";
const { join } = require("path");

export default async function (req: NowRequest, res: NowResponse) {
  try {
    // const result = await renderImage(String(req.query.name));

    res.setHeader("Content-Type", "image/svg+xml");
    const image = createReadStream(
      join(__dirname, "..", "assets", "giphy.gif")
    );
    image.pipe(res);
  } catch (error) {
    res.send("Error");
    console.error(error);
  }
}
