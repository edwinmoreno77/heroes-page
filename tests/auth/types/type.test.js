import { types } from "../../../src/auth/types/types";

describe('test Types.js', () => {

    test('must be equal', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
    });

})