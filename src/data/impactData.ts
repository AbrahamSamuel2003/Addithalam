export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Story {
  id: string;
  name: string;
  background: string;
  program: string;
  outcomeRole: string;
  quote: string;
  companyCategory: string;
}

export const impactMetrics: Metric[] = [
  {
    value: "500+",
    label: "Learners Upskilled",
    description: "Equipped with industry-grade programming, problem solving, and soft skills."
  },
  {
    value: "120+",
    label: "Women in Tech Empowered",
    description: "Supported through flexible skilling, career re-entry, and mentor circles."
  },
  {
    value: "45+",
    label: "Industry Mentors",
    description: "Senior engineers and leaders providing dedicated 1-on-1 career navigation."
  },
  {
    value: "100%",
    label: "Free & Merit-Based",
    description: "Zero tuition fees or hidden charges for any student from day one."
  }
];

export const learnerStories: Story[] = [
  {
    id: "story-1",
    name: "Karthik R.",
    background: "First-generation graduate from an agricultural family in rural Tamil Nadu with no prior coding background.",
    program: "IT Technical Skills & 1-on-1 Mentorship",
    outcomeRole: "Junior Full-Stack Developer",
    companyCategory: "Chennai Tech Enterprise",
    quote: "Before Addithalam, tech felt like an unreachable world behind expensive coaching fees. Here, I received not just free training in Python and SQL, but a mentor who reviewed my code line by line and prepared me for real engineering interviews."
  },
  {
    id: "story-2",
    name: "Priyadarshini M.",
    background: "Homemaker seeking to re-enter the professional workforce after a 4-year career break.",
    program: "Women Empowerment in Tech",
    outcomeRole: "Frontend Web Specialist",
    companyCategory: "Digital Solutions Firm",
    quote: "The flexible morning batches and the supportive community of women learners gave me the confidence to code again. Today, I am financially independent and contributing to live software products."
  },
  {
    id: "story-3",
    name: "Vignesh S.",
    background: "Final-year college student from a tier-3 engineering institution with limited campus recruitment.",
    program: "College Student Career Readiness",
    outcomeRole: "Software Engineering Intern",
    companyCategory: "SaaS Product Startup",
    quote: "The hands-on project incubation and mock technical interviews bridged the gap between our college syllabus and real industry expectations. It opened a door that changed the trajectory of my career."
  }
];

export const opportunityGapSteps = [
  {
    stage: "01",
    title: "Access",
    description: "Removing the economic barrier by providing high-speed computers, development labs, and zero-fee training."
  },
  {
    stage: "02",
    title: "Skills",
    description: "Building production-grade competence across programming languages, system architecture, and modern web frameworks."
  },
  {
    stage: "03",
    title: "Confidence",
    description: "Nurturing professional communication, public speaking, teamwork, and interview resilience."
  },
  {
    stage: "04",
    title: "Opportunity",
    description: "Connecting verified learners directly to hiring partners, industry mentors, and salaried technical roles."
  }
];
