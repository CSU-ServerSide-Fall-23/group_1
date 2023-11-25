import { render, screen } from '@testing-library/react';
import App from '../App';

test('check links column is present', () => {
    render(< App/>);
    const linkElement = screen.getByText(/Links/i);
    expect(linkElement).toBeInTheDocument();
});
