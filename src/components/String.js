import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { increment_string } from '../store/ducks/string'

const String = ({ string, increment_string }) => (
    <div>
        <h3 style={{background:'rgba(207, 235, 255, 0.66)'}}> [Redux] Increment String </h3>
        
        <button onClick={increment_string}> Increment Random String </button>
        
        <div> {string.name} </div>
    </div>
)

const mapStateToProps = state => ({
    string: state.string
})

const mapDispatchToProps = dispatch => bindActionCreators({ increment_string }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(String)