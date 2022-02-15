import React from 'react'
import { shallow } from 'enzyme'
import { AppHeader } from './AppHeader'

const setUp = (props) => shallow(<AppHeader {...props}/>)

describe ('should render AppHeader component', () => {
	it ('should contain .app__header wrapper', () => {
		const component = setUp()
		const wrapper = component.find('.app__header')
		expect(wrapper.length).toBe(1)
	})
	
	it ('should contain NavLink elements', () => {
		const component = setUp()
		const wrapper = component.find('NavLink')
		expect(wrapper.length).toBe(2)
	})  
})