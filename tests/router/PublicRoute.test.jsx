import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";


describe('Test <PublicRoute/>', () => {


    test('should show children if not authenticated', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <span>Children</span>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Children')).toBeTruthy();
    });

    test('should navigate if authenticated', () => {

        const contextValue = {

            logged: true,
            user: {
                name: 'test',
                id: 123
            }

        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute >
                                <span>Children</span>
                            </PublicRoute>
                        } />

                        <Route path="/marvel" element={<h1>Pagina de Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.queryByText('Children')).not.toBeTruthy();
        expect(screen.getByText('Pagina de Marvel')).toBeTruthy();

    })

})