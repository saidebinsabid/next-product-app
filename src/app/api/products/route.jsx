import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, description, price, image } = await req.json();
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    await db
      .collection("products")
      .insertOne({ name, description, price: Number(price), image });
    return new Response(JSON.stringify({ message: "Product added" }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
