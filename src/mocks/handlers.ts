import { rest } from 'msw';
import { HH } from '../CONSTS';

import options from './data/options.json';
import pameldte from './data/pameldte.json';
import posts from './data/posts.json';

// Mocking handlers
export const handlers = [
  // GET Options
  rest.get(HH.hostUrl + HH.getOptions, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(options));
  }),

  // GET Påmeldte deltakere handler
  rest.get(HH.hostUrl + HH.getPaameldte, (req, res, ctx) => {
    const year = req.url.searchParams.get('year');
    if (!year) {
      return res(
        // Respond with 400 Bad Request
        ctx.status(400),
        ctx.body('Missing one or more parameters')
      );
    }

    return res(ctx.status(200), ctx.json(pameldte));
  }),

  //GET Posts for nyheter forside
  rest.get(HH.hostUrl + HH.getPostsPath, (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    if (!page) {
      return res(
        // Respond with 400 Bad Request
        ctx.status(400),
        ctx.body('Missing one or more parameters')
      );
    }

    return res(ctx.status(200), ctx.json(posts));
  }),

  // POST Meld på deltaker handler
  rest.post(HH.hostUrl + HH.registerRunner, (req, res, ctx) => {
    const params = req.url.searchParams;
    for (const key of params.keys()) {
      if (params.get(key) === undefined) {
        return res(ctx.status(400), ctx.body('Missing one or more parameters'));
      }
    }

    return res(ctx.status(200));
  })
];
