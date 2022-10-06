import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";


describe('tetst AuthReducer', () => {

    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('must call login authenticate and set the user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Edwin',
                id: 123
            }
        }
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('should (logout) remove the username and logged false', () => {

        const state = {
            logged: true,
            user: {
                name: 'Edwin',
                id: 123
            }
        }

        const action = {
            type: types.logout
        }
        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });
    });
});
