import React from 'react'
import { shallow } from 'enzyme'
import { AppHeader } from './AppHeader'

describe ('should render AppHeader component', () => {
	it ('should contain .app__header wrapper', () => {
		const component = shallow(<AppHeader />)
		const wrapper = component.find('.app__header')
		expect(wrapper.length).toBe(1)
		// console.log(component.debug())
	})
	
	it ('should contain NavLink elements', () => {
		const component = shallow(<AppHeader />)
		const wrapper = component.find('NavLink')
		expect(wrapper.length).toBe(2)
	})  
})