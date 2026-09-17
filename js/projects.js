/**
 * Projects Data & Modal Architecture Viewer
 * Cherukuri V V M Subhash Portfolio
 */

const projectsData = {
  "ai-support": {
    title: "AI Customer Support Ticket Management System",
    subtitle: "Enterprise-grade intelligent ticketing & automated triage system",
    badge: "Live on Render",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Groq LLM", "Spring AI", "Thymeleaf"],
    summary: "A robust, high-performance customer support ecosystem combining Spring Boot enterprise architecture with Groq's ultra-low-latency LLM inference. Automatically categorizes incoming tickets, calculates urgency & sentiment metrics, and dispatches tickets to appropriate support tiers.",
    highlights: [
      "Automated ticket categorization, priority classification, and sentiment analysis powered by Groq LLM and Spring AI.",
      "Granular role-based access control (RBAC) supporting Admin, Support Agents, and Customers using Spring Security.",
      "Real-time ticket conversational threads with status updates, agent assignment workflows, and audit logging.",
      "Comprehensive Admin analytics dashboard providing visibility into SLA metrics, agent response times, and customer sentiment trends.",
      "Optimized relational schema on PostgreSQL with connection pooling (HikariCP) and indexed queries for rapid retrieval under heavy load."
    ],
    architecture: {
      client: "Modular Thymeleaf templates with real-time feedback & status badges",
      backend: "Spring Boot 3.x, Spring AI, Spring Security, RESTful endpoints",
      aiEngine: "Groq LLM API with optimized prompt chaining for high-speed triage",
      database: "PostgreSQL with connection pooling & transactional integrity",
      deployment: "Render Cloud Hosting (Live Production Service)"
    },
    github: "https://github.com/subhashcherukuri/ai-customer-support-ticket-system",
    demo: "https://ai-customer-support-ticket-system-bbr5.onrender.com"
  },
  "edu-enroll": {
    title: "EduEnroll – Online Student Course Registration Portal",
    subtitle: "Full-Stack academic registration and student lifecycle portal",
    badge: "Live on Render",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Thymeleaf", "Spring Security"],
    summary: "A production-ready course enrollment management system that digitizes the entire academic registration workflow, eliminating scheduling bottlenecks, enforcing prerequisite validation, and securing administrative operations.",
    highlights: [
      "Engineered an end-to-end course catalog, credit tracking, and instant enrollment verification workflow.",
      "Implemented multi-tenant role authorization: Admin (course creation, seat quotas, approvals) and Student (browsing, cart, add/drop).",
      "Full suite of CRUD operations for faculty, courses, registrations, and student profiles with input validation.",
      "Optimized MySQL relational queries utilizing Spring Data JPA, Hibernate caching, and lazy loading strategies to avoid N+1 query overhead.",
      "Session management, CSRF protection, and BCrypt password hashing implemented via Spring Security."
    ],
    architecture: {
      client: "Responsive Thymeleaf templates, custom CSS design system, intuitive tables",
      backend: "Spring Boot, Spring Data JPA, Hibernate ORM layer",
      security: "Spring Security with BCrypt hashing and custom authentication handlers",
      database: "MySQL 8 with normalized relational tables and foreign-key constraints",
      deployment: "Render Cloud Hosting (Live Production Service)"
    },
    github: "https://github.com/subhashcherukuri/eduenroll-student-course-registration",
    demo: "https://eduenroll-student-course-registration.onrender.com"
  },
  "ai-archaeology": {
    title: "AI-Driven Archaeological Site Mapping",
    subtitle: "Infosys SpringBoard Artificial Intelligence Virtual Internship Project",
    badge: "Infosys SpringBoard ML",
    tags: ["Python", "Machine Learning", "Satellite Imagery", "Drone Datasets", "Computer Vision", "Model Evaluation"],
    summary: "An AI-powered computer vision research initiative developed during the Infosys SpringBoard AI Internship to detect, delineate, and map hidden archaeological ruins from high-resolution satellite and drone multispectral imagery.",
    highlights: [
      "Acquired, filtered, annotated, and preprocessed multi-band satellite and drone topographical datasets for AI model training.",
      "Implemented image augmentation and normalization pipelines to enhance detection of faint surface anomalies.",
      "Trained and evaluated deep learning / computer vision models, comparing IoU and precision across various architectures.",
      "Participated in daily technical scrums and architecture reviews with industry mentors at Infosys SpringBoard."
    ],
    architecture: {
      pipeline: "Data Ingestion -> Cleaning & Augmentation -> Feature Extraction -> Model Training -> Evaluation",
      frameworks: "Python, OpenCV, NumPy, Scikit-Learn, Deep Learning Models",
      outcomes: "Accelerated site identification efficiency with automated aerial bounding boxes",
      repository: "Official Infosys SpringBoard Branch: springboardmentor54158a / subhash"
    },
    github: "https://github.com/springboardmentor54158a/AIDriven-Archaeological-Site-Mapping/tree/subhash",
    demo: null
  }
};

/**
 * Open Project Details Dialog Modal
 */
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('projectModalContent');
  if (!modal || !modalContent) return;

  const tagsHtml = project.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join('');
  const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');

  let archHtml = '';
  if (project.architecture) {
    archHtml = `
      <div style="margin-top: 1.5rem; background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 1rem; margin-bottom: 0.75rem; color: var(--accent-primary); display: flex; align-items: center; gap: 0.5rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
          Architecture & Engineering Breakdown
        </h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem;">
          ${Object.entries(project.architecture).map(([key, val]) => `
            <div><strong style="text-transform: capitalize; color: var(--text-primary);">${key.replace(/([A-Z])/g, ' $1')}:</strong> <span style="color: var(--text-secondary);">${val}</span></div>
          `).join('')}
        </div>
      </div>
    `;
  }

  let actionBtnsHtml = `
    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>Open GitHub Repository</span>
    </a>
  `;

  if (project.demo) {
    actionBtnsHtml += `
      <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        <span>Open Live Demo</span>
      </a>
    `;
  }

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="project-overlay-badge" style="position: static;">${project.badge}</span>
      </div>
      <div class="project-tech-tags">${tagsHtml}</div>
      <h3 style="font-size: 1.6rem; margin-bottom: 0.4rem;">${project.title}</h3>
      <p style="color: var(--text-secondary); font-size: 1rem; margin-bottom: 1.25rem;">${project.subtitle}</p>
      <p style="color: var(--text-primary); line-height: 1.6; margin-bottom: 1.5rem;">${project.summary}</p>
      
      <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Architectural Highlights:</h4>
      <ul class="project-highlights" style="margin-bottom: 1.25rem;">${highlightsHtml}</ul>
      
      ${archHtml}
      
      <div style="display: flex; gap: 1rem; margin-top: 1.75rem; flex-wrap: wrap;">
        ${actionBtnsHtml}
      </div>
    </div>
  `;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', 'true');
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    if (typeof modal.close === 'function') {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
  }
}
