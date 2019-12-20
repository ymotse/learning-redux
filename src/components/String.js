import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as Actions from '../actions/string'

const String = ({ string, increment_string }) => (
    <div>
        <h3 style={{background:'#94d3ffa8'}}> Increment String </h3>
        
        <button onClick={increment_string} style={{background:'#ffff0052', fontWeight:'bold'}}> Increment Random String </button>
        
        <div> {string.string} </div>
    </div>
)

const mapStateToProps = state => ({
    string: state.string
})

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(String)