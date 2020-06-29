import cookieParser from 'cookie-parser';
import express from 'express';
import next from 'next';

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    
    const server = express();
    
    server.use(cookieParser());
    server.get('/product/:handle', (req, res) => {
      const page = '/product';
      const queryParams = { 
        handle: req.params.handle 
      };
      app.render(req, res, page, queryParams);
      //use next for server side render
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () => {
      console.log(`Server listening on on https://localhost:${port}`); //eslint-disable-line
    });
  } catch(error) {
    console.log(error.stack); //eslint-disable-line
    process.exit(1);
  }
})();