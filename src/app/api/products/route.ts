import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";

export async function GET(req: Request, res: NextApiResponse) {
  try {
    const products = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    return NextResponse.json(products);
  } catch (error) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}