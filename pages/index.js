import React, { Component } from 'react'
import Header from '../components/shared/Header';
import Layout from '../components/layout/Layout';
import axios from 'axios';

 class index extends Component {

  constructor(props){
    super(props);
  }

  static async getInitialProps(){
    let userData = {};
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
    } catch (error) {
    console.log(error);
    }
    return {userData};
  }

  render() {
    const {userData} = this.props;
    return (
      <Layout>
        <p>Hello, world</p>
        <h2>{userData.title}</h2>
      </Layout>
    )
  }
}
export default index;