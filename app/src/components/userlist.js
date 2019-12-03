import React from 'react';
import axios from 'axios';
import Usercard from './usercard'
import Followers from './followers';
export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            followerData: [],
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/niklasbec')
            .then(response => {
                this.setState({
                    ...this.state,
                    data: response.data
                })
            })
            .catch(error => {
                console.log(`There was an Error: ${error}`)
            })
        axios.get('https://api.github.com/users/niklasbec/followers')
            .then(response => {
                this.setState({
                    ...this.state,
                    followerData: response.data
                })
                console.log(this.state);
            })
            .catch(error => {
                console.log(`There was an Error: ${error}`)
            })
      }
    render() {
        return(
            <div>
                <h1>Me</h1>
                <Usercard data={this.state} />
                <h2>Followers</h2>
                <Followers data={this.state} />
            </div>
        )
    }
}