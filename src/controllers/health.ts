/**
 * @file: health.ts
 */

import Koa from "koa";

/**
 * GET /health
 * Check server health.
 */
export const health = async (ctx: Koa.Context, next: Function) => {
    ctx.status = 200;
    ctx.body = "ok";
    await next();
};
