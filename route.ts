import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', ({ response }) => {
  response.headers.set('content-type', 'application/json');
  response.body = JSON.stringify({
    text: 'Hello, Moon',
  });
});

router.get('/api/products', ({ response }: { response: any }) => {
  response.body = 'hello';
});

export default router;
