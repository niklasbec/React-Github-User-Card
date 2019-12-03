import React from 'react';
export default class Followers extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
            {
            this.props.data.followerData.map(follower => (
            <div key={follower.id}>
                <p>Name: {follower.login}</p>
                <button><a href={follower.html_url}>Go to Profile</a></button>
                <img width='300px' src={follower.html_url} alt='image of user'/>
            </div>
            ))}
            </div>
        )
    }
}