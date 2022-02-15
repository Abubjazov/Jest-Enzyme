import React from 'react'
import { shallow } from 'enzyme'
import { AppHeader } from './AppHeader'

const setUp = (props) => shallow(<AppHeader {...props}/>)

describe ('should render AppHeader component', () => {
	let component

	beforeEach(() => {
		component = setUp()
	})

	it ('should contain .app__header wrapper', () => {
		const wrapper = component.find('.app__header')
		expect(wrapper.length).toBe(1)
	})

	it ('should contain NavLink elements', () => {
		const navLink = component.find('NavLink')
		expect(navLink.length).toBe(2)
	})  
})