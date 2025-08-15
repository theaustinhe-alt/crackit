export const config = {
  runtime: "edge"
};

export default function handler(req) {
  return new Response("Hello from Edge!", { status: 200 });
}