// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {IplListDetails} = props
  const {id, name, teamImageUrl} = IplListDetails
  return (
    <li className="white-card">
      <Link to={`/team-matches/${id}`}>
        <div className="horizon2">
          <img src={teamImageUrl} alt={name} className="team-image-style" />
          <p className="heading2">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
