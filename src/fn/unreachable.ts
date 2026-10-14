import { captureStackTrace } from './captureStackTrace.js';

export function unreachable(msg = 'Unreachable code reached'): never {
  const error = new Error(msg);
  if (error.stack) captureStackTrace(error, unreachable);
  throw error;
}
