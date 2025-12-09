# Bias and Brew Website - Complete Specification Sheet

## Project Overview
Build a modern, professional single-page React website for Bias and Brew, a data analytics and AI consultancy specializing in ethical AI solutions for government departments.

---

## Brand Identity

### Company Information
- **Company Name:** Bias and Brew
- **Tagline:** Data Distilled. Intelligence Deployed.
- **Domain:** biasandbrew.dev
- **Primary Contact:** kosta@biasandbrew.dev
- **LinkedIn:** https://www.linkedin.com/in/konstantin-pokaluhin/

### Target Audience
Government departments and agencies seeking:
- Ethical AI implementation
- Bias mitigation in AI/ML systems
- Automated workflow solutions
- Data governance and compliance

### Brand Colors
```
Primary: Sapphire - #0F52BA (CTAs, links, primary buttons)
Secondary: Charcoal - #36454F (text, headers)
Accent 1: Ruby - #E0115F (highlights, important elements)
Accent 2: Tangerine - #F28500 (secondary CTAs, icons)
Accent 3: Taupe - #483C32 (subtle backgrounds, borders)
Background: #FFFFFF (main)
Background Alt: #F8F9FA (section alternates)
```

### Typography Recommendations
- **Headings:** Inter or Manrope (clean, modern, professional)
- **Body:** Inter or System UI stack (excellent readability)
- **Font Sizes:** Use Tailwind's default scale with custom adjustments

### Visual Style
- Clean, professional, government-appropriate
- Generous whitespace for clarity
- Subtle animations (professional, not playful)
- High contrast for accessibility (WCAG AA minimum)
- Trust-building design language
- Modern but not trendy

---

## Site Structure

### Navigation
Fixed header with smooth scroll to sections:
- Home
- Services
- About
- Contact

Mobile: Hamburger menu with slide-in navigation

### Page Sections (in order)

#### 1. Hero Section
**Headline:** "Ethical AI Solutions for Government"

**Subheadline:** "Data Distilled. Intelligence Deployed."

**Supporting Text:** "We help government agencies build trustworthy AI systems through rigorous bias auditing and intelligent automation. From data integrity to autonomous agents, we deliver solutions that serve the public interest."

**Primary CTA:** "Schedule a Consultation" (links to contact form)

**Secondary CTA:** "Explore Our Services" (scrolls to services section)

**Visual Elements:**
- Clean, professional hero with subtle gradient background (Sapphire to light blue)
- Abstract data visualization or geometric pattern (subtle, professional)
- No stock photos of people pointing at screens

#### 2. Value Proposition Section
**Heading:** "Trusted AI for Government Operations"

**Three Key Points:**
1. **🛡️ Bias-Free Intelligence**
   "Rigorous auditing ensures your AI systems serve all citizens fairly and ethically."

2. **⚡ Rapid Deployment**
   "Prototype-first methodology delivers working solutions in weeks, not years."

3. **🔒 Compliant by Design**
   "Built with government regulations, security standards, and transparency requirements in mind."

#### 3. Services Section
**Heading:** "Our Services"

**Subheading:** "Two pillars of expertise: Foundational integrity and intelligent automation"

**Pillar 1: 🔍 The "Bias" Pillar**
**Subtitle:** "Auditing & Foundational Data Services"
**Description:** "Ensuring quality, fairness, and reliability of your data and models."

Services:
1. **The Data Filter**
   Deep-dive analysis of data integrity, cleansing, and preparation for modeling. We identify data quality issues before they become model problems.

2. **Bias Mitigation Audit**
   Specialized service to identify, measure, and correct algorithmic bias in existing ML/AI models. Comprehensive reporting aligned with government fairness standards.

3. **Ethical AI Frameworking**
   Creating policy and governance structures to ensure AI models comply with regulations, ethical standards, and public accountability requirements.

4. **Core Metric Alignment**
   Establishing the correct KPIs and metrics to measure model success against agency goals and public service outcomes.

**Pillar 2: ☕ The "Brew" Pillar**
**Subtitle:** "Agentic AI & Systems Development"
**Description:** "Building and deploying automated, action-oriented AI agents."

Services:
1. **The Automation Recipe**
   Strategy and design for specific, goal-oriented AI agents tailored to your agency's needs (e.g., citizen inquiry triage, document processing, compliance monitoring).

