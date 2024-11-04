import React from 'react'

interface TitleProps {
	text: string;
	heading: string;
}

export const Title = ({ text, heading }: TitleProps) => {
	return (
		React.createElement(heading, { className: 'text-xl pl-4 pt-4 tracking-tight' }, text)
	)
}