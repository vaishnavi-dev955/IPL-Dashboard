import './index.css'

const LatestMatch = props => {
  console.log(props)
  const {LatestMatchData} = props
  const {
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    umpires,
  } = LatestMatchData

  return (
    <div className="Match-background">
      <div className="container1">
        <div>
          <p className="heading1">{competingTeam}</p>
          <p className="heading2">{date}</p>
          <p className="heading3">{venue}</p>
          <p className="heading3">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match${competingTeam}`}
          className="team-logo-style1"
        />
        <div>
          <p className="heading4">First Innings</p>
          <p className="heading3">{firstInnings}</p>
          <p className="heading4">Second Innings</p>
          <p className="heading3">{secondInnings}</p>
          <p className="heading4">Man of The Match</p>
          <p className="heading3">{manOfTheMatch}</p>
          <p className="heading4">Umpires</p>
          <p className="heading3">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
