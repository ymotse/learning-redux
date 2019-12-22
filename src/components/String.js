import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as Actions from '../actions/string'

const String = ({ string, increment_string }) => (
    <div>
        <h3 style={{background:'rgba(207, 235, 255, 0.66)'}}> Increment String </h3>
        
        <button onClick={increment_string}> Increment Random String </button>
        
        <div> {string.string} </div>
    </div>
)

const mapStateToProps = state => ({
    string: state.string
})

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(String)