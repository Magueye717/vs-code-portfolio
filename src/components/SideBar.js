import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar = () => (
    <div className="sidebar">
      <ul>
        <li><FontAwesomeIcon color='#996f5c' size={80} icon={faCode} /> Home </li>
        <li><FontAwesomeIcon color='#996f5c' size={80} icon={faCode} /> Experience </li>
        <li><FontAwesomeIcon color='#996f5c' size={80} icon={faCode} /> About Me </li>
      </ul>
    </div>
);