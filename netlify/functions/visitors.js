const { Redis } = require("@upstash/redis");

exports.handler = async () => {
  try {
    const redis = Redis.fromEnv();
    const count = await redis.incr("portfolio:visits");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ count }),
    };
  } catch (error) {
    console.error("Visitor counter error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Unable to update counter",
        details: error.message,
      }),
    };
  }
};