import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";


describe('Tests <PrivateRoute/>', () => {

    test('should show children if authenticated', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {

            logged: true,
            user: {
                name: 'Edwin',
                id: '123',
            }

        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute >
                        <span>Children</span>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Children')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });
})