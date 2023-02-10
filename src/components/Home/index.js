// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {IplDataList: [], isLoading: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const UpdatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({IplDataList: UpdatedData, isLoading: false})
  }

  render() {
    const {IplDataList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="background-container">
            <div className="horizon1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading1">IPL Dashboard</h1>
            </div>
            <div className="Cards-container">
              <ul className="lists-container">
                {IplDataList.map(eachItem => (
                  <TeamCard IplListDetails={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home
