/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Service from 'parts/Service';
import Footer from 'parts/Footer';

import Data from 'json/landingPage.json';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Service data={Data.service} />
        <Footer />
      </>
    );
  }
}
