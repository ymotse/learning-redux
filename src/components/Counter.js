import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions/count'

const Counter = ({ count, decrement, increment }) => (
    <div>
        <h3 style={{background:'rgba(207, 235, 255, 0.66)'}}>Increment/Decrement Counter </h3>
        
        <div>
            <button onClick={decrement} style={{fontWeight:'bold'}}> - </button>
            
            <span style={{margin:10}}>{count.count}</span>
            
            <button onClick={increment} style={{fontWeight:'bold'}}> + </button>
        </div>
    </div>
)

const mapStateToProps = state => ({ count: state.count })

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
