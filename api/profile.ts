import { NowRequest, NowResponse } from "@vercel/node";
import { renderImage } from "../images";
import { createReadStream } from "fs";
const { join } = require("path");

export default async function (req: NowRequest, res: NowResponse) {
  try {
    res.setHeader("Content-Type", "image/svg+xml");
    const result = await renderImage(String(req.query.name));

    res.send(result)
  } catch (error) {
    res.send("Error");
    console.error(error);
  }
}