2. **Agent Pilot Program**
   Rapid development and testing of a small-scale, high-impact agent to demonstrate ROI and build stakeholder confidence.

3. **Agent Deployment & Scaling**
   Engineering the secure and scalable integration of autonomous agents into core agency systems, with full security and audit trail compliance.

4. **The Workflow Distillation**
   Using AI and analytics to map, optimize, and automate complex internal business processes, reducing manual overhead while maintaining oversight.

**Design Notes for Services:**
- Each pillar in a distinct card/section
- Services displayed as expandable cards or clean grid
- Icons for each service (data, shield, gears, etc.)
- Hover effects that are professional, not flashy

#### 4. Process/Approach Section
**Heading:** "Our Approach"

**Subheading:** "Rapid iteration. Evidence-based. Government-ready."

**Three-Step Process:**

**Step 1: Assess**
- Deep-dive workshops with stakeholders
- Data and system audits
- Risk and bias assessment
- Clear scope and success metrics

**Step 2: Prototype**
- 2-week sprint cycles
- Working demonstrations, not just documents
- Iterative feedback loops
- Security and compliance from day one

**Step 3: Deploy**
- Phased rollout strategies
- Comprehensive documentation
- Staff training and knowledge transfer
- Ongoing monitoring and refinement

**Visual:** Timeline or process flow diagram

#### 5. Why Bias and Brew Section
**Heading:** "Why Work With Us"

**Key Differentiators:**

**Government-First Mindset**
We understand the unique challenges of public sector AI: transparency requirements, diverse stakeholder needs, and the imperative to serve all citizens fairly.

**Speed Meets Rigor**
Our prototype-first approach delivers rapid results without cutting corners on testing, documentation, or compliance.

**From Audit to Automation**
Unlike consultancies that only identify problems or only build solutions, we do both—ensuring your AI systems are built on solid, unbiased foundations.

**Technical Excellence**
Deep expertise in data science, ML engineering, and agentic AI systems, combined with practical understanding of government operations.

#### 6. About Section
**Heading:** "About Bias and Brew"

**Content:**
"Bias and Brew was founded on a simple principle: AI in government must be both powerful and trustworthy. We specialize in rapid prototyping of AI-powered analytics products, with a particular focus on ensuring fairness, transparency, and accountability.

Our expertise spans the full lifecycle—from auditing existing systems for bias to building cutting-edge agentic workflows that automate complex processes. We work exclusively with government agencies, bringing deep understanding of public sector requirements, security standards, and the unique responsibility of serving all citizens.

Every project begins with the question: 'Is this the right thing to build?' and ends with systems that you can explain, defend, and trust."

**Founder Info:**
- Led by Konstantin Pokaluhin
- [Can expand with credentials, experience, or leave minimal]

**Visual:** Professional headshot placeholder or abstract team visual

#### 7. Contact Section
**Heading:** "Let's Talk"

**Subheading:** "Ready to build AI systems you can trust? Start with a conversation."

**Contact Form Fields:**
- Name (required)
- Agency/Department (required)
- Email (required)
- Message (required, textarea)
- Submit button: "Send Message"

**Form Behavior:**
- Client-side validation
- Success message on submission
- Form submits to: kosta@biasandbrew.dev
- Use Web3Forms or similar (free, no backend needed for Cloudflare Pages)

**Alternative Contact:**
"Prefer to connect directly?"
- Email: kosta@biasandbrew.dev
- LinkedIn: [Link to profile]

#### 8. Footer
**Content:**
- © 2024 Bias and Brew. All rights reserved.
- Quick links: Home | Services | About | Contact
- LinkedIn icon/link
- Privacy Policy (placeholder link)
- Terms of Service (placeholder link)

**Design:** Clean, minimal, Charcoal background with light text

---

## Technical Specifications

### Framework & Tools
```json
{
  "framework": "React 18+",
  "buildTool": "Vite",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "forms": "Web3Forms (or Formspree)",
  "icons": "Lucide React",
  "deployment": "Cloudflare Pages"
}
```

