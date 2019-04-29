import React, { Component } from 'react'
import Layout from '../components/layout/Layout';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes';

 class portfoilos extends Component {

  static async getInitialProps(){
    let posts = [];
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
    } catch (error) {
      console.log(error);
    }
    return {posts};
  }

  render() {
    const {posts} = this.props;
    return (
      <Layout>
        <h2>I am protfoilos page</h2>
        {posts && (
          <ul>
            {posts.map((post) => {
              return (
              <li key={post.id}>
                <Link route={`/portfolio/${post.id}`} >
                  <a style={{'fontSize': '20px'}}>{post.title}</a>
                </Link>
              </li>
              )
            })}
          </ul>
        )}
      </Layout>
    )
  }
}
export default portfoilos;