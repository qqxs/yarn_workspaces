import Koa from "koa";
import nameFn from "@mono/common";
const app = new Koa();

const port = 3003;
// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx) => {
  nameFn("koa server import @mono/common");
  ctx.body = `
    <html>
    <head>
      <title>Koa Service App</title>
      <style>*{padding:0; margin:0;box-sizing: border-box;}</style>
    </head>
    <body>
      <div style="height: 100vh;display:flex; align-items: center;justify-content: center;">Hello World; \nThis is Koa service app;</div>
    </body>
    </html>
  `;
});

app.listen(port, () => {
  console.log(`listen: http://localhost:${port}`);
});
