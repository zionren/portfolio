import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Portfolio</h1>
        <p>All my current projects so far.</p>
      </div>
      
      <div className="portfolio-content">
        <div className="portfolio-grid">
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-globe"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://camflea.vercel.app/Login_page.html" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>E-Commerce Platform (Group Project - CSC221)</h3>
              <p>A full-stack e-commerce solution with payment integration and admin dashboard.</p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Practicum vlogsite that made sir loudel cry */}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://practicumoneblogsite.vercel.app" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/zionren/OJTblogsite" target="_blank" className="project-link" aria-label="View Code" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Vlogsite</h3>
              <p>Practicum vlogsite with data visualization dashboard, containing interactive charts and reports.
                Also made sir loudel cry.
              </p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/*rp hood attendance system for a now-dissolved hood*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://attendance-tracking-self.vercel.app/" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>RPW Hood Attendance System</h3>
              <p>Attendance System for the now-dissolved Gazelvouer hood in RPW</p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
          </div>

          {/*poem selectors for an ex fiancee, although I should no longer put them in here, some of my best UI/UX works are here.*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-palette"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://poemselections.netlify.app/" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Poem Selectors</h3>
              <p>Poem selection panes that I did for my now ex-fiancee. All displayed on the website, just click to select.
                Although these should no longer be here, some of my best UI/UX works are here.
                Will be edited in the future to remove names.
              </p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Trigonometric Operations</span>
              </div>
            </div>
          </div>

          {/*anonymous corkboard system for gazelvouer monthsary 2*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-blog"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://corkboardnew.vercel.app/" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/zionren/corkboard" target="_blank" className="project-link" aria-label="View Code" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Anonymous Corkboard</h3>
              <p>Simple anonymous corkboard system that I used for Gazelvouer Monthsary 2</p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">Node.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Supabase</span>
              </div>
            </div>
          </div>

          {/*rp hood council logout system thats barely working even*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://arcanumlogout.vercel.app/" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>RP Log Out System</h3>
              <p>crapping myself up with a logout system for rp hood council members of a specific hood that needs more fixing and is barely working at all</p>
              <div className="project-tags">
                <span className="tag">Vanilla</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
              </div>
            </div>
          </div>

          {/*new set of poem selectors*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Poem Selectors v2</h3>
              <p>Poem selectors again, different ones, but this time, will be edited in the future.</p>
              <div className="project-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
          </div>

          {/*blogsite api i randomly made myself*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Blogsite API</h3>
              <p>Backend only API using Vanilla PHP and MySQL inside XAMPP, currently still being fixed.</p>
              <div className="project-tags">
                <span className="tag">Vanilla PHP</span>
                <span className="tag">MySQL</span>
              </div>
            </div>
          </div>

          {/*i care center website*/}
          <div className="project-card" data-category="web">
            <div className="project-image">
              <div className="image-placeholder">
                <i className="fas fa-gamepad"></i>
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a href="#" target="_blank" className="project-link" aria-label="View Live" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#" className="project-link" aria-label="View Code">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Church website</h3>
              <p>Website for my church where I am a part of the media team.</p>
              <div className="project-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">Node.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Portfolio