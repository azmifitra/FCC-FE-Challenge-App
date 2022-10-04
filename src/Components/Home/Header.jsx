import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faFreeCodeCamp} size="3x" />
      <h2>freeCodeCamp - Front End Development Libraries</h2>
      <h3>
        Built by <span className="italic">Azmi Fitra</span>
      </h3>
    </div>
  );
}

export default Header;
