import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/api/products', ({ response }: { response: any }) => {
  response.body = 'hello';
});

export default router;
