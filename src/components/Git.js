import React, { useState, useEffect  } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { requestGit } from '../store/ducks/git'

const Git = ({ git, requestGit }) => {
    
    const [ username, setUsername ] = useState('google')
    
    useEffect(() => {
        
        if (git.data.length === undefined && git.error === false) {
            requestGit('github')
        }
    },[])
    
    return (
        <div>
            <h3  style={{background:'rgba(207, 235, 255, 0.66)'}}>[Redux-Saga] Search Github user HTTP Request</h3>
            
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            <button onClick={() => requestGit(username)}>Loader Github</button>
            
            <br /> <b>Login:</b> {git.data.login}
            <br /> <b>Id:</b> {git.data.id}
            <br /> <b>NodeId:</b> {git.data.node_id}
            <br /> <b>Avatar:</b> <img src={git.data.avatar_url} style={{width:100, height:100}} />
            <br /> <b>Url:</b> {git.data.url}
            <br /> <b>Created at:</b> {git.data.created_at}
            <br /> <b>Email:</b> {git.data.email}
            <br /> <b>Public Repos:</b> {git.data.public_repos}
        </div>
    )
    
}

const mapStateToProps = state => ({
    git: state.git
})

const mapDispatchToProps = dispatch => bindActionCreators({ requestGit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Git)