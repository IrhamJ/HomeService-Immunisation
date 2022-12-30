/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroPortfolio from 'parts/HeroPortfolio';

import Footer from 'parts/Footer';



export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroPortfolio {...this.props} />
        <Footer />
      </>
    );
  }
}
