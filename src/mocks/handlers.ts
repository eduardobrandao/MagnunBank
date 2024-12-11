import { rest } from "msw";

export const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "fake-jwt-token" }));
  }),

  rest.get("/api/balance", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ balance: 5000 }));
  }),

  rest.get("/api/transactions", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, date: "2024-12-01", amount: -100 },
        { id: 2, date: "2024-11-30", amount: 200 },
      ])
    );
  }),
];
