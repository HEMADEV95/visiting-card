function VisitingCard() {
  return (
    <div
      style={{
        marginTop: "50px",
backgroundColor: "#33526b",
  border: "1px solid #356593",
        borderRadius: "14px",
        padding: "22px",
        width: "320px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* Logo */}
      <img src="logo1.png" alt="Endorse Industries Logo" style={logoStyle} />

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="tel:+917838168975">📞 Call</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="mailto:endorseindustries@gmail.com">📧 Email</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="https://wa.me/917838168975">💬 WhatsApp</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="https://www.instagram.com/endorseindustries">📸 Instagram</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="https://www.facebook.com/profile.php?id=61583425311578">📘 Facebook</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="https://www.youtube.com/@endorseindustries">▶️ YouTube</a>
        </li>
      </ul>
    </div>
  );
}

const logoStyle = {
  width: "80px",
  height: "80px",
  backgroundColor: "#33526b",
  border: "1px solid #356593",
  objectFit: "contain",
  padding: "5px",
  borderRadius: "6px",
  display: "block",
  margin: "0 auto"
};

const linkStyle = {
  display: "block",
backgroundColor: "#33526b",
  border: "1px solid #356593",
  borderRadius: "8px",
  padding: "10px",
  textDecoration: "none",
  fontWeight: "500",
  textAlign: "left",
  color: "#ffffff" // ✅ fixes blue font
};

export default VisitingCard;
