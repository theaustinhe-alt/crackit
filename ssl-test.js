import https from 'https';

https.get('https://api.vercel.com', (res) => {
  console.log('Status Code:', res.statusCode);
  res.on('data', (chunk) => {});
  res.on('end', () => {
    console.log('SSL connection successful!');
  });
}).on('error', (e) => {
  console.error('SSL connection failed:', e.message);
});
