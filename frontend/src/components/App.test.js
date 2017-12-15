import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Main from './Main'
import { shallow, mount } from 'enzyme'
import { Table } from 'semantic-ui-react'
import sinon from 'sinon'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

it('renders the Main component', () => {
  const main = shallow(<Main />)
  expect(main.length).toEqual(1)
})

it('renders the div component in Main', () => {
  const main = shallow(<Main />)
  expect(main.is('div')).toEqual(true)
})

it('renders a <Table/>', () => {
  const wrapper = mount(<Main />)
  expect(wrapper.find('Table').length).toEqual(1)
})
