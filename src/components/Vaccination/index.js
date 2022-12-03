import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class Vaccination extends Component {
  renderLoader = () => (
    <>
      <div className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </>
  )

  render() {
    return (
      <>
        <Header />
        <div className="vaccine-main-container">
          <div className="about-content-container">
            <h1 className="about-title">Vaccination</h1>
            <p className="about-description">
              Last update on December 3rd 2022.
            </p>
            <p className="about-vaccine-title">
              COVID-19 vaccines be ready for distribution
            </p>
            <p className="about-vaccine-title">
              Sorry, This page is Under Construction
            </p>
            <p className="myPrefix">
              Designed By <span className="myname">SaleemJavid</span>
            </p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Vaccination
