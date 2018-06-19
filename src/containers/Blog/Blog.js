import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount () {
        axios.get(
            '/posts'
        ).then((response) => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map((post) => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState(
                {
                    posts: updatedPosts
                }
            );
        });
    }

    postSelectedHandler = (postId) => {
        this.setState(
            {
                selectedPostId: postId
            }
        )
    };

    render () {
        const posts = this.state.posts
            .map((post) => {
                return (
                    <Post
                        clicked={() => this.postSelectedHandler(post.id)}
                        key={post.id}
                        author={post.author}
                        title={post.title}
                    />
                )
            });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostId}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;