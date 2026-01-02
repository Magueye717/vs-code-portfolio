import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "motion/react-client"
import ContentArea from "./Content";
import { Sidebar } from "./SideBar";
import { faClose, faFileCode, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons/faSortUp";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons/faContactBook";

const VsCode = () => (
    <motion.div
      className="macbook-wrapper fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      drag
      dragConstraints={{ left: -1100, right: 1100, top: -600, bottom: 600 }}
    >
      <div className="macbook-window">
        <header className="window-header">
          <div className="window-controls">
            <span className="window-control red">
              <FontAwesomeIcon className='vs-icon' color='#444444' size={1} style={{width:6, position:"relative", bottom:2.5, left:3}} icon={faClose} />
            </span>
            <span className="window-control yellow">
              <FontAwesomeIcon className='vs-icon'  color='#444444' size={1} style={{width:6, position:"relative", bottom:4.5, left:3}} icon={faWindowMinimize} />
            </span>
            <span onClick={() => {}} className="window-control green">
             <div style={{ transform: "rotate(-50deg)", position:"relative", left:3, top: -1, bottom: 2}}>
             <FontAwesomeIcon className='vs-icon' color='#444444' size={2.5} width={5}  style={{transform: "rotate(180deg)", position:"relative", left:3, bottom:6.5}} icon={faSortUp} />
             <FontAwesomeIcon className='vs-icon' color='#444444' size={2.5} width={5}  style={{position:"relative", right:2, top:1}} icon={faSortUp} />
             </div>
            </span>
          </div>
        </header>
        <div className="macbook-body">
            <div>
                <div style={{padding: 7, marginTop: 10}}>
                    <FontAwesomeIcon color="#ffff" size="2x" icon={faFileCode} />
                </div>
                <div style={{padding: 7, marginTop: 10}}>
                    <FontAwesomeIcon color="#5e5e5e" size="2x" icon={faGithub} />
                </div>
                <div style={{padding: 7, marginTop: 10}}>
                    <FontAwesomeIcon color="#5e5e5e" size="2x" icon={faLinkedin} />
                </div>
                <div style={{padding: 7, marginTop: 10}}>
                    <FontAwesomeIcon color="#5e5e5e" size="2x" icon={faContactBook} />
                </div>
            </div>
          <Sidebar />
          <ContentArea />
        </div>
      </div>
    </motion.div>
  );

  export default VsCode