const koa = require('koa');
const Router = require('koa-router');


const app = koa();
const router = new Router();

app.name = 'Vacay';

router.get('/koa-test', function* () {
  this.body = {
    results: [{
      foo: 'bar'
    }]
  };
});

app.use(router.routes());

app.listen(5000);
