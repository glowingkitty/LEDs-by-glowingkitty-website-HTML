import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
      <div className="header-container1">
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          id="burgericon"
          className="header-image"
        />
        <div className="header-container2">
          <Link to="/" className="header-navlink">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="header-image1"
            />
          </Link>
        </div>
        <div className="header-container3">
          <Link to="/products" className="headermenulink">
            {props.link2}
          </Link>
          <a
            href="https://workshops.glowingkitty.com"
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link3}
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link4}
          </a>
          <Link to="/about" className="header-navlink2 headermenulink">
            {props.link1}
          </Link>
          <a
            href="https://blog.glowingkitty.com"
            target="_blank"
            rel="noreferrer noopener"
            className="headermenulink"
          >
            {props.link21}
          </a>
        </div>
      </div>
      <div id="menu_mobile" className="header-container4">
        <Link to="/products" className="headermenulink mobile">
          {props.link22}
        </Link>
        <a
          href="https://workshops.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="headermenulink mobile"
        >
          {props.link31}
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          className="headermenulink mobile"
        >
          {props.link42}
        </a>
        <Link to="/about" className="header-navlink4 headermenulink mobile">
          {props.link11}
        </Link>
        <a
          href="https://blog.glowingkitty.com"
          target="_blank"
          rel="noreferrer noopener"
          className="headermenulink mobile"
        >
          {props.link211}
        </a>
      </div>
      <div className="">
        <DangerousHTML
          html={`<script>
    const burgericon = document.getElementById("burgericon");
    const menu_mobile = document.getElementById("menu_mobile");
    burgericon.addEventListener("click", function(){
        menu_mobile.classList.toggle("active");
    });
</script>`}
          className=""
        ></DangerousHTML>
      </div>
    </div>
  )
}

Header.defaultProps = {
  link41: 'https://example.com',
  link_text11: 'https://example.com',
  image_src1: '/playground_assets/logo1.svg',
  link_text1: 'https://example.com',
  rootClassName: '',
  link_text: 'https://example.com',
  image_alt1: 'image',
  link2: 'Products',
  link3: 'Workshops',
  link21: 'Blog',
  link4: 'Get help',
  link1: 'About',
  image_alt2: 'image',
  image_src2: '/playground_assets/menu.svg',
  link22: 'Products',
  link31: 'Workshops',
  link42: 'Get help',
  link11: 'About',
  link211: 'Blog',
}

Header.propTypes = {
  link41: PropTypes.string,
  link_text11: PropTypes.string,
  image_src1: PropTypes.string,
  link_text1: PropTypes.string,
  rootClassName: PropTypes.string,
  link_text: PropTypes.string,
  image_alt1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link21: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  link22: PropTypes.string,
  link31: PropTypes.string,
  link42: PropTypes.string,
  link11: PropTypes.string,
  link211: PropTypes.string,
}

export default Header
