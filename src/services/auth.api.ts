import { api } from '@services';
import i18n from 'i18next';
import { LoginRequestI } from './auth.types';

type UserT = {
    id: number;
    email: string;
};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserT[], LoginRequestI>({
            query: (credentials) => {
                if (credentials.password !== 'hU3HUAy^yf97') throw new Error('INVALID_PASSWORD');

                return {
                    url: `users?email=${credentials.email}`,
                    method: 'GET',
                };
            },
            transformResponse: (response: UserT[]) => {
                if (response.length) {
                    i18n.changeLanguage('en');
                    return response;
                }
                throw new Error('ACCESS_DENIED');
            },
        }),
        user: builder.mutation<UserT, void>({
            query: () => ({
                url: 'users',
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useUserMutation } = authApi;

export * from './auth.types';
