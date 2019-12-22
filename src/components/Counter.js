import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { increment, decrement } from '../store/ducks/count'

const Counter = ({ count, decrement, increment }) => (
    <div>
        <h3 style={{background:'rgba(207, 235, 255, 0.66)'}}>[Redux] Increment/Decrement Counter </h3>
        
        <div>
            <button onClick={decrement} style={{fontWeight:'bold'}}> - </button>
            
            <span style={{margin:10}}>{count.count}</span>
            
            <button onClick={increment} style={{fontWeight:'bold'}}> + </button>
        </div>
    </div>
)

const mapStateToProps = state => ({ count: state.count })

const mapDispatchToProps = dispatch => bindActionCreators({ decrement, increment }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)