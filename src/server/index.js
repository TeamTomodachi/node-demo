const Koa = require('koa');
const koaStatic = require('koa-static');

const app = new Koa();

app.use(koaStatic('dist'));

const port = process.env.NODE_ENV === 'production' ? 80 : 8080;
app.listen(port);

// eslint-disable-next-line no-console
console.info(`Listening on port ${port}`);
