import { useParams } from '@hooks';
import { request } from '@request';
import { Mock } from 'vitest';

export const requestMock = {
    get: request.get as Mock
};

export const useParamMock = useParams as Mock;
