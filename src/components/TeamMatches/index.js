// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetailsData: {}, isLoading: true}

  componentDidMount = () => {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const LatestMatchDetailsData = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const RecentMatches = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    const UpdatedData = {
      teamBannersUrl: teamBannerUrl,
      latestMatchDetailsData: LatestMatchDetailsData,
      RecentMatchesData: RecentMatches,
    }
    this.setState({teamDetailsData: UpdatedData, isLoading: false})
  }

  render() {
    const {teamDetailsData, isLoading} = this.state
    const {
      teamBannersUrl,
      latestMatchDetailsData,
      RecentMatchesData,
    } = teamDetailsData
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <>
        <div className={`bg-container ${id}`}>
          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <img
                src={teamBannersUrl}
                className="banner-img"
                alt="team banner"
              />
              <h1 className="latest-name">Latest Matches</h1>
              <LatestMatch
                key={latestMatchDetailsData.id}
                LatestMatchData={latestMatchDetailsData}
              />
              <ul className="recent-list">
                {RecentMatchesData.map(eachValue => (
                  <MatchCard key={eachValue.id} matchDetails={eachValue} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}

export default TeamMatches
