import React, { useState } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeName } from '../store/ducks/name'

function Name ({ nomeCompleto, changeName }) {
    
    const [nome, setNome] = useState(nomeCompleto.name)
    
    function handle(valor) {
        changeName(valor)
        setNome(valor)
    }
    
    return (
        <div>
            <h3 style={{background:'rgba(207, 235, 255, 0.66)'}}>[Redux] Inform your name </h3>
            
            <div>1: {nomeCompleto.name}</div>
            <div>2: {nome}</div> 
            <input type="text" onChange={e => handle(e.target.value)} />
        </div>
    )
}

const mapStateToProps = state => ({ nomeCompleto: state.name })

const mapDispatchToProps = dispatch => bindActionCreators({ changeName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Name)