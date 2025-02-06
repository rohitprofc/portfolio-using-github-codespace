import React from "react";

const educationList = [
  {
    title: "Bachelor's Degree in AI and DS",
    description: "Seshadri Rao Gudlavalleru Engineering College",
  },
  {
    title: "Associate Degree in MPC",
    description: "Aditya Junior College",
  },
  {
    title: "High School Degree",
    description: "Sri Chaitanya Techno School",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center", margin: "0 0 2rem 0" }}>Education</h2>

      <div
        style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 0",
        }}
      >
        {/* Vertical Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "2px",
            backgroundColor: "#88c0d0",
            height: "100%",
            top: "0",
          }}
        ></div>

        {educationList.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              minHeight: "120px",
              padding: "10px 0",
            }}
          >
            {/* Timeline Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "24px",
                transform: "translateX(-50%)",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#88c0d0",
                zIndex: 2,
                boxShadow: "0 0 0 4px white, 0 2px 4px rgba(0,0,0,0.1)",
              }}
            ></div>

            {/* Content Card */}
            <div
              style={{
                position: "relative",
                width: "calc(50% - 40px)",
                marginLeft: index % 2 === 0 ? "0" : "50%",
                marginRight: index % 2 === 0 ? "50%" : "0",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                // Arrow pointer
                "::after": {
                  content: '""',
                  position: "absolute",
                  top: "24px",
                  right: index % 2 === 0 ? "-8px" : "auto",
                  left: index % 2 !== 0 ? "-8px" : "auto",
                  width: "0",
                  height: "0",
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeft: index % 2 === 0 ? "8px solid white" : "none",
                  borderRight: index % 2 !== 0 ? "8px solid white" : "none",
                },
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#2d3748",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  color: "#4a5568",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
