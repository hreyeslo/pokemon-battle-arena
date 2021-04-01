import { render, screen } from '@testing-library/react';
import Onboarding from './onboarding';
import React from 'react';

test('renders learn react link', () => {
	render(<Onboarding />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
