import React from 'react'
import { shallow } from 'enzyme'
import { AppHeader } from './AppHeader'

it ('should render AppHeader component', () => {
  const component = shallow(<AppHeader />)
	const wrapper = component.find('.app__header')
	expect(wrapper.length).toBe(1)
	// console.log(component.debug())
})

it ('should render NavLink element', () => {
  const component = shallow(<AppHeader />)
	const wrapper = component.find('NavLink')
	expect(wrapper.length).toBe(2)
})