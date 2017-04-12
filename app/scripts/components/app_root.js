import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Document from './document.js'
import Checkbox from './checkbox.js'
import Confirmation from './confirmation.js'

class AppRoot extends React.Component {

  render() {
    return (
      <section>
        <Document />
        <Checkbox />
      </section>
    );
  }
}

export default connect(container.allState)(AppRoot)
