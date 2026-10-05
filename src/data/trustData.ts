export interface TrustInfo {
  organizationName: string;
  registrationType: string;
  location: string;
  email: string;
  socials: {
    platform: string;
    url: string;
  }[];
  taxExemptions: {
    section: string;
    details: string;
    benefit: string;
  }[];
  fundAllocation: {
    category: string;
    percentage: number;
    description: string;
  }[];
  transparencyPoints: string[];
}

export const trustData: TrustInfo = {
  organizationName: "Addithalam Foundation",
  registrationType: "Registered Non-Profit Public Charitable Trust (India)",
  location: "Chennai, Tamil Nadu, India",
  email: "contact@addithalamfoundation.org",
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/addithalamfoundation" },
    { platform: "YouTube", url: "https://www.youtube.com/@Addithalam.Foundation" },
    { platform: "Instagram", url: "https://www.instagram.com/addithalam_foundation/" },
    { platform: "Facebook", url: "https://www.facebook.com/profile.php?id=61575219778442" }
  ],
  taxExemptions: [
    {
      section: "Section 80G Tax Exemption",
      details: "Donations are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961.",
      benefit: "Official tax receipt and Form 10BE certificate issued promptly to all donors."
    },
    {
      section: "Section 12A Registration",
      details: "Registered under Section 12A as an institutional non-profit entity dedicated exclusively to charitable education.",
      benefit: "Strict adherence to statutory financial accounting and annual public audits."
    },
    {
      section: "NITI Aayog NGO Darpan",
      details: "Recognized on the Government of India NITI Aayog NGO Darpan Portal.",
      benefit: "Full institutional transparency for CSR partnerships and corporate collaborations."
    }
  ],
  fundAllocation: [
    {
      category: "Student Training & Lab Infrastructure",
      percentage: 70,
      description: "Hardware computers, software licenses, internet bandwidth, and classroom facilities."
    },
    {
      category: "Learning Material & Placement Preparation",
      percentage: 20,
      description: "Curriculum materials, technical certification subsidies, and interview facilitation."
    },
    {
      category: "Administration & Operational Governance",
      percentage: 10,
      description: "Essential compliance, audit filings, and operational coordination."
    }
  ],
  transparencyPoints: [
    "100% of educational programs are provided free of tuition fees to qualifying students.",
    "Financial statements and audit reports are prepared annually in compliance with statutory Indian trust law.",
    "Zero commercial profit extraction; all surplus is reinvested directly into student training infrastructure.",
    "Donation receipts include donor PAN reporting for automated Form 10BE tax filing compliance."
  ]
};
