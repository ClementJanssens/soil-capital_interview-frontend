import { api } from '@services';
import { PhotoI } from './photo.api';

export const photosApi = api.injectEndpoints({
    endpoints: (builder) => ({
        photos: builder.mutation<PhotoI[], void>({
            query: () => ({
                url: 'photos',
                method: 'GET',
            }),
        }),
    }),
});

export const { usePhotosMutation } = photosApi;
