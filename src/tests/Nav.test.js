import { render, screen } from '@testing-library/react';
import App from '../App';

test('check Navbar is present', () => {
    render(< App/>);
    const linkElement = screen.getByText(/Startpage/i);
    expect(linkElement).toBeInTheDocument();
});
