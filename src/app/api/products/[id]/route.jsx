import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) { // destructure params here
  try {
    const { id } = params; // Now this works with /api/products/[id]

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing product id" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
