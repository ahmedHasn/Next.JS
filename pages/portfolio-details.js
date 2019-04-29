import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { withRouter } from 'next/router';

 class portfolioDetails extends Component {


  static async getInitialProps({query}){
    console.log(query);
    
    const postId = query.id;
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      post = res.data;
    } catch (error) {
      console.log(error);
    }
    return {post};
  }


  render() {
    const {post} = this.props;
    return (
      <Layout>
        <h2>{post.title}</h2>
        <p>Body: {post.body}</p>
        <p>ID: {post.id}</p>
      </Layout>
    )
  }
}
export default withRouter(portfolioDetails);