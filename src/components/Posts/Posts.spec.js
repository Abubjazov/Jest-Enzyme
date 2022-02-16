import React from 'react'
import { shallow } from 'enzyme'

import Posts from './Posts'

describe('Posts component', () => {
	it('should render Post component', () => {
		const component = shallow(<Posts />)
		expect(component).toMatchSnapshot()
	})
})
