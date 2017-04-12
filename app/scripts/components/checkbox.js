import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Document from './document.js'
import Confirmation from './confirmation.js'

const Checkbox = React.createClass ({

  getInitialState() {
        return {
          hidden: true,
          labelText: 'Mark as Read',
          checked: false,
          disabled: false
        };
  },

  alert() {
      this.setState({
          hidden: !this.state.hidden,
          checked: !this.state.checked
      });
  },

  confirm() {
    this.setState({
      hidden: !this.state.hidden,
      labelText: 'Read',
      disabled: true
    });
  },

  cancel() {
    this.setState(
      this.getInitialState()
    );
  },

  render() {
      var alertMessage = 'show-content';
      var confirmRead = 'hide-content';

      if (this.state.hidden) {
          alertMessage = 'hide-content';
          confirmRead = 'hide-content';
      }

      return (
          <section>
            <section className={'document'}>
                <label htmlFor="checkRead">{this.state.labelText}</label>
                <input type="checkbox" id="checkRead" onChange={this.alert} checked={this.state.checked} disabled={this.state.disabled}/>
            </section>

            <section className={`${alertMessage} modal-container`}>
                <div className={'modal'}>
                    <h1> Are you sure you read this?</h1>
                    <button onClick={this.confirm}>confirm</button>
                    <a href="#" onClick={this.cancel}>cancel</a>
                </div>
            </section>
          </section>
      );
  }

})

export default connect(container.allState)(Checkbox)
