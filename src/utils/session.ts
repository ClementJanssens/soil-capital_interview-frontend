import { UserI } from '@services';
import * as jose from 'jose';

export async function createJWT(user: UserI): Promise<string> {
    const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2');
    const alg = 'HS256';

    return await new jose.SignJWT({ user })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign(secret);
}

export function setStorageToken(token: string, remember: boolean) {
    if (remember) {
        localStorage.setItem('token', token);
        return;
    }
    sessionStorage.setItem('token', token);
}

export function getStorageToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
}

export function clearStorageToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}
