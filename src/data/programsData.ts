export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  duration: string;
  schedule: string;
  mode: string;
  cost: string;
  badge: string;
  image: string;
  skills: string[];
  curriculum: {
    moduleTitle: string;
    topics: string[];
  }[];
  outcomes: string[];
  eligibility: string[];
}

export const programsData: Program[] = [
  {
    id: "tech-skills",
    slug: "technical-skills",
    title: "IT Technical Skills Development",
    image: "/images/programs/technical-skills.jpg",
    shortDescription: "Comprehensive, industry-aligned technical training in modern programming, web development, databases, and cloud fundamentals.",
    fullDescription: "Designed to take learners from basic computer literacy to building production-ready applications. The curriculum reflects real-world engineering standards demanded by modern technology firms in Chennai and across India.",
    targetAudience: "Underprivileged students, college dropouts, and aspiring developers with limited access to formal IT coaching.",
    duration: "6 Months (Full-Time / Hybrid)",
    schedule: "Monday to Friday, 9:30 AM - 1:30 PM",
    mode: "Classroom Lab & Hybrid Online",
    cost: "100% Free of Cost",
    badge: "Core Engineering Track",
    skills: [
      "Computer & Internet Fundamentals",
      "Python & Java Object-Oriented Programming",
      "HTML5, CSS3 & Responsive Web Design",
      "JavaScript & Frontend Framework Basics",
      "Relational Databases (SQL & PostgreSQL)",
      "Cloud Computing & DevOps Basics",
      "Cybersecurity & Online Safety Hygiene"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Foundations of Computing & Web",
        topics: [
          "Computer architecture & operating system fundamentals",
          "Command line interface (CLI) and Git version control",
          "HTML5 semantic layout, modern CSS styling and responsive grids"
        ]
      },
      {
        moduleTitle: "Module 2: Programming Fundamentals (Python & Java)",
        topics: [
          "Data structures, control flows, and functional programming",
          "Object-oriented design patterns and modular codebases",
          "Algorithm problem-solving and debugging techniques"
        ]
      },
      {
        moduleTitle: "Module 3: Database Engineering & API Integration",
        topics: [
          "Relational database design, normalisation, and complex SQL queries",
          "Building RESTful APIs and connecting backends to client apps",
          "Authentication, security standards, and CRUD operations"
        ]
      },
      {
        moduleTitle: "Module 4: Cloud Infrastructure & Capstone Deployment",
        topics: [
          "Introduction to Cloud Hosting (AWS / DigitalOcean) and CI/CD basics",
          "Container fundamentals and web server deployment",
          "End-to-end full-stack capstone project hosted on live domains"
        ]
      }
    ],
    outcomes: [
      "Proficiency in developing and deploying functional web applications",
      "Verified GitHub project portfolio with real-world repositories",
      "Direct eligibility for junior developer and QA engineering interviews"
    ],
    eligibility: [
      "Passed 12th Standard or pursuing / completed Diploma / Degree",
      "Annual family income within verified underprivileged threshold",
      "Demonstrated passion and commitment to complete the full 6-month coursework"
    ]
  },
  {
    id: "soft-skills",
    slug: "soft-skills",
    title: "Soft Skills & Professional Communication",
    image: "/images/programs/soft-skills.jpg",
    shortDescription: "Essential workplace skills covering business communication, emotional intelligence, collaborative teamwork, and leadership.",
    fullDescription: "Technical excellence must be paired with clear communication and personal confidence. This program equips first-generation learners to communicate effectively, navigate professional workplaces, and present ideas assertively.",
    targetAudience: "Students preparing for corporate campus placements and first-time job seekers.",
    duration: "8 Weeks (Part-Time)",
    schedule: "3 Days/Week, 2 Hours per Session",
    mode: "In-Person Interactive Workshops",
    cost: "100% Free of Cost",
    badge: "Workplace Readiness",
    skills: [
      "Verbal & Written Business English",
      "Collaborative Team Dynamics",
      "Time Management & Prioritisation",
      "Emotional Intelligence & Conflict Resolution",
      "Leadership & Taking Initiative",
      "Public Speaking & Presentation Skills"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Professional Communication",
        topics: [
          "Clear spoken English for workplace contexts",
          "Professional email writing, documentation, and reporting",
          "Active listening and non-verbal communication cues"
        ]
      },
      {
        moduleTitle: "Module 2: Workplace Collaboration & Ethics",
        topics: [
          "Cross-functional team coordination and consensus building",
          "Professional ethics, accountability, and time discipline",
          "Managing work pressure and constructive feedback reception"
        ]
      },
      {
        moduleTitle: "Module 3: Public Speaking & Pitching",
        topics: [
          "Slide deck structuring and storytelling principles",
          "Overcoming stage anxiety and delivering technical presentations",
          "Interactive group discussions and impromptu debates"
        ]
      }
    ],
    outcomes: [
      "Confidence in expressing technical solutions in English",
      "Ability to handle group discussions and team presentations",
      "Strong professional etiquette suitable for corporate IT firms"
    ],
    eligibility: [
      "Open to all enrolled Addithalam students and affiliated community learners",
      "Basic understanding of conversational English"
    ]
  },
  {
    id: "mentorship",
    slug: "mentorship",
    title: "1-on-1 Industry Mentorship Program",
    image: "/images/programs/mentorship.jpg",
    shortDescription: "Personalized guidance pairing each student with an experienced software engineer or IT leader from leading tech enterprises.",
    fullDescription: "Navigating a career in technology requires insights that textbooks cannot provide. Our mentorship track pairs students one-on-one with seasoned professionals who provide code reviews, career path guidance, and emotional support.",
    targetAudience: "Advanced learners in their final phase of technical training.",
    duration: "12 Weeks (Bi-Weekly Touchpoints)",
    schedule: "Flexible Weekend & Evening Mentoring Calls",
    mode: "Online 1-on-1 & Quarterly In-Person Meetups",
    cost: "100% Free of Cost",
    badge: "Individualized Guidance",
    skills: [
      "Industry Code Review & Architectural Standards",
      "Career Roadmap Strategy",
      "Real-world Technical Problem Solving",
      "Networking & Professional Branding",
      "Confidence Building & Impostor Syndrome Management"
    ],
    curriculum: [
      {
        moduleTitle: "Phase 1: Diagnostic Assessment & Goal Setting",
        topics: [
          "Individual skill audit and career aspiration mapping",
          "Setting structured 90-day development milestones",
          "Establishing recurring check-in rhythms and communication channels"
        ]
      },
      {
        moduleTitle: "Phase 2: Project Mentorship & Code Standards",
        topics: [
          "Bi-weekly code reviews against industry cleanliness standards",
          "Architecture reviews and optimization recommendations",
          "Simulated sprint planning and Agile task management"
        ]
      },
      {
        moduleTitle: "Phase 3: Career Navigation & Transition",
        topics: [
          "Resume tuning and portfolio presentation to hiring managers",
          "Personalized interview simulation with direct feedback",
          "Ongoing guidance through the job offer evaluation phase"
        ]
      }
    ],
    outcomes: [
      "Direct connection to a senior industry mentor",
      "Refined code quality matching enterprise expectations",
      "Actionable roadmap for continuous professional growth"
    ],
    eligibility: [
      "Must have completed at least 50% of the Technical Skills curriculum",
      "Consistent attendance and active participation in projects"
    ]
  },
  {
    id: "career-guidance",
    slug: "career-guidance",
    title: "Career Guidance & Placement Preparation",
    image: "/images/programs/career-guidance.jpg",
    shortDescription: "Targeted support for resume crafting, technical interview simulations, HR interview readiness, and job application strategy.",
    fullDescription: "We bridge the gap between skill acquisition and formal employment. Our placement readiness track provides thorough interview simulations, resume engineering, and direct connections to hiring partners.",
    targetAudience: "Graduating students and job-seeking candidates.",
    duration: "6 Weeks Intensive",
    schedule: "Saturday & Sunday Workshops",
    mode: "In-Person Classroom & Mock Labs",
    cost: "100% Free of Cost",
    badge: "Placement Readiness",
    skills: [
      "Technical Resume Optimization",
      "LinkedIn & GitHub Profile Branding",
      "Data Structures & Algorithms Interview Drills",
      "Behavioral & HR Question Preparation",
      "Job Portal Navigation & Salary Negotiation"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Professional Branding & Resume Crafting",
        topics: [
          "Structuring ATS-compliant resumes with quantifiable project impacts",
          "Crafting professional LinkedIn profiles and GitHub READMEs",
          "Creating impactful video introductions and portfolio summaries"
        ]
      },
      {
        moduleTitle: "Module 2: Technical Interview Simulation",
        topics: [
          "Live coding whiteboard challenges and problem walkthroughs",
          "System design fundamentals for entry-level engineering roles",
          "Handling edge cases and explaining algorithmic complexity"
        ]
      },
      {
        moduleTitle: "Module 3: HR & Behavioral Readiness",
        topics: [
          "STAR method formulation for situational questions",
          "Handling career gap explanations and salary expectation discussions",
          "Post-interview follow-up etiquette and professional offer assessment"
        ]
      }
    ],
    outcomes: [
      "Polished, industry-standard resume and active online portfolio",
      "Experience facing realistic technical and HR interview panels",
      "Direct referral to partner recruiting drives and hiring networks"
    ],
    eligibility: [
      "Graduating cohorts from Addithalam programs or underprivileged college final-year students"
    ]
  },
  {
    id: "college-training",
    slug: "college-training",
    title: "College Student Career Readiness",
    image: "/images/programs/college-training.jpg",
    shortDescription: "Structured institutional training delivered in partnership with government and tier-3 colleges to make undergraduates industry-ready.",
    fullDescription: "Recognizing that university curricula often lag behind rapid industry changes, Addithalam partners directly with colleges in and around Chennai to deliver hands-on, practical software development bootcamps on campus.",
    targetAudience: "2nd, 3rd, and final-year undergraduate students from economically challenged colleges.",
    duration: "1 Semester (120 Hours Total)",
    schedule: "Integrated with College Academic Timetable",
    mode: "On-Campus Computer Labs & Online Sandbox",
    cost: "100% Free of Cost (Institutional MOU)",
    badge: "Institutional Partnership",
    skills: [
      "Full-Stack Web Development Foundations",
      "Industry-Standard Version Control",
      "Database Architecture & Optimization",
      "Problem Solving in Python & Java",
      "Campus Placement Aptitude & Soft Skills"
    ],
    curriculum: [
      {
        moduleTitle: "Semester Track 1: Modern Software Stack",
        topics: [
          "Transitioning from theoretical computer science to industry stacks",
          "Modern JavaScript (ES6+), React foundations, and backend APIs",
          "Database integration and hosting on cloud platforms"
        ]
      },
      {
        moduleTitle: "Semester Track 2: Project Incubation",
        topics: [
          "Team-based software engineering following Agile workflows",
          "Peer code reviews, automated unit testing, and Git branch management",
          "Final campus project showcase evaluated by external tech leaders"
        ]
      }
    ],
    outcomes: [
      "Substantial increase in on-campus placement conversion rates",
      "Practical project experience bridging academic theory to enterprise code",
      "Joint certificate of completion endorsed by Addithalam Foundation"
    ],
    eligibility: [
      "Students enrolled in partner colleges; nomination through college placement cell"
    ]
  },
  {
    id: "women-in-tech",
    slug: "women-in-tech",
    title: "Women Empowerment in Tech",
    image: "/images/programs/women-in-tech.jpg",
    shortDescription: "Specialized technology training, career re-entry tracks, flexible schedules, and dedicated mentorship for women and homemakers.",
    fullDescription: "Financial independence transforms families and communities. This program provides a welcoming, supportive, and flexible learning environment tailored for women seeking their first tech job or re-entering the workforce after a career break.",
    targetAudience: "Women graduates, homemakers, and young women from underserved communities.",
    duration: "4 to 6 Months (Flexible Schedule)",
    schedule: "Morning & Afternoon Batches with Remote Support",
    mode: "Hybrid Classroom & Dedicated Online Community",
    cost: "100% Free of Cost",
    badge: "Empowerment Track",
    skills: [
      "Web Application Development & Design",
      "Digital Productivity Tools & Automation",
      "Remote Work Best Practices & Freelancing",
      "Professional Confidence & Networking",
      "Resume Rebuilding for Career Re-entry"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Digital Foundations & Modern Coding",
        topics: [
          "Digital literacy, software development fundamentals, and web tools",
          "Frontend development (HTML, CSS, JavaScript) and modern UI layout",
          "Practical mini-projects designed for flexible pacing"
        ]
      },
      {
        moduleTitle: "Module 2: Career Re-entry Strategy & Freelance Pathways",
        topics: [
          "Navigating career breaks with confidence and strategic positioning",
          "Freelance platforms, remote collaboration tools, and client communications",
          "Building a specialized portfolio highlighting modern tech proficiencies"
        ]
      },
      {
        moduleTitle: "Module 3: Women Leadership & Mentor Circles",
        topics: [
          "Exclusive mentorship circles led by successful women tech leaders",
          "Peer support groups, work-life balance strategies, and interview readiness",
          "Direct placement assistance with equal-opportunity corporate partners"
        ]
      }
    ],
    outcomes: [
      "Viable pathway to financial independence and professional employment",
      "Lifelong network of supportive women engineers and industry mentors",
      "Flexible career options including full-time, remote, or freelance technical work"
    ],
    eligibility: [
      "Women from all backgrounds with a basic desire to build a career in technology",
      "No prior coding experience required"
    ]
  }
];
