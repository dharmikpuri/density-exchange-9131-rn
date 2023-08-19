import React from "react";
import { motion } from "framer-motion";
const Carousel = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGjAl8Fdvob4_es5wcrG_JgpFL4UAJkB6uIo8v3P1D2rkt81aZ)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        position: "relative",
        width: "90%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "0 50px",
        }}
      >
        <div style={{ marginLeft: "5px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2}}
            style={{
              fontSize: "2xl",
              fontWeight: "bold",
            }}
          >
            <h1 style={{ fontSize: "2rem" }}>Master of your</h1>
            <h1 style={{ fontSize: "2rem" }}>life by mastering</h1>
            <h1 style={{ fontSize: "2rem" }}>your emotions</h1>
          </motion.div>


          <div style={{ marginTop: "10px" }}>
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.2}}
               
              style={{
                width: "200px",
                height: "50px",
                fontSize: "20px",
                gap:"5px",
                display:"flex",
                backgroundColor: "white",
                padding: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin:"10px"
              
              }}
            >
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
               <p>⭐ </p>
            </motion.div>
          </div>

          <motion.div style={{ marginTop: "10px" }}
             className="box"
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button
          
           
              style={{
              
                fontSize:"2xl",
                  marginLeft:"10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://image.pitchbook.com/zvmweLruf7H3H5ofy1ppunth1Wx1634111865055_200x200"
                alt="Apple Store"
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Apple Store
            </button>
          </motion.div>
        </div>

        <motion.div
         className="box"
         animate={{
           scale: [0.5, 1, 1, 0.5, 0.5],
           rotate: [0, 0, 180, 180, 0],
           borderRadius: ["0%", "0%", "50%", "50%", "0%"]
         }}
         transition={{
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
           repeat: 2,
           repeatDelay: 1
         }}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIzYu2wTohQR_9NkrcgL8CDMIjuluDurPsxquOlXVdXKJ_Aggl"
            alt="Mobile"
            style={{
              width: "300px",
              height: "300px",
              marginLeft: "4px",
             
             
              animation: "fade-in 1s 0.5s forwards",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;