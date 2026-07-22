import { Hono } from 'hono';
import { cors } from "hono/cors"
import { db } from "./database";
import * as schema from "./database/schema";

const app = new Hono()
  .basePath('api')
  .use(cors({ origin: (origin) => origin ?? "*", credentials: true, exposeHeaders: ["set-auth-token"] }))
  .get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }, 200))
  .get('/health', (c) => c.json({ status: 'ok' }, 200))
  .post('/leads', async (c) => {
    const body = await c.req.json<{
      name: string;
      phone: string;
      email?: string;
      interest: string;
      message?: string;
    }>();

    if (!body.name?.trim() || !body.phone?.trim() || !body.interest?.trim()) {
      return c.json({ error: "Faltan campos requeridos" }, 400);
    }

    const [lead] = await db
      .insert(schema.leads)
      .values({
        name: body.name.trim(),
        phone: body.phone.trim(),
        email: body.email?.trim() || null,
        interest: body.interest.trim(),
        message: body.message?.trim() || null,
      })
      .returning();

    return c.json({ lead }, 201);
  });

export type AppType = typeof app;
export default app;
