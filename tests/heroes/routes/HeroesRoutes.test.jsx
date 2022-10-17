import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { HeroesRoutes } from "../../../src/heroes";

describe('HeroRoutes test', () => {
    test('should show Marvel Component if authenticated', () => {
        const contextValue = {
            logged: true,
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <HeroesRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getAllByText('Marvel')).toBeTruthy();
        expect(screen.getAllByText('Logout').length).toBe(1);
        expect(screen.getAllByText('Heroes')).toBeTruthy();
    });

    test('should show DC Component if authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Edwin',
            }
        }
        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={contextValue}>
                    <HeroesRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('DC')).toBeTruthy();
        expect(screen.getAllByText('Heroes')).toBeTruthy();
    });

    test('should show Search Component if authenticated', () => {
        const contextValue = {
            logged: true,

        }
        render(
            <MemoryRouter initialEntries={['/search']}>
                <AuthContext.Provider value={contextValue}>
                    <HeroesRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getAllByText('Search a hero')).toBeTruthy();
    });

    test('should show the Hero', () => {
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Edwin',
            }
        }
        render(
            <MemoryRouter initialEntries={['/hero/dc-batman']}>
                <AuthContext.Provider value={contextValue}>
                    <HeroesRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        // screen.debug();
        expect(screen.getAllByText('Batman')).toBeTruthy();
        expect(screen.getAllByText('Bruce Wayne')).toBeTruthy();
    });

    test('should show Marvel Component if the path does not exist', () => {
        const contextValue = {
            logged: true,
        }
        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <HeroesRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByText('Marvel')).toBeTruthy();
        expect(screen.getAllByText('Logout').length).toBe(1);
    });

});