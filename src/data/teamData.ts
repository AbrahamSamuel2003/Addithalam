export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Founding Members" | "Core Team" | "Patron & Advisory";
  image: string;
  linkedin: string;
  bio: string;
  focusArea: string;
}

export const teamData: TeamMember[] = [
  {
    id: "muthu-sivanantha-moorthy",
    name: "Muthu Sivanantha Moorthy K",
    role: "Founder & Managing Trustee",
    category: "Founding Members",
    image: "/images/team/muthu-sivanantha-moorthy.jpg",
    linkedin: "https://www.linkedin.com/in/muthu-sivanantha-moorthy-k",
    focusArea: "Strategic Vision, Community Outreach & Institutional Partnerships",
    bio: "Muthu founded Addithalam Foundation with a conviction that economic background should never restrict access to a fulfilling career in technology. With extensive leadership experience in the IT industry, he oversees the foundation's strategic direction, curriculum evolution, and institutional partnerships, ensuring every student receives rigorous, dignified, and industry-grade education."
  },
  {
    id: "keerthana-kannan",
    name: "Keerthana Kannan",
    role: "Co-Founder & Treasurer",
    category: "Founding Members",
    image: "/images/team/keerthana-kannan.jpg",
    linkedin: "https://www.linkedin.com/in/keerthana-kannan",
    focusArea: "Financial Governance, Operations & Women in Tech Initiatives",
    bio: "As Co-Founder and Treasurer, Keerthana steers the financial stewardship, compliance, and operational execution of Addithalam Foundation. She is deeply passionate about expanding digital opportunities for women and homemakers, architecting specialized training tracks that facilitate smooth entry and re-entry into the modern tech workforce."
  },
  {
    id: "jerome-rajadurai",
    name: "Jerome Rajadurai",
    role: "Co-Founder & Trustee",
    category: "Founding Members",
    image: "/images/team/jerome-rajadurai.jpg",
    linkedin: "https://www.linkedin.com/in/jeromerajadurai",
    focusArea: "Academic Curriculum, Technical Labs & Corporate Alliances",
    bio: "Jerome brings deep engineering expertise and passion for mentorship to Addithalam. As Co-Founder and Trustee, he oversees technical training standards, hardware lab infrastructure, and corporate hiring partnerships, ensuring students transition seamlessly from project labs into professional engineering roles."
  },
  {
    id: "ajithkumar-r",
    name: "Ajithkumar R",
    role: "Executive Committee Member",
    category: "Core Team",
    image: "/images/team/ajithkumar-r.jpg",
    linkedin: "https://www.linkedin.com/in/ajithkumar-r",
    focusArea: "Program Operations, Student Welfare & Workshop Execution",
    bio: "Ajithkumar coordinates day-to-day operations and student engagement programs across Addithalam's learning centers. His hands-on involvement ensures that learners receive personalized academic support, seamless access to computing infrastructure, and timely career preparation assistance."
  },
  {
    id: "jackson-paul-j",
    name: "Jackson Paul J",
    role: "Secretary of IT & Digital Communications",
    category: "Core Team",
    image: "/images/team/jackson-paul-j.jpg",
    linkedin: "https://www.linkedin.com/in/jacksonpaulj",
    focusArea: "Digital Infrastructure, Cloud Platforms & Communications",
    bio: "Jackson manages the digital technology stack, online learning platforms, and external communications for the foundation. He spearheads technical innovations that ensure hybrid delivery remains seamless, scalable, and accessible to students across Tamil Nadu."
  },
  {
    id: "sriyamini",
    name: "Sriyamini",
    role: "Core Committee Member",
    category: "Core Team",
    image: "/images/team/sriyamini.jpg",
    linkedin: "https://www.linkedin.com/in/sriyamini-j",
    focusArea: "Soft Skills, Student Engagement & Mentorship Coordination",
    bio: "Sriyamini drives student engagement and soft skills workshop design at Addithalam. She works closely with cohorts to build professional communication, interview confidence, and collaborative workplace readiness."
  },
  {
    id: "archana-kannan",
    name: "Archana Kannan",
    role: "Core Committee Member",
    category: "Core Team",
    image: "/images/team/archana-kannan.jpg",
    linkedin: "https://www.linkedin.com/in/archana-kannan-4abaab216",
    focusArea: "Community Alliances, Volunteer Operations & Event Support",
    bio: "Archana leads volunteer onboarding and community outreach initiatives. She coordinates with industry volunteers, guest speakers, and community organizers to expand the reach and depth of Addithalam's free training programs."
  },
  {
    id: "praveen-gnanasekaran",
    name: "Praveen Gnanasekaran",
    role: "Advisor & Patron",
    category: "Patron & Advisory",
    image: "/images/team/praveen-gnanasekaran.jpg",
    linkedin: "https://www.linkedin.com/in/praveen-gnanasekaran-54a4676",
    focusArea: "Strategic Governance, Industry Advisory & Ecosystem Expansion",
    bio: "Praveen provides strategic counsel and industry oversight to the leadership team. With decades of executive leadership in the enterprise technology landscape, he guides Addithalam in building scalable, sustainable, and internationally benchmarked educational frameworks."
  }
];
