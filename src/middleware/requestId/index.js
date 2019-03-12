// @flow
import addRequestId from 'express-request-id';

export const createRequestIdMiddleware = () => addRequestId();
