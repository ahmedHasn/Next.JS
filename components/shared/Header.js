import React, { Component } from 'react'
import Link from 'next/link';
import '../../styles/main.scss';
 class Header extends Component {
  render() {
    return (
      <div>
      <p className="customeClass">I am styled </p>
      <p className="customeClassFromFile">I am styled </p>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/portfoilos'>
          <a>Portfolios</a>
        </Link>
        <Link href='/cv'>
          <a>CV</a>
        </Link>
        <Link href='/blogs'>
          <a>Blogs</a>
        </Link>
        <style jsx>
            {`
                a{
                    font-size: 20px;
                }; 
                .customeClass{
                    color: red
                }
            `}
        </style>
      </div>
    )
  }
}
export default Header;