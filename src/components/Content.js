import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortfolioHome from "../pages/HomeScreen";

const ContentArea = () => (
    <div className="content-area">
      <div className="tabs">
        <button className="tab active"><FontAwesomeIcon color='#996f5c' size={80} icon={faCode} /> Home <FontAwesomeIcon style={{marginLeft:5, width: 8, position:"relative", top:1}} color='#ffff'  icon={faClose} /> </button>
        <button className="tab"><FontAwesomeIcon color='#996f5c' size={80} icon={faCode} /> Experience</button>
        <button className="tab"><FontAwesomeIcon color='#996f5c' size={80} icon={faCode} /> About</button>
      </div>
      <div className="editor">
        <PortfolioHome />
      </div>
      <footer className="status-bar" id="statusBar">
        <small>Powered by MGG</small>
      </footer>
    </div>
  );

  export default ContentArea