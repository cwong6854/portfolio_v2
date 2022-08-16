import React from 'react';
import rimble from "../../assets/images/rimble_website.png";
import pley from "../../assets/images/pley_website.png";
import gitlet from "../../assets/images/gitlet.png";
import js_logo from "../../assets/images/js_logo.png";
import react_logo from "../../assets/images/react_logo.png";
import python_logo from "../../assets/images/python_logo.png";
import node_logo from "../../assets/images/node_js.png";
import html_logo from "../../assets/images/html_logo_3.png"
import aws_logo from "../../assets/images/aws_logo.svg";
import css_logo from "../../assets/images/css_logo.png";
import lambda_aws_logo from "../../assets/images/lambda_aws_logo.png";
import mysql_logo from "../../assets/images/mysql_logo.png";
import mongodb_logo from "../../assets/images/mongodb_logo.png";
import git_logo from "../../assets/images/git_logo.png";
import redux_logo from "../../assets/images/redux_logo.png";
import Contact from "../Contact/Contact.js"
import "./css/body.css";
import "../../App.css";

const Body = () => {

    const imageLink = url => {
        window.open(url, "_blank", )
    }

    return (
        <div>
            <section className='section-1'>
                <div className='section-description-container'>
                    <div className='section-text'>
                        <h1 className='section-header'>Rimble</h1>
                        <p className='section-description'>Rimble uses sophisticated machine learning models and proprietary raw data to create infrastructure for delightful esports experiences.</p>
                        <p className='section-description'>Technologies: React &bull; JavaScript &bull; HTML &bull; CSS &bull; Amazon Web Services (AWS) &bull; REST APIs</p>
                    </div>
                </div>
                <img className='section-image' src={rimble} onClick={() => imageLink("https://rimble.io/")}></img>

            </section>
            <section className='section-2'>
                <img className='section-image' src={pley} onClick={() => imageLink("https://github.com/cwong6854/pley")}></img>
            <div className='section-description-container'>
                <div className='section-text'>
                    <h1 className='section-header'>PLEY</h1>
                    <p className='section-description'>PLEY helps you discover and bookmark your favorite venues and local hotspots around the city of Berkeley. </p>
                    <p className='section-description'>Technologies: React &bull; MongoDB &bull; Express &bull; Node &bull; JavaScript &bull; HTML &bull; CSS</p>
                </div>
                </div>
            </section>
            <section className='section-3'>
            <div className='section-description-container'>
            <div className='section-text'>
                    <h1 className='section-header'>Gitlet</h1>
                    <p className='section-description'>A version control system backed by a tree-based data structure that employs SHA-1 encryption and is capable of handling multiple file contents.</p>
                    <p className='section-description'>Technologies: Java</p>
                </div>
                </div>
                <img className='section-image' src={gitlet} onClick={() => imageLink("https://github.com/cwong6854/Gitlet")}></img>
            </section>
            <h1 className='items-header'>Skills</h1>
            <div className='items-container items style1 medium onscroll-fade-in'>

                <section className='image-logo-container'>
                    <img className='image-logo' src={react_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={redux_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={js_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={node_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={python_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={html_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={css_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={aws_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={lambda_aws_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={mongodb_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={mysql_logo}></img>
                </section>
                <section className='image-logo-container'>
                    <img className='image-logo' src={git_logo}></img>
                </section>
            </div>
            <Contact/>
        </div>
    )
}

export default Body;