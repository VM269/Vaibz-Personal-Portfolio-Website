import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    id: 1,
    name: "Sovereign Cloud Infrastructure for Smart City Waste Management",
    subHeading: "IoT based Waste Management System",
    description:
      "Designed and automated German Sovereign Cloud infrastructure with Terraform and Ansible, delivering reusable IaC modules for VPC, subnets, load balancers, and auto-scaling groups, reducing configuration errors by 30–40%.",
    status: "Completed",
    role: "DevOps Engineer",
    techStack: [
      "Git & GitHub",
      "Linux",
      "Terraform",
      "Ansible",
      "Jenkins",
    ],
  },
  {
    id: 2,
    name: "MedLedger",
    subHeading: "Decentralised Healthcare Application (POC)",
    description:
      "Built CI/CD pipelines with Jenkins to deploy smart contracts on Sepolia Testnet, containerized a healthcare microservices app with Docker & Kubernetes, and integrated Prometheus, Grafana, and GCP Logging for 60% faster, secure, and monitored deployments.",
    status: "Completed",
    role: "DevOps Engineer",
    techStack: [
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "NGINX",
    ],
  },
  {
    id: 3,
    name: "E-Commerce Website",
    subHeading: "E-commerce 3-Tier Application Deployment",
    description:
      "Designed and implemented a production-grade DevOps setup for a cloud-native e-commerce application,leveraging AWS services and modern DevOps tools for automated deployment, monitoring, and management at scale.",
    status: "Completed",
    role: "DevOps Engineer",
    techStack: [
      "AWS",
      "Terraform",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "Sonarqube",
    ],
  },

  {
    id: 4,
    name: "Loading Other Projects to Portfolio...",
    subHeading: "Comming Soon...",
    description:
      "Comming Soon...",
    status: "In Progress",
    role: "DevOps Engineer",
    techStack: [
      "Comming Soon...",
    ],
  },
];

export const BtnList: BtnListType[] = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/VM269",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/vaibhav-matkar-v69/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://drive.google.com/file/d/120ae15fVUs8NZdRHS8RwEIyoLDMcg9v1/view?usp=sharing",
    icon: "resume",
    newTab: true,
  },
];
