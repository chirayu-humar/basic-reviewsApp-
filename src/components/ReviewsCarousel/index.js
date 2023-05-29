// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarausel extends Component {
  state = {
    index: 0,
  }

  onLeftClick = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  onRightClick = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg-container">
        <div className="first">
          <h1>Reviews</h1>
          <img alt={username} src={imgUrl} />
        </div>
        <div className="second">
          <button
            onClick={this.onLeftClick}
            type="button"
            data-testid="leftArrow"
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <p>{username}</p>
          <button
            onClick={this.onRightClick}
            type="button"
            data-testid="rightArrow"
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
        <div className="third">
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarausel
