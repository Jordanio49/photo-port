import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach (cleanup);

describe('About component', ()=> {
    //First test
    //Can use the 'it' function or the 'test' function here
    it('renders', ()=> {
        render(<About />);
    });

    //Second test
    test('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })


})