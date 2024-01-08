const http = require('http');

// 서버를 생성하고 요청에 대한 응답을 처리하는 부분입니다.
const server = http.createServer((req, res) => {
  // 요청이 들어올 때마다 'Hello, World!'를 응답으로 보냅니다.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// 서버가 8080 포트에서 동작하도록 설정합니다.
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
