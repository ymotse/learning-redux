import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from './actions'

const Counter = ({ count, decrement, increment }) => (
    <div>
        <h2>Example to learning Redux</h2>
        <div>
            <button onClick={decrement}>-</button>
            <span>{count.count}</span>
            <button onClick={increment}>+</button>
        </div>
    </div>
)

const mapStateToProps = state => ({ count: state.count })

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
