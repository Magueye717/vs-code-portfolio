import * as motion from "motion/react-client"
import { useEffect, useState } from "react";

const Dock = () => {
    const [isDockHidden, setIsDockHidden] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsDockHidden(true);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <>
       <div className={`dock ${isDockHidden ? 'hidden' : ''}`}>
        <img
          src="./assets/img/cv.png"
          alt="Finder"
          className="h-10 w-10 transition-transform duration-200 hover:scale-110"
        />
        <img
          src="./assets/img/vs-code2.png"
          alt="VS Code"
          className="h-10 w-10 transition-transform duration-200 hover:scale-110"
        />
  
      <img
          src="./assets/img/cv-icon.webp"
          alt="VS Code"
          className="h-10 w-10 transition-transform duration-400 hover:scale-110"
          style={{height:40, width:40, marginTop:5}}
        />
  
      </div>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isDockHidden ? 0 : 1, y: isDockHidden ? 10 : 0 }}
        transition={{ duration: 1 }}
        onMouseEnter={() => setIsDockHidden(false)}
        onMouseLeave={() => setTimeout(() => setIsDockHidden(true), 3000)} // Re-hide after 3s
         style={{width:"100vw", height:"10px", position:"absolute", bottom:1}}></motion.div>
      </>
    );
  };

  export default Dock