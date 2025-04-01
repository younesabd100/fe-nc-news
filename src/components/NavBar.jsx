export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          NC-NEWS
        </a>
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/articles" className="nav-link">
          Articles
        </a>
        <a href="/topics" className="nav-link">
          Topics
        </a>
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-link">
          Profile
        </a>
        <button className="login-btn">Log In</button>
      </div>
    </nav>
  );
}
