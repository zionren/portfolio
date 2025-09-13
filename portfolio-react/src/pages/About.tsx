import './About.css'

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Who am I?</h1>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/assets/pfp.jpg" alt="Adriaan M. Dimate Profile Photo" className="profile-photo" />
            </div>
            <div className="profile-info">
              <h2>Hello, I'm Adriaan M. Dimate</h2>
              <p className="role">Full Stack Developer & Future Airline Captain</p>
              <p className="bio">
                I'm an autistic developer with a love for creating beautiful, functional, and user-centered digital experiences.
                With a background in both frontend and backend development, I enjoy bringing ideas to life through clean,
                efficient code and thoughtful design.
                I also am aiming to become an airline captain, combining my passion for aviation with my technical skills,
                combined with my passion for flying and travelling, ensuring a smooth, pleasant, and lovely experience for users and passengers.
              </p>
              <div className="resume-download">
                <a href="/assets/resume.pdf" download className="btn btn-primary">
                  <i className="fas fa-download"></i>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section card">
          <h2><i className="fas fa-briefcase"></i> Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Data Encoder & Macro Programmer | Internship</h3>
                <p className="experience-company">ACE Medical Centre - Baypointe • 2025 - 2025</p>
                <p className="experience-description">
                  Interned about encoding patient data and created macros to improve encoding efficiency.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <h3>Data Encoder & Bookkeeper</h3>
                <p className="experience-company">TDA Car Rental • 2023 - Present</p>
                <p className="experience-description">
                  Created responsive web interfaces and improved user experience across multiple projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-graduation-cap"></i> Education</h3>
          <div className="education-item">
            <h4>Bachelor of Science in Computer Science</h4>
            <p className="school">Gordon College • 2023 - Present</p>
            <p>Focused on software engineering, algorithms, and data structures.</p>
          </div>
          <br />
          <div className="education-item">
            <h4>Bachelor of Science in Air Transportation (future)</h4>
            <p className="school">(unknown) • 2029 - 2034 (tentative)</p>
            <p>Focuses on flying and maintaining planes.</p>
          </div>
        </div>

        <div className="detail-section">
          <h3><i className="fas fa-heart"></i> Interests</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <i className="fas fa-code"></i>
              <span>Coding</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-plane"></i>
              <span>Travelling</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-camera"></i>
              <span>Photography</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-music"></i>
              <span>Music</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-book"></i>
              <span>Reading</span>
            </div>
            <div className="interest-item">
              <i className="fas fa-bed"></i>
              <span>Sleeping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About