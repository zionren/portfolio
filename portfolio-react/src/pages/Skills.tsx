import './Skills.css'

const Skills = () => {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.1
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star star filled"></i>)
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt star half"></i>)
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star star empty"></i>)
    }
    
    return stars
  }

  const skillsData = {
    frameworks: [
      { name: 'Vanilla', rating: 4.1 },
      { name: 'React', rating: 3.6 },
      { name: 'Angular', rating: 3.3 }
    ],
    technologies: [
      { name: 'Git/GitHub', rating: 4.5 },
      { name: 'Supabase', rating: 4.4 },
      { name: 'TailwindCSS', rating: 3.0 },
      { name: 'Appwrite', rating: 1.1 }
    ],
    languages: [
      { name: 'MySQL', rating: 4.5 },
      { name: 'PostgreSQL', rating: 4.4 },
      { name: 'HTML5/CSS3', rating: 4.3 },
      { name: 'JavaScript', rating: 4.1 },
      { name: 'PHP', rating: 4.1 },
      { name: 'C', rating: 3.9 },
      { name: 'C++', rating: 3.8 },
      { name: 'TypeScript', rating: 3.4 },
      { name: 'Python', rating: 3.2 },
      { name: 'Java', rating: 3.1 }
    ]
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Skills</h1>
        <p>Technologies and expertise rated on a 5-star system
          WARNING: RATINGS ARE SUBJECT TO CHANGE, THESE ARE JUST PLACEHOLDERS!
        </p>
      </div>
      
      <div className="skills-content">
        <div className="skills-section">
          <h2><i className="fas fa-layer-group"></i> Frameworks</h2>
          <div className="skills-grid">
            {skillsData.frameworks.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-rating">{skill.rating}</span>
                </div>
                <div className="skill-stars">
                  {renderStars(skill.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2><i className="fas fa-cogs"></i> Technologies</h2>
          <div className="skills-grid">
            {skillsData.technologies.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-rating">{skill.rating}</span>
                </div>
                <div className="skill-stars">
                  {renderStars(skill.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2><i className="fas fa-code"></i> Languages</h2>
          <div className="skills-grid">
            {skillsData.languages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-rating">{skill.rating}</span>
                </div>
                <div className="skill-stars">
                  {renderStars(skill.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills