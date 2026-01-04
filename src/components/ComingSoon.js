import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = ({ pageTitle = "Coming Soon" }) => {
  const styles = {
    container: {
      minHeight: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f5f7fa 0%, #EB0589 100%)",
      margin: "2rem 0",
    },
    content: {
      textAlign: "center",
      background: "white",
      padding: "60px 40px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      width: "90%",
    },
    heading: {
      fontFamily: "oswald, sans-serif",
      color: "#EB0589",
      fontSize: "3em",
      marginTop: "10px",
      marginBottom: "20px",
      fontWeight: "700",
      letterSpacing: "2px",
    },
    text: {
      fontFamily: "oswald, sans-serif",
      color: "#b02a5b",
      fontSize: "1.2em",
      lineHeight: "1.6",
      marginBottom: "0",
    },
    homeLink: {
      display: "inline-block",
      padding: "12px 24px",
      backgroundColor: "#d63384",
      color: "white",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: "500",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>{pageTitle}</h1>
        <p style={styles.text}>
          We're working hard to bring you this information. Stay tuned!
        </p>
        <br />
        <br />
        <Link
          to="/"
          style={styles.homeLink}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#b02a5b")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#d63384")}
        >
          ← Back to Birth Justice Warriors Home Page
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
