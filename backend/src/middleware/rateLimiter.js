import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }
    next(); // proceed to the next middleware or route handler
  } catch (error) {
    console.log("Error in rateLimiter middleware", error);
    next(error); // pass the error to the next middleware
  }
};

export default rateLimiter;