### Required Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### Tailwind Configuration
```javascript
// Custom theme extensions
colors: {
  sapphire: '#0F52BA',
  charcoal: '#36454F',
  ruby: '#E0115F',
  tangerine: '#F28500',
  taupe: '#483C32',
}
```

### Performance Requirements
- Lighthouse Performance Score: 90+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

### Accessibility Requirements
- WCAG 2.1 Level AA compliance minimum
- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Keyboard navigation support
- Focus indicators on all interactive elements
- Sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- Screen reader friendly

### SEO Requirements
```html
<title>Bias and Brew | Ethical AI Solutions for Government</title>
<meta name="description" content="Build trustworthy AI systems for government. Expert bias auditing, data governance, and agentic AI automation for public sector agencies.">
<meta name="keywords" content="government AI, ethical AI, bias mitigation, AI audit, agentic AI, public sector automation, AI governance">

<!-- Open Graph -->
<meta property="og:title" content="Bias and Brew | Ethical AI Solutions for Government">
<meta property="og:description" content="Data Distilled. Intelligence Deployed.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://biasandbrew.dev">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Bias and Brew | Ethical AI Solutions for Government">
<meta name="twitter:description" content="Data Distilled. Intelligence Deployed.">
```

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Max content width: 1280px

---

## Animation & Interaction Specifications

### Scroll Animations (Framer Motion)
- Fade in sections as they enter viewport
- Stagger animation for service cards
- Smooth scroll behavior for anchor links
- Parallax effect on hero (subtle, professional)

### Micro-interactions
- Button hover: Scale 1.02, color darken
- Service cards: Lift on hover (shadow increase)
- Form inputs: Border color change on focus
- Navigation: Underline slide-in on hover

### Timing
- Standard transitions: 200-300ms
- Page scroll: 800ms ease-in-out
- Fade-ins: 600ms
- Avoid anything jarring or too fast

---

## Component Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ValueProposition.jsx
│   ├── Services.jsx
│   │   ├── ServicePillar.jsx
│   │   └── ServiceCard.jsx
│   ├── Process.jsx
│   ├── WhyUs.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   │   └── ContactForm.jsx
│   └── Footer.jsx
├── utils/
│   └── smoothScroll.js
└── assets/
    └── (logos, icons as needed)
```

---

## Content Tone Guidelines

### Voice Characteristics
- **Professional:** Government-appropriate, credible
- **Clear:** No jargon without explanation
- **Confident:** We know our expertise
- **Ethical:** Emphasize responsibility and public service
- **Action-Oriented:** Focus on outcomes, not process

### Writing Rules
- Active voice preferred
- Short paragraphs (2-3 sentences max)
- Bullet points for scannability
- No buzzwords without substance
- Lead with benefits, support with features
- Avoid: "leverage," "synergy," "disruptive" (unless used ironically)
- Use: "build," "ensure," "deliver," "audit," "automate"

### Example Copy Snippets

**Good:**
"We audit your AI systems to ensure they serve all citizens fairly, then build automated workflows that reduce manual overhead while maintaining accountability."

**Avoid:**
"Leveraging cutting-edge ML paradigms, we synergize your data ecosystem to unlock transformative value propositions across your digital infrastructure."

---

## Deployment Configuration

### Cloudflare Pages Setup
```yaml
# Build configuration
Build command: npm run build
Build output directory: dist
Root directory: /

# Environment variables
NODE_VERSION: 18
```

### Build Script
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Custom Domain
- Domain: biasandbrew.dev
- Configure DNS in Cloudflare to point to Pages deployment
- Enable automatic HTTPS

---

## Form Integration

### Web3Forms Setup (Recommended - Free)
```javascript
const FORM_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Get from web3forms.com

// Form endpoint
https://api.web3forms.com/submit

