import React, { useEffect, useRef } from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const PortfolioHome = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.log("Autoplay blocked:", error));
    }
  }, []);
  
  return (
    <main style={{ padding: "40px", flex: 1 }}>
      <Avatar
        alt="Magueye Gueye"
        src="/assets/img/profile.png"
        sx={{ width: 150, height: 150, marginBottom: 4 }}
        />
      {/* Terminal Intro */}
      <Card
        style={{
          backgroundColor: "#424242",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #616161",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          width:"720px"
        }}
      >
        <CardContent style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <TerminalIcon style={{ color: "#4CAF50" }} />
          <div>
            <Typography variant="h6" color="#BBDEFB">
              Hello, my name is{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ fontWeight: "bold", color: "#64B5F6" }}
              >
                Magueye Gueye
              </motion.span>
            </Typography>
            <Typography variant="body2" color="#B0BEC5">
              <Typewriter typeSpeed={20}  words={["A Full Stack Web Developer, proficient in various technologies including Node JS, Laravel, Django, GraphQL, React JS, Angular, and Redux etc."]} loop={1} cursor />
            </Typography>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default PortfolioHome;
