import React, { Component } from 'react';
import axiosInstance from '../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    async componentDidUpdateCall() {
        try {
            let data = await axiosInstance.get(`/posts/${this.props.id}`);
            this.setState(
                {
                    loadedPost: data.data
                }
            );
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                this.componentDidUpdateCall();
            }
        }
    }

    deletePostHandler = () => {
        this.deletePostHandlerCall();
    };

    deletePostHandlerCall = async () => {
        try {
            let deleted = await axiosInstance.delete(`/posts/${this.props.id}`);
            console.log(deleted);
        } catch (e) {
            console.log(e);
        }
    };

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;

        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            )
        }

        post = (post);
        return post;
    }
}

export default FullPost;