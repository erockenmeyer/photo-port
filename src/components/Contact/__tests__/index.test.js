import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact component', () => {
    // baseline
    it('renders', ()=> {
        render(<ContactForm />)
    })

    // snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('Contact me')).toHaveTextContent('Contact me')
        expect(getByTestId('Submit')).toHaveTextContent('Submit')
    })
})