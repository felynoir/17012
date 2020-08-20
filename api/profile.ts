import { NowRequest, NowResponse } from "@vercel/node";
// import { renderImage } from "../images";
import fs from "fs";

export default async function (req: NowRequest, res: NowResponse) {
  try {
    // const result = await renderImage(String(req.query.name));

    res.setHeader("Content-Type", "image/svg+xml");
    const image = fs.createReadStream("/giphy.gif");
    image.pipe(res);
  } catch (error) {
    res.send("Error");
    console.error(error);
  }
}
