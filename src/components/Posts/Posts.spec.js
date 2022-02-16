import React from 'react'
import { render, shallow } from 'enzyme'
import { Posts } from '..'

describe('Posts component', () => {
	it('should render Post component', () => {
		const component = render(<Posts />)
		expect(component).toMatchSnapshot()
	})
})
