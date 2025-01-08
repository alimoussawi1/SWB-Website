import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Main from "./assets/mainbackground.png"; // Replace with your background image
import Privacy from "./components/Privacy";
import VideoSection from "./components/VideoComponents";
import PictureWithButton from "./components/PictureWithButton";
import Partner from "./components/Partner";
import Affordable from "./assets/affordable.png"
import PictureWithText from "./components/PictureWithText";



function Deliver() {
  return <h1>Deliver for Toters Page</h1>;
}

function Careers() {
  return <h1>Careers Page</h1>;
}

function Media() {
  return <h1>Media Updates Page</h1>;
}

function Dashboard() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Main})` }}
      >
        </div>
      
      <VideoSection />
    
      <div
        className="relative w-full h-[800px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Affordable})` }}
      >
        </div>
      <PictureWithButton />
    </div>
  );
}


function App() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      x: -200,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: 200,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Dashboard />
                </motion.div>
              }
            />
            <Route
              path="/partner"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                 <Partner/>
                </motion.div>
              }
            />
            <Route
              path="/deliver"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Deliver />
                </motion.div>
              }
            />
            <Route
              path="/careers"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Careers />
                </motion.div>
              }
            />
            <Route
              path="/privacy"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Privacy />
                </motion.div>
              }
            />
            <Route
              path="/media"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Media />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
