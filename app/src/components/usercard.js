import React from 'react';
export default class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <p>Username: {this.props.data.data.name}</p>
                <p>Location: {this.props.data.data.location}</p>
                <p>Following: {this.props.data.data.following}</p>
                <p>Followers: {this.props.data.data.followers}</p>
                <img width='300px' src={this.props.data.data.avatar_url} alt='image of niklas'/>
            </div>
        )
    }
}