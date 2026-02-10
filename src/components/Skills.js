export function renderSkills() {
    const skillsSection = document.getElementById('skills');

    const technicalSkills = [
        { name: 'Java', icon: '☕' }, // Using emoji as placeholder for icons
        { name: 'Python', icon: '🐍' },
        { name: 'SQL / MySQL', icon: '🗄️' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'Git', icon: '📦' }
    ];

    const tools = [
        { name: 'VS Code', icon: '💻' },
        { name: 'IntelliJ', icon: '🧠' },
        { name: 'MySQL Workbench', icon: '🐬' }
    ];

    const softSkills = [
        { name: 'Analytical', icon: '🔍' },
        { name: 'Adaptability', icon: '🔄' },
        { name: 'Communication', icon: '💬' },
        { name: 'Problem Solving', icon: '🧩' }
    ];

    const generateGrid = (skills) => {
        return skills.map(skill => `
      <div class="skill-card">
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
      </div>
    `).join('');
    };

    skillsSection.innerHTML = `
    <div class="skills section">
      <div class="container skills-container">
        <div class="skills-header">
          <h2>My <span class="text-gradient">Skills</span></h2>
          <p>Technologies and tools I work with.</p>
        </div>
        
        <div class="skills-category">
          <h3>Technical Skills</h3>
          <div class="skills-grid">
            ${generateGrid(technicalSkills)}
          </div>
        </div>

        <div class="skills-category">
          <h3>Tools & Platforms</h3>
          <div class="skills-grid">
            ${generateGrid(tools)}
          </div>
        </div>

        <div class="skills-category">
          <h3>Soft Skills</h3>
          <div class="skills-grid">
            ${generateGrid(softSkills)}
          </div>
        </div>
      </div>
    </div>
  `;
}
