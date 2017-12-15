import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class Rules extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button size="small" onClick={this.handleOpen} color="purple">About</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' />
        <Modal.Content>
          <p>Difference is a simple Django app that will yield the difference between</p>
          <p>1. The sum of the squares of the first n natural numbers and </p>
          <p>2. The square of the sum of the same first n natural numbers, where n is guaranteed to be no greater than 100.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
