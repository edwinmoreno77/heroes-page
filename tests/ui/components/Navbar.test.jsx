import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockdUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockdUseNavigate,
}));


describe('<Navbar/> test', () => {

    beforeEach(() => jest.clearAllMocks());

    test('should show User Name if authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Edwin',
            },
            logout: jest.fn(),
        }


        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Edwin')).toBeTruthy();
    });

    test('should call logged and navigate when the button is clicked', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Edwin',
            },
            logout: jest.fn(),
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug();

        const logoutButton = screen.getAllByRole('button');
        fireEvent.click(logoutButton[1]);

        expect(contextValue.logout).toHaveBeenCalledTimes(1);
        expect(mockdUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    });

});
