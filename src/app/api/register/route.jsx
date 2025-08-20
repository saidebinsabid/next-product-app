import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }

  const result = await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
  });

  return new Response(JSON.stringify({ message: "User registered" }), {
    status: 201,
  });
}
