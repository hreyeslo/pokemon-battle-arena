import { render, screen } from '@testing-library/react';
import Arena from './arena';
import React from 'react';

test('renders learn react link', () => {
	render(<Arena />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
