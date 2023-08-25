import { addToken } from '@features/auth';
import { useAppDispatch } from '@hooks';
import { getStorageToken } from '@utils';
import { useEffect, useState } from 'react';

export const useAppInit = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function loadToken() {
            const token = getStorageToken();

            if (token) {
                dispatch(addToken(token));
            }
            setInitialized(true);
        }

        loadToken();
    }, []);

    return { initialized };
};
