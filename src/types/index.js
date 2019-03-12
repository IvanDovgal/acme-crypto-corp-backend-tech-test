// @flow

import type { $Request, $Response } from 'express';

export interface TrackedRequest extends $Request {
  id: string
}

export type TrackedResponse = $Response;
