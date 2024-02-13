import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
  res: NextApiResponse
) {
  const id = params?.id;
  try {
    const products = await fetch(`http://localhost:3001/products/${id}`).then(
      (res) => res.json()
    );
    return NextResponse.json(products);
  } catch (error) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
