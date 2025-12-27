# AutoNet - AI-Powered Network Security Automation Tool

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Cisco](https://img.shields.io/badge/Cisco-CCNA-1BA0D7?logo=cisco&logoColor=white)
![Ansible](https://img.shields.io/badge/Ansible-Automation-EE0000?logo=ansible&logoColor=white)

**AutoNet** is an intelligent network security automation platform that transforms hours of manual configuration work into a one-click AI-driven workflow. Network engineers upload topology descriptions (text/PDF/natural language) and instantly receive validated Cisco IOS configurations, deployment-ready Ansible playbooks, and interactive network visualizations, with built-in security validation.

> **Built for:** Network Engineers | Security Operations | Technical Project Managers | DevOps Teams

---

## Key Features

### AI-Powered Configuration Generation
Generates **85% accurate** Cisco IOS configurations from natural language descriptions using Google Gemini API. Supports routers, switches, and basic firewall ACLs with CCNA standard validation.

### Security Validation Engine
Automatically checks configurations against CCNA security best practices:
- ACL analysis and policy enforcement
- Authentication protocol validation (AAA, SSH)
- Port security configuration checks
- Weak credential detection
- Optimization recommendations

### Automated Deployment Pipeline
Creates production-ready Ansible playbooks enabling consistent, repeatable deployment across multi-vendor environments (Cisco, HP, Juniper). Reduces deployment time from 2-4 hours to 15-20 minutes per device.

### Interactive Network Visualization
Instantly renders professional SVG topology diagrams from text descriptions. Perfect for stakeholder communication, documentation, and design reviews.



---

## Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Core Logic** | Python, Google Gemini API | Natural language processing & config generation |
| **Prompt Engineering** | Custom prompt templates | Optimized AI responses for 85% accuracy |
| **Networking** | Cisco IOS, Packet Tracer | Configuration validation & simulation |
| **Security** | Custom validator | CCNA security standards compliance |
| **Automation** | Ansible | Infrastructure as Code (IaC) deployment |
| **Frontend** | React, TypeScript | Interactive user interface & visualization |


---

## Skills Demonstrated

This project showcases capabilities across multiple technical disciplines:

**Network Engineering:** Cisco configuration generation, multi-vendor support, topology design, CCNA standards implementation
**Security Operations:** Vulnerability detection, configuration hardening, compliance validation, security posture assessment
**Technical Project Management and Analysis:** Complete PM artifact suite (Charter, WBS, Risk Register, Timeline), scope management, stakeholder analysis
**DevOps/Automation:** Ansible playbooks, Infrastructure as Code, CI/CD readiness, Python scripting
**AI/ML Engineering:** Prompt engineering, API integration, response optimization, natural language processing

---

## Project Management & Documentation

> *This project demonstrates professional Technical Project Management (TPM) methodologies aligned with PMBOK standards.*

Comprehensive project artifacts available in `/project-management`:

| Artifact | Description | Format |
|----------|-------------|--------|
| **Project Charter** | Business case, scope definition, objectives, and stakeholder analysis | Markdown |
| **Risk Register** | Technical and security risks with quantified impact and mitigation strategies | Excel |
| **WBS & Timeline** | Work Breakdown Structure and phased development schedule | PDF |
| **Resource Allocation** | Development and testing resource planning | Markdown |

---

## Use Cases

### For Network Engineers
Rapidly generate and deploy standardized configurations for new sites, infrastructure changes, or disaster recovery scenarios. Reduce manual configuration time by 80%.

### For Security Teams
Pre-deployment configuration validation against security standards. Identify and remediate misconfigurations before they reach production.

### For IT Operations Teams
Standardize configurations across multi-vendor environments while maintaining security compliance. Enable small teams to manage larger network deployments.

### For Technical Project Managers
Demonstrate end-to-end project lifecycle management from initiation through delivery with comprehensive documentation and risk management.

---

## Setup & Installation

### Prerequisites
- **Node.js** v18+ and npm
- **Python** 3.11+
- **Google Gemini API Key**

### Quick Start

**1. Clone the repository**
**2. Configure API Key Securely**
**3. Install Dependencies & Run**

## 📸 Screenshots
### Main Interface - Dual Input Options
![AutoNet Upload Interface](./screenshots/01-upload-interface.jpg)
![Text Input Interface](./screenshots/02-text-input.jpg)

### Analysis Results Overview
![Analysis Complete](./screenshots/03-results-overview.jpg)

### Interactive Network Topology Visualization
![Visual Topology Diagram](./screenshots/04-topology-visualization.jpg)


### Generated Configurations with Security Validation
Production-ready Cisco IOS configurations with built-in security audit findings highlighting best practices compliance.
![Device Configurations with Security Audit](./05-device-configurations.jpg)

### Network Analysis & Recommendations
AutoNet doesn't just generate configurations - it analyzes your network design and provides actionable recommendations for redundancy, security hardening, monitoring, and scalability improvements.
![Network Assessment and Recommendations](./screenshots/06-network-assessment-recommendations.jpg)

---

## Project Roadmap

**Current Phase (95% Complete):**
- ✅ Core AI configuration generation
- ✅ Ansible playbook automation
- ✅ Interactive topology visualization
- ✅ Security validation engine
- 🔄 Final documentation polish

**Future Enhancements:**
- SIEM integration for security event monitoring
- Configuration change tracking and version control
- Advanced threat modeling capabilities

---

## Contact & Connect

**Abdulaziz Almithn**
CCNA Certified Computer Engineer | Network & CyberSecurity Analyst
| Technical Project Manager

📧 AbdulazizAlmithn@gmail.com
💼 [LinkedIn](https://www.linkedin.com/in/abdulaziz-almithn-867b08311/) 