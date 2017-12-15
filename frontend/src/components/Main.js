import React, { Component } from 'react'
import axios from 'axios'
import { Icon, Menu, Table, Button, Input, Popup } from 'semantic-ui-react'
import About from './About'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datetime: Date.now(),
      value: 0,
      number: 1,
      occurrences: 0
    }
    this.onClick = this.onClick.bind(this)
    this.addValue = this.addValue.bind(this)
  }
  addValue(event) {
    return this.setState({
      number: event.target.value
    })
  }
  onClick(ev) {
    axios.get(`/difference?number=${this.state.number}`)
    .then(res => {
      this.setState({
        data: res.data,
        datetime: res.data.datetime,
        value: res.data.value,
        number: res.data.number,
        occurrences: res.data.occurrences
      })
    })
  }
  render() {
    const { number, data } = this.state
    let isDecimal = number % 1 !== 0
    // handle invalid input on the frontend
    const isInvalidInput = isDecimal || number > 100 || number <= 0
    return (
      <div>
        <header>
          <Menu>
            <Menu.Item>
              <Icon name='calculator' />
              I'm a Special Calculator!
            </Menu.Item>
            <Menu.Item>
              <Popup basic trigger={<Input error={isInvalidInput} 
              placeholder='Input a number' 
              onChange={this.addValue} />}
              open={isInvalidInput} 
              content='Please enter an integer from 1 to 100' />
            </Menu.Item>
            <Menu.Item>
              <Button className='play' color='teal' 
              onClick = {this.onClick} disabled={isInvalidInput}>Play</Button>
            </Menu.Item>
            <Menu.Item>
              <About />
            </Menu.Item>
          </Menu>
        </header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Time</Table.HeaderCell>
              <Table.HeaderCell>Input</Table.HeaderCell>
              <Table.HeaderCell>Result</Table.HeaderCell>
              <Table.HeaderCell>Occurrence</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <TableBody data={data}/>
        </Table>
      </div>
    )
  }
}

const TableBody = ({data}) => {
  if (data) {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell>{data.datetime}</Table.Cell>
          <Table.Cell>{data.number}</Table.Cell>
          <Table.Cell>{data.value}</Table.Cell>
          <Table.Cell>{data.occurrences}</Table.Cell>
        </Table.Row>
      </Table.Body>
    )
  } else {
    return(<Table.Body></Table.Body>)
  }
}