const fs = require("fs");

export default function handler(req: any, res: any) {
  const list = fs.readFileSync(`${process.cwd()}/public/vercel.svg`, "utf8");
  console.log("CHECK", list);

  res.status(200).json({ name: list });
}
