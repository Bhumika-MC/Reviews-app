import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  goToPrevious = () => {
    this.setState(prevState => {
      if (prevState.currentIndex > 0) {
        return {currentIndex: prevState.currentIndex - 1}
      }
      return null
    })
  }

  goToNext = () => {
    const {reviewsList} = this.props
    this.setState(prevState => {
      if (prevState.currentIndex < reviewsList.length - 1) {
        return {currentIndex: prevState.currentIndex + 1}
      }
      return null
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[currentIndex]

    return (
      <div className="carousel-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrows">
          <button className="arrow-button" onClick={this.goToPrevious}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="review-details">
            <img src={imgUrl} alt={username} className="profile-pic" />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button className="arrow-button" onClick={this.goToNext}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
