function VisitingCard() {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "#1f2a33",
        border: "1px solid #2e3f4f",
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

      <h3 style={{ textAlign: "center" }}>Connect with us:</h3>
      <li><a> <img src="logo1.png" style={logoStyle}></img></a></li>

      <ul style={{ listStyle: "none", padding: 0, color: "black"}}>
        <li style={{ margin: "10px 0" }}>
          <a style={linkStyle} href="tel:+917838168975">📞 Call Me</a>
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
  width: "40px",
  height: "40px",
  objectFit: "contain",
  backgroundColor: "white",
  padding: "5px",
  borderRadius: "6px",
  display: "block",
  margin: "0 auto"   // ✅ centers the image
};


const linkStyle = {
  display: "block",
        backgroundColor: "#1f2a33",
        border: "1px solid #2e3f4f",
       borderRadius: "8px",
  padding: "10px",
  textDecoration: "none",
  fontWeight: "500",
  textAlign: "left"
};

export default VisitingCard;
