import { getStore } from '@netlify/blobs';
import { handle } from '../lib/handler.mjs';

export const config = { path: '/api/*' };
export default async (req) => handle(req, getStore('baytna'));
