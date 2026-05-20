* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Poppins', system-ui, -apple-system, 'Roboto', sans-serif;
}

/* ========== GLOBAL & BACKGROUND ========== */
body {
  background: linear-gradient(135deg, #0b2b3b 0%, #1c5a6a 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* background image overlay (homepage style) */
.home-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1600');
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
  z-index: -2;
}

.home-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: brightness(0.9);
  z-index: -1;
}

/* main content container */
.app-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem 3rem;
  width: 100%;
}

/* ========== NAVBAR styles ========== */
.navbar {
  background: rgba(0, 20, 30, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 60px;
  padding: 0.8rem 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,240,0.2);
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.logo-icon {
  font-size: 1.9rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.site-name {
  font-size: 1.6rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFE6B0, #FFB347);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 1.8rem;
  align-items: center;
  flex-wrap: wrap;
}

.nav-links a {
  color: #f0f3f5;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: 0.2s;
  padding: 0.3rem 0;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover {
  border-bottom-color: #FFB347;
  color: #FFE0A3;
}

/* search area (only visible on home page) */
.search-area {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  background: rgba(255,255,245,0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  backdrop-filter: blur(4px);
}

.search-area input {
  background: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 40px;
  width: 220px;
  font-size: 0.9rem;
  outline: none;
  font-weight: 500;
}

.search-area button {
  background: #FFB347;
  border: none;
  padding: 0.5rem 1.1rem;
  border-radius: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  color: #1e2f3a;
  font-size: 0.85rem;
}

.search-area button:last-child {
  background: #c9d1d9;
  color: #1e2f3a;
}

.search-area button:hover {
  background: #ff9f1a;
  transform: scale(0.97);
}

/* Main content card style (home, about, contact) */
.page-card {
  background: rgba(255, 255, 245, 0.92);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  padding: 2rem 2rem;
  box-shadow: 0 25px 40px -12px rgba(0,0,0,0.35);
  border: 1px solid rgba(255,215,150,0.6);
  transition: all 0.2s;
}

/* Home intro */
.hero-intro {
  max-width: 700px;
}

.hero-intro h1 {
  font-size: 3.2rem;
  color: #1f3e48;
  margin-bottom: 1rem;
}

.hero-intro p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #1f2e36;
  margin-bottom: 2rem;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-icons a {
  font-size: 1.8rem;
  color: #2c5a6e;
  transition: 0.2s;
  text-decoration: none;
}

.social-icons a:hover {
  color: #FFB347;
  transform: translateY(-4px);
}

/* results grid (Task 8) */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.result-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 12px 20px -10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}

.result-card:hover {
  transform: translateY(-6px);
}

.result-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.result-info {
  padding: 1.2rem;
}

.result-info h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #0f3b48;
}

.result-info p {
  color: #2c3e44;
  line-height: 1.4;
}

.time-badge {
  margin-top: 12px;
  font-size: 0.8rem;
  background: #eef2f3;
  display: inline-block;
  padding: 0.2rem 0.7rem;
  border-radius: 30px;
  font-weight: 600;
  color: #c4450c;
}

/* about team section */
.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
}

.team-card {
  background: rgba(255,255,245,0.95);
  border-radius: 2rem;
  padding: 1.5rem;
  width: 220px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.team-card h4 {
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}

.team-role {
  color: #b45f1b;
  font-weight: 600;
}

/* contact form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  margin-top: 1rem;
}

.contact-form input, .contact-form textarea {
  padding: 0.9rem 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #fffef7;
}

.contact-form textarea {
  min-height: 130px;
  resize: vertical;
}

.contact-form button {
  width: fit-content;
  background: #FFB347;
  border: none;
  padding: 0.8rem 2.2rem;
  border-radius: 40px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
}

.contact-form button:hover {
  background: #ff9f1a;
  transform: scale(0.98);
}

/* responsiveness */
@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
    border-radius: 2rem;
  }
  .nav-links {
    justify-content: center;
  }
  .search-area {
    justify-content: center;
  }
  .app-container {
    padding: 1rem;
  }
  .hero-intro h1 {
    font-size: 2.2rem;
  }
}

.hidden-page {
  display: none;
}

.active-page {
  display: block;
}

footer {
  margin-top: auto;
  text-align: center;
  padding: 1.5rem;
  color: rgba(255,240,210,0.8);
  font-size: 0.8rem;
}
