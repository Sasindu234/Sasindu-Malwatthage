(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function m(){const s=document.getElementById("header");s.innerHTML=`
    <div class="container header-container">
      <a href="#" class="logo">
        <span class="text-gradient">&lt;/&gt;</span> Sasindu Peiris
      </a>
      
      <button class="mobile-menu-btn" aria-label="Toggle menu">
        <i class="fas fa-bars"></i> &#9776; <!-- Unicode hamburger fallback -->
      </button>

      <nav class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link btn-secondary">Contact</a>
      </nav>
    </div>
  `,window.addEventListener("scroll",()=>{window.scrollY>50?(s.classList.add("scrolled"),s.classList.add("glass")):(s.classList.remove("scrolled"),s.classList.remove("glass"))});const n=s.querySelector(".mobile-menu-btn"),o=s.querySelector(".nav-links");n.addEventListener("click",()=>{o.classList.toggle("active")})}function v(){const s=document.getElementById("hero");s.innerHTML=`
    <div class="hero section">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-greeting">Hello, I'm Sasindu Peiris</span>
          <h1 class="hero-title">Building <span class="text-gradient">Digital Experiences</span> That Matter.</h1>
          <p class="hero-subtitle">Software Developer specializing in modern web apps, Java systems, and resilient code.</p>
          
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-block">
            <div class="code-content">
              <span class="line"><span class="keyword">class</span> <span class="function">Developer</span> {</span>
              <span class="line">&nbsp;&nbsp;<span class="keyword">constructor</span>() {</span>
              <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.name = <span class="string">"Sasindu Peiris"</span>;</span>
              <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span>.role = <span class="string">"Software Developer"</span>;</span>
              <span class="line">&nbsp;&nbsp;}</span>
              <span class="line"></span>
              <span class="line">&nbsp;&nbsp;<span class="function">code</span>() {</span>
              <span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> <span class="string">"Clean, Efficient, Scalable"</span>;</span>
              <span class="line">&nbsp;&nbsp;}</span>
              <span class="line">}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}const u=""+new URL("profile-C0dEr1Aa.jpg",import.meta.url).href;function g(){const s=document.getElementById("about");s.innerHTML=`
    <div class="about section">
      <div class="container about-content">
        <div class="about-image">
          <div class="profile-img-container" style="position: relative; width: 100%; max-width: 400px; margin: 0 auto;">
            <img src="${u}" alt="Sasindu Peiris" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5); object-fit: cover; aspect-ratio: 1/1;">
          </div>
        </div>
        
        <div class="about-text">
          <h2>About <span class="text-gradient">Me</span></h2>
          <p>
            I am a Computer Science graduate from Acadia University with a strong foundation in software development, databases, and APIs. My journey involves hands-on experience building real-world applications and co-owning a service-based business, "Ceylon Clean Co", where I managed everything from digital presence to operations.
          </p>
          <p>
            I combine technical expertise in Java, Python, and SQL with strong analytical thinking and adaptability. Currently seeking entry-level software developer roles to leverage my skills in a professional environment.
          </p>
          
          <div class="stats">
            <div class="stat-item">
              <h3>2025</h3>
              <p>Graduation Year</p>
            </div>
            <div class="stat-item">
              <h3>3.0</h3>
              <p>GPA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function h(){const s=document.getElementById("skills"),n=[{name:"Java",icon:"☕"},{name:"Python",icon:"🐍"},{name:"SQL / MySQL",icon:"🗄️"},{name:"HTML5",icon:"🌐"},{name:"CSS3",icon:"🎨"},{name:"JavaScript",icon:"⚡"},{name:"Git",icon:"📦"}],o=[{name:"VS Code",icon:"💻"},{name:"IntelliJ",icon:"🧠"},{name:"MySQL Workbench",icon:"🐬"}],t=[{name:"Analytical",icon:"🔍"},{name:"Adaptability",icon:"🔄"},{name:"Communication",icon:"💬"},{name:"Problem Solving",icon:"🧩"}],e=i=>i.map(a=>`
      <div class="skill-card">
        <div class="skill-icon">${a.icon}</div>
        <div class="skill-name">${a.name}</div>
      </div>
    `).join("");s.innerHTML=`
    <div class="skills section">
      <div class="container skills-container">
        <div class="skills-header">
          <h2>My <span class="text-gradient">Skills</span></h2>
          <p>Technologies and tools I work with.</p>
        </div>
        
        <div class="skills-category">
          <h3>Technical Skills</h3>
          <div class="skills-grid">
            ${e(n)}
          </div>
        </div>

        <div class="skills-category">
          <h3>Tools & Platforms</h3>
          <div class="skills-grid">
            ${e(o)}
          </div>
        </div>

        <div class="skills-category">
          <h3>Soft Skills</h3>
          <div class="skills-grid">
            ${e(t)}
          </div>
        </div>
      </div>
    </div>
  `}function b(){const s=document.getElementById("experience"),n=[{role:"IT & Digital Operations (Co-owner)",company:"Ceylon Clean Co",date:"2023 - Present",points:["Most recent ongoing project as my job.","Co-founded and run a service-based business partnership.","Handle end-to-end marketing, including brand positioning, digital presence, and customer outreach.","Designed, launched, and maintained the business website (CeylonCleanCo.ca).","Manage social media accounts, online marketing campaigns, and basic financial management."]},{role:"Residential Rehabilitation Worker",company:"Core Support Services, NS",date:"April 2025 - Present",points:["Developed strong problem-solving, documentation, and professional communication skills.","Worked collaboratively in a team while handling sensitive information and responsibilities."]},{role:"Stock Unloader Associate",company:"Walmart, New Minas, NS",date:"2023",points:["Demonstrated reliability, time management, and efficiency in a fast-paced environment."]}],o=t=>t.map(e=>`
      <div class="experience-item">
        <span class="experience-date">${e.date}</span>
        <h3 class="experience-title">${e.role}</h3>
        <p class="experience-company">${e.company}</p>
        <div class="experience-desc">
          <ul>
            ${e.points.map(i=>`<li>${i}</li>`).join("")}
          </ul>
        </div>
      </div>
    `).join("");s.innerHTML=`
    <div class="experience section">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
          <h2>Professional <span class="text-gradient">Experience</span></h2>
          <p>My journey in the tech and service industry.</p>
        </div>
        
        <div class="experience-list">
          ${o(n)}
        </div>
      </div>
    </div>
  `}function y(){const s=document.getElementById("projects"),n=[{id:1,title:"RideShare Application",desc:"An academic Capstone Project. A prototype application with user registration, ride matching, logic, and Google Maps API integration for real-time routing.",fullDesc:`The RideShare Application was a comprehensive Capstone project developed using Java and Object-Oriented Design principles. Key features include:
- User Authentication & Registration System.
- Sophisticated Ride Matching Algorithm based on location and preferences.
- Integration with Google Maps API for real-time routing and distance calculation.
- Clean, maintainable codebase designed for scalability.`,tags:["Java","Google Maps API","OOP","Prototype"],link:"https://github.com/Sasindu234",icon:"🚗"},{id:2,title:"Ceylon Clean Co Website",desc:"Official business website for a service-based company. Designed, launched, and maintained to improve brand visibility and customer outreach.",fullDesc:`As a co-owner of Ceylon Clean Co, I designed and developed the official business website to establish a digital presence. 
- Created a responsive, user-friendly interface.
- Implemented SEO best practices to increase local visibility.
- Integrated contact forms and service listings.
- Managed ongoing updates and performance optimization.`,tags:["Web Design","SEO","Digital Marketing","Business"],link:"https://ceyloncleanco.ca",icon:"✨"}],o=c=>c.map(l=>`
      <div class="project-card">
        <div class="project-image">
          ${l.icon}
        </div>
        <div class="project-content">
          <h3 class="project-title">${l.title}</h3>
          <p class="project-desc">${l.desc}</p>
          <div class="project-tags">
            ${l.tags.map(r=>`<span class="tag">${r}</span>`).join("")}
          </div>
          <div class="project-links">
            <button class="card-btn view-details-btn" data-id="${l.id}">View Details &rarr;</button>
          </div>
        </div>
      </div>
    `).join("");s.innerHTML=`
    <div class="projects section">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
          <h2>Featured <span class="text-gradient">Projects</span></h2>
          <p>Highlights from my academic and professional work.</p>
        </div>
        
        <div class="projects-grid">
          ${o(n)}
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
          <a href="https://github.com/Sasindu234" target="_blank" class="btn btn-outline">
            View More on GitHub <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Modal Structure -->
    <div id="project-modal" class="modal">
      <div class="modal-content glass">
        <span class="close-modal">&times;</span>
        <h2 id="modal-title">Project Title</h2>
        <div id="modal-body">
          <!-- Details injected here -->
        </div>
      </div>
    </div>
  `;const t=document.getElementById("project-modal"),e=document.getElementById("modal-title"),i=document.getElementById("modal-body"),a=document.querySelector(".close-modal");document.querySelectorAll(".view-details-btn").forEach(c=>{c.addEventListener("click",()=>{const l=parseInt(c.getAttribute("data-id")),r=n.find(d=>d.id===l);r&&(e.textContent=r.title,i.innerHTML=r.fullDesc.split(`
`).map(d=>`<p style="margin-bottom: 0.5rem;">${d}</p>`).join("")+`<br><a href="${r.link}" target="_blank" class="btn btn-primary" style="font-size: 0.9rem;">Visit Project / Repo</a>`,t.style.display="flex",setTimeout(()=>t.classList.add("show"),10))})}),a.addEventListener("click",()=>{t.classList.remove("show"),setTimeout(()=>t.style.display="none",300)}),window.addEventListener("click",c=>{c.target==t&&(t.classList.remove("show"),setTimeout(()=>t.style.display="none",300))})}function f(){const s=document.getElementById("education");s.innerHTML=`
    <div class="education section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
          <h2>Education & <span class="text-gradient">Certifications</span></h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <!-- Degree 1 -->
          <div class="glass" style="padding: 2rem; border-radius: 16px;">
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Bachelor of Applied Computer Science</h3>
            <p style="color: var(--accent-primary); font-weight: 500; margin-bottom: 1rem;">Software Development</p>
            <p style="color: var(--text-secondary);">Acadia University, Wolfville, NS</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Graduated: Dec 2025 | Final GPA: 3.0</p>
          </div>

          <!-- Degree 2 -->
          <div class="glass" style="padding: 2rem; border-radius: 16px;">
            <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Bachelor of Computer Science</h3>
            <p style="color: var(--accent-primary); font-weight: 500; margin-bottom: 1rem;">Years 1-2</p>
            <p style="color: var(--text-secondary);">American Education Center, Sri Lanka</p>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Northwood University Affiliated</p>
          </div>

          <!-- Certifications -->
          <div class="glass" style="padding: 2rem; border-radius: 16px; grid-column: 1 / -1;">
             <h3 style="color: var(--text-primary); margin-bottom: 1rem;">Certifications & Additional</h3>
             <ul style="color: var(--text-secondary); list-style: circle; padding-left: 1.5rem; display: grid; gap: 0.5rem;">
                <li>Currently studying for CompTIA Network+ and Security+</li>
                <li>First Aid & CPR (Adult / Child / Infant)</li>
                <li>Valid Driver’s License</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  `}function w(){const s=document.getElementById("footer");s.innerHTML=`
    <div id="contact" class="footer section">
      <div class="container">
        <div class="contact-header">
          <h2>Get In <span class="text-gradient">Touch</span></h2>
        </div>
        
        <div class="contact-grid">
          <div class="contact-item">
            <h3 class="contact-label">Phone</h3>
            <p class="contact-value">902-990-0352</p>
          </div>
          
          <div class="contact-item">
            <h3 class="contact-label">Email</h3>
            <a href="mailto:malwaththa64@gmail.com" class="contact-link">malwaththa64@gmail.com</a>
          </div>
          
          <div class="contact-item">
            <h3 class="contact-label">Location</h3>
            <p class="contact-value">614 Main St, Wolfville, NS, B4P 1E8</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Sasindu Peiris. All rights reserved.</p>
          <div class="socials">
            <a href="https://github.com/Sasindu234" target="_blank" class="contact-link"><i class="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{m(),v(),g(),h(),b(),y(),f(),w();const s={root:null,rootMargin:"0px",threshold:.1},n=new IntersectionObserver((e,i)=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("visible"),i.unobserve(a.target))})},s);document.querySelectorAll(".section").forEach(e=>{e.style.opacity="0",e.style.transform="translateY(20px)",e.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",n.observe(e),e.classList.add});const o=()=>{document.querySelectorAll(".section").forEach(e=>{const i=window.innerHeight;e.getBoundingClientRect().top<i-150&&(e.style.opacity="1",e.style.transform="translateY(0)")})};window.addEventListener("scroll",o),o();const t=document.createElement("button");t.id="scroll-top-btn",t.innerHTML="&uarr;",t.setAttribute("aria-label","Scroll to top"),document.body.appendChild(t),window.addEventListener("scroll",()=>{window.scrollY>300?t.classList.add("visible"):t.classList.remove("visible")}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
