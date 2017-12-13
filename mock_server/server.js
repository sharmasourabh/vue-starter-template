const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/auth/token', (req, res, next) => {
  if (req.body.email === 'a@a.com') {
    req.method = 'GET';
    req.url = req.baseUrl.concat('/token/1');
    next();
  } else {
    res.send(401, 'Username/password is incorrect.');
  }
});

// server.use('/auth', router);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
