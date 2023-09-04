import { request } from '@request';
import { Mock } from 'vitest';

export const requestMock = {
    get: request.get as Mock
};
