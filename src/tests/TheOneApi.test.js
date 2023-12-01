import { render, screen } from '@testing-library/react';
import App from '../App';
import TheOneApi from '../components/TheOneApi';

test('check lotr footer is present', () => {
    render(< App/>);
    const linkElement = screen.getByText(/LOTR Quote:/i);
    expect(linkElement).toBeInTheDocument();
});

test('one api test', () => {
    render(<TheOneApi/>)
});
