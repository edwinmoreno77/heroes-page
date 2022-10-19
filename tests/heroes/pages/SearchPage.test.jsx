import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";


const mockdUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockdUseNavigate,
}));


describe('<SearchPahe/> test', () => {

    beforeEach(() => jest.clearAllMocks());

    test('should show component', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )


        expect(container).toMatchSnapshot();

    });


    test('should show Batman and input with value queyString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug();

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain('dc-batman.jpg');

        const div = screen.getByTestId('div-display-none');
        expect(div.style).toHaveProperty('display', 'none');
        //other way
        expect(div.style.display).toBe('none');

    });

    test("it should show an error if it doesn't find the hero", () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const div = screen.getByTestId('div-display-none');
        expect(div.style.display).toBe('');

    });

    test('you must call navigate to the new screen', () => {

        const inputValue = 'batman123';

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: inputValue } });

        const form = container.querySelector('form');
        fireEvent.submit(form);

        expect(mockdUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

    });
});