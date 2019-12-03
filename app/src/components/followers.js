import React from 'react';
import styled from 'styled-components'

const Button = styled.button`

`

export default class Followers extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className='followers'>
            {
            this.props.data.followerData.map(follower => (
            <div className='follower' key={follower.id}>
                <p>Username: {follower.login}</p>
                <img width='300px' src={follower.avatar_url} alt='image of user'/>
                <button className='button'><a target='_blank' href={follower.html_url}>Go to Profile</a></button>
            </div>
            ))}
            </div>
        )
    }
}