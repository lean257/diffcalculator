import React, { Component } from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table, Input, Button } from 'semantic-ui-react'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datetime: Date.now(),
      value: 0,
      number: 0,
      occurrences: 0
    }
    this.onClick = this.onClick.bind(this)
    this.addValue = this.addValue.bind(this)
  }
  addValue(event) {
    return this.setState({
      value: event.target.value
    })
  }
  onClick(ev) {
    axios.get(`/difference?number=${this.state.value}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        datetime: res.data.datetime,
        value: res.data.value,
        number: res.data.number,
        occurrences: res.data.occurrences
      })
    })
  }
  render() {
    return (
      <div>
        <header>
          <Menu>
            <Menu.Item>
              <Icon name='calculator' />
              I'm a Special Calculator!
            </Menu.Item>
            <Menu.Item>
              <Input placeholder='Input a number' onChange={this.addValue} />
            </Menu.Item>
            <Menu.Item>
              <Button color='olive' onClick = {this.onClick} content='Play' />
            </Menu.Item>
            <Menu.Item>
              <Button color='purple' content='About' />
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
           <Table.Body>
            <Table.Row>
              <Table.Cell>{this.state.datetime}</Table.Cell>
              <Table.Cell>{this.state.number}</Table.Cell>
              <Table.Cell>{this.state.value}</Table.Cell>
              <Table.Cell>{this.state.occurrences}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}
