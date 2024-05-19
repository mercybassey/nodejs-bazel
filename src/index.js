const Koa = require('koa');
const app = new Koa();
const port = 3000;

app.use(async ctx => {
    ctx.body = 'Hello, Bazel!';
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
