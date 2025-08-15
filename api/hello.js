// export const config = {
//   runtime: 'edge',
// };

// export default async function handler(req) {
//   try {
//     const ipInfo = await fetch('https://ipapi.co/json').then(r => r.json());
//     const city = ipInfo.city || 'somewhere on Earth';
//     return new Response(
//       JSON.stringify({ message: `Hello from ${city}!` }),
//       { headers: { 'Content-Type': 'application/json' } }
//     );
//   } catch (e) {
//     return new Response(
//       JSON.stringify({ message: 'Hello from the Edge!' }),
//       { headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }
// Edge runtime uses the Web Request/Response API
export default async function handler(req) {
  return new Response('Hello from Edge API!', { status: 200 });
}