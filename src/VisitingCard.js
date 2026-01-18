function VisitingCard() {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "black",
        border: "2px solid gray",
        borderRadius: "12px",
        padding: "20px",
        width: "320px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
       color: "aqua"
      }}
    >
      <h1 style={{ textAlign: "center" }}>Endorse Industries</h1>

      <h3 style={{ textAlign: "center" }}>Connect with us:</h3>
      <li> <img src="logo.png" alt="Endorse Industries Logo"  style={logoStyle}></img></li>

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
  border: "1px solid gray",
  backgroundColor: "black",
  borderRadius: "8px",
  padding: "10px",
  textDecoration: "none",
  color: "aqua",
  fontWeight: "500",
  textAlign: "left"
};

export default VisitingCard;
