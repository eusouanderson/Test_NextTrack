import { ZodSchema } from 'zod';

type MiddlewareHandler = (c: any, next: () => Promise<void>) => Promise<any>;

export const validate = <T>(schema: ZodSchema<T>): MiddlewareHandler => {
  return async (c, next) => {
    try {
      const body = await c.req.json();
      const result = schema.safeParse(body);

      if (!result.success) {
        return c.json({ error: result.error }, 400);
      }
      c.req.body = result.data;

      await next();
    } catch (e) {
      if (e instanceof SyntaxError) {
        return c.json({ error: 'Invalid JSON' }, 400);
      }
      return c.json({ error: 'Internal server error' }, 500);
    }
  };
};
