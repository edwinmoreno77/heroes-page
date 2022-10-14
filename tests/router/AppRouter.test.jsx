import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";


describe('Test <AppRouter/>', () => {
    test('should show login if not authenticated', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login Page')).toBeTruthy();
        expect(screen.getAllByText('Login').length).toBe(1);

    });

    test('should show Marvel Component if authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Edwin',
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug();

        expect(screen.getAllByText('Logout').length).toBe(1);
        expect(screen.getAllByText('Marvel')).toBeTruthy();
        expect(screen.getAllByText('Heroes')).toBeTruthy();


    });

});