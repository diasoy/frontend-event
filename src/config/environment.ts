const environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
};

export default environment;