// Required fields in form
<input type="hidden" name="access_key" value={FORM_ACCESS_KEY} />
<input type="hidden" name="subject" value="New Contact from biasandbrew.dev" />
<input type="hidden" name="from_name" value="Bias and Brew Website" />
```

### Form Validation
- All fields required
- Email format validation
- Min length for message: 20 characters
- Clear error messages
- Success state with message

---

## Future Enhancements (Not in V1)

### Phase 2 Additions
- Case studies page
- Blog/insights section
- Team member profiles
- Client testimonials (with permission)
- Downloadable resources (whitepapers, guides)
- Dark mode toggle

### Phase 3 Additions
- Online booking/calendar integration
- Client portal
- Resource library
- Newsletter signup
- Multi-language support

---

## Success Metrics

### Launch Criteria
- [ ] All sections render correctly on mobile, tablet, desktop
- [ ] Contact form successfully delivers to kosta@biasandbrew.dev
- [ ] Lighthouse scores meet targets
- [ ] No console errors
- [ ] All links functional
- [ ] Smooth scroll working
- [ ] Accessible via biasandbrew.dev

### Post-Launch Monitoring
- Form submission rate
- Average time on page
- Most viewed sections (via scroll depth)
- Mobile vs desktop traffic

---

## Deliverables Checklist

The AI should provide:
- [ ] Complete React component structure with all sections
- [ ] Tailwind config with custom colors
- [ ] package.json with all dependencies
- [ ] index.html with proper meta tags
- [ ] README.md with:
  - [ ] Local development instructions
  - [ ] Cloudflare Pages deployment steps
  - [ ] Environment variable setup
  - [ ] Web3Forms configuration
- [ ] .gitignore file
- [ ] Responsive navigation with mobile menu
- [ ] Working contact form with validation
- [ ] All animations implemented
- [ ] SEO optimized
- [ ] Accessibility compliant
- [ ] Production-ready code

---

## Design References & Inspiration

### Style Direction
- Government-appropriate: Clean, trustworthy, professional
- Modern SaaS: Notion, Linear, Stripe (but more conservative)
- Data visualization: Subtle, abstract, not overwhelming
- NOT: Playful, startup-y, consumer-facing

### Color Usage Examples
- **Sapphire:** Primary CTAs, active nav items, links
- **Charcoal:** Headings, body text, footer background
- **Ruby:** Service pillar 1 accent, important callouts
- **Tangerine:** Service pillar 2 accent, secondary CTAs
- **Taupe:** Borders, subtle backgrounds, dividers

---

## Copy Bank (Additional Content Options)

### Alternative Headlines
- "AI You Can Explain. Automation You Can Trust."
- "From Bias Audit to Intelligent Automation"
- "Ethical AI for Public Service"

### Service Category Descriptions
Use these if expanding service cards:

**Data Filter expanded:**
"Before you model, know your data. We perform comprehensive data profiling, identify quality issues, statistical anomalies, and potential bias signals in source data. Includes data lineage mapping and preparation pipelines optimized for ML workflows."

**Bias Mitigation Audit expanded:**
"Using industry-standard fairness metrics (disparate impact, equalized odds, demographic parity), we quantify bias across protected attributes. Deliverable includes detailed report with remediation recommendations and re-audit benchmarks."

**Ethical AI Frameworking expanded:**
"Custom AI governance frameworks aligned with your agency's mission. Includes model cards, decision flowcharts for high-stakes AI use, stakeholder approval processes, and ongoing monitoring protocols."

---

## Notes for AI Code Generator

### Implementation Priorities
1. **Mobile-first:** Design for mobile, enhance for desktop
2. **Accessibility:** This is government - WCAG compliance is critical
3. **Performance:** Fast load times build trust
4. **Clarity:** Every section should have clear purpose
5. **Professional:** Avoid anything that looks cheap or template-y

### Common Pitfalls to Avoid
- Don't use lorem ipsum - use the actual content provided
- Don't add generic stock photos - use abstract patterns or leave space
- Don't over-animate - government audience prefers subtle
- Don't skip the README - deployment instructions are critical
- Don't forget form validation - bad UX kills conversions

### Code Quality Standards
- Use TypeScript if possible (but not required for v1)
- Component-based architecture
- DRY principles
- Clear prop interfaces
- Commented sections
- Consistent naming conventions
- No hardcoded values (use constants)

---

## Final Notes

This website should feel trustworthy, competent, and modern - but not flashy. The target audience (government departments) values clarity, compliance, and credibility over cutting-edge design trends.

The two-pillar structure (Bias + Brew) is central to the brand identity and should be visually distinct in the services section.

Every design decision should answer: "Would a government procurement officer trust this company with their AI initiatives?"

---

**End of Specification**

Ready for handoff to AI code generator or development team.
Generated: December 2024
Version: 1.0
