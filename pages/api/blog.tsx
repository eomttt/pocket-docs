const fs = require('fs');

export default function handler(req: any, res: any) {
  const item = fs.readFileSync(
    `${process.cwd()}/components/Layout.tsx`,
    'utf8',
  );
  const list = fs.readFileSync(`${process.cwd()}/public/vercel.svg`, 'utf8');

  res.status(200).json({ name: process.cwd(), item: __dirname });
}
