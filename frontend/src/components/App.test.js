import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Main from './Main'
import { shallow } from 'enzyme'

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