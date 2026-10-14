import { Redis } from "@upstash/redis";

export default async () => {
  try {
    const redis = Redis.fromEnv();
    const count = await redis.incr("portfolio:visits");

    return Response.json(
      { count },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Visitor counter error:", error);

    return Response.json(
      {
        error: "Unable to update counter",
        details: error.message,
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}