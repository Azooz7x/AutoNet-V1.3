# AutoNet Project Charter

**Project Name:** AutoNet - AI-Powered Network Security Automation Tool  
**Project Manager:** Abdulaziz Almithn  
**Start Date:** September 2025  
**Target Completion:** January 2026  
**Current Status:** 95% Complete - Documentation Phase  
**Last Updated:** December 26, 2025

---

## Executive Summary
AutoNet addresses the time-intensive manual configuration of enterprise network devices, which currently requires 2-4 hours per device and introduces human error rates of 15-30%. This AI-powered automation tool reduces configuration time by 80% while ensuring consistency and security compliance across multi-vendor environments. By combining intelligent configuration generation with automated security validation, AutoNet streamlines both operational efficiency and infrastructure hardening.


---

## Project Purpose & Business Case

**Problem Statement:**  
Network engineers and infrastructure teams face critical operational challenges with manual device configuration:
- 2-4 hours per device for complex topologies, limiting deployment scalability
- 15-30% error rate in manual configurations creates security vulnerabilities and downtime
- Inconsistent security implementations across devices (ACLs, AAA, port security)
- Limited capacity for small IT teams to manage growing network infrastructure
- Delayed configuration deployment increases business risk exposure

**Solution:**  
AutoNet eliminates manual configuration bottlenecks through AI-powered automation:
- **Configuration Generation**: Natural language descriptions instantly converted to validated Cisco IOS configs
- **Deployment Automation**: Ansible playbooks enable consistent, repeatable deployment across multi-vendor environments
- **Security Validation**: Automated checking against CCNA security standards before production deployment
- **Visual Documentation**: Interactive topology diagrams generated from text descriptions for stakeholder communication

**Strategic Alignment:**  
This project demonstrates advanced technical project management capabilities while solving real-world infrastructure automation challenges aligned with Saudi Vision 2030 digital transformation goals.

**Expected Business Impact:**
- 80% reduction in configuration deployment time (2-4 hours → 15-20 minutes)
- 90% reduction in configuration errors (15-30% → <3%)
- Consistent security baseline enforcement across infrastructure
- Scalable solution enabling small teams to manage larger network deployments



## Project Objectives
1. **Develop functional AI configuration generator** achieving 85% accuracy against CCNA standards
2. **Implement automated security posture assessment** detecting common vulnerabilities (weak passwords, open ports, missing ACLs)
3. **Generate interactive topology visualizations** rendering complete diagrams in under 60 seconds
4. **Produce comprehensive documentation** including technical specs, user guides, and PM artifacts

---

## Project Scope

### In Scope
- AI-powered network configuration generator supporting Cisco IOS routers, switches, and basic firewall ACLs
- Ansible automation playbook generation for multi-vendor device deployment
- Interactive SVG network topology visualization from text/PDF descriptions
- Configuration validation against CCNA security and optimization standards
- Automated security posture assessment (ACL analysis, authentication protocol checks, port security validation)
- Comprehensive GitHub repository with technical documentation
- Full project management artifact suite (Project Charter, WBS, Risk Register, Timeline)


### Out of Scope
- Commercial deployment or enterprise licensing
- Real-time network monitoring or alerting features
- Wireless controller configurations
- Multi-cloud orchestration (AWS, Azure, GCP)
- Advanced security features (IDS/IPS, DLP, SIEM integration)
- Mobile application development
- 24/7 technical support

**Rationale:** Out-of-scope items would require team resources, commercial partnerships, or extend timeline beyond portfolio project objectives.

---

## Stakeholders

| Stakeholder | Role | Interest | Influence |
|-------------|------|----------|-----------|
| Portfolio Reviewers | Decision Makers | Evaluate technical PM capabilities | High |
| Network Engineers | End Users | Benefit from automation efficiency | High |

---

## Key Deliverables
1. Functional web application with React frontend and intuitive UX
2. Optimized prompt engineering system for AI-powered configuration generation
3. Google Gemini API integration with error handling and response parsing
4. Ansible playbook generation module supporting multi-vendor environments
5. Interactive topology visualization engine with SVG rendering
6. Security validation module checking configurations against CCNA security best practices
7. GitHub repository with comprehensive technical documentation
8. Project management artifact suite (Charter, WBS, Risk Register, Timeline)

---

## Success Criteria
- **Technical Performance**: Configuration accuracy ≥ 85%
- **Operational Efficiency**: Generation time < 60 seconds for typical enterprise topologies (10-20 devices)
- **Project Management**: Successfully demonstrates both technical execution AND PM methodology with complete artifact suite

---

## Assumptions
- Google Gemini API maintains stable availability during development
- CCNA-level networking knowledge sufficient for validation
- GitHub remains primary portfolio hosting platform

---

## Constraints
- **Budget:** $0 (using free-tier APIs and open-source tools)
- **Time:** 8-week development window
- **Resources:** Solo developer/PM (no team)
- **Technology:** Limited to free APIs with rate limits

---

## High-Level Timeline

| Phase | Duration | Key Milestone | Status |
|-------|----------|---------------|--------|
| Planning & Design | Week 1-2 (Sept 2025) | Requirements finalized, architecture designed | ✅ Complete |
| Development | Week 3-6 (Oct-Nov 2025) | Core features implemented | ✅ Complete |
| Testing & Validation | Week 7-8 (Nov-Dec 2025) | Cisco Packet Tracer validation passed | ✅ Complete |
| Documentation & Polish | Week 9-10 (Dec 2025-Jan 2026) | PM artifacts and GitHub documentation | 🔄 In Progress |

---

## High-Level Risks
1. API rate limiting impacts testing cycles (Medium probability, Medium impact)
2. Generated configurations contain security vulnerabilities (Low probability, High impact)
3. Scope creep from feature additions (Medium probability, Medium impact)

*Full risk analysis available in RISK_REGISTER.xlsx*

---

## Project Approval

**Approved By:** Abdulaziz Almithn - Project Lead  
**Date:** December 26, 2025  