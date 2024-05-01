---
permalink: false
report_parent: fy22

nav_order: 2
nav_label: "Where are they now?"
nav_id: "where-are-they-now?"

class: white
---
## Where are they now?

One great challenge that 10x has grappled with over the years is how to track the impact that our projects deliver once they've left our pipeline—something we call "tracing the ripples."

Our business model emphasizes seed funding over long-term ownership and maintenance. We work hard to ensure that our products can succeed in a post-10x life.

But our approach makes it difficult for us to keep up with our projects once they are no longer in our pipeline. This is particularly true when the most meaningful impact might look different from immediate product adoption or financial returns.

For this year's Impact Report, we caught up with a few projects that we nurtured from idea to scale. Here's what became of them.

### Federal Grantee Reporting (FGR); Federal Audit Clearinghouse (FAC)

Back in 2017, 10x funded a project called Federal Grantee Reporting (FGR). It aimed to improve the user experience for thousands of federal grantees during their annual reporting requirements.

This reporting, previously managed by the Census Bureau, is called the Single Audit process; it is defined in statute (the <a class="usa-link usa-link--external" rel="noreferrer" target="_blank" href="https://www.congress.gov/bill/98th-congress/senate-bill/1510">Single Audit Act</a> ) and Uniform Guidance (<a class="usa-link usa-link--external" rel="noreferrer" target="_blank" href="https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200">2 CFR 200</a>). The results move through a massive legacy database called the Federal Audit Clearinghouse (FAC). The purpose of FGR was not to rebuild the FAC as a system, but rather to find ways to make the federal grant reporting experience better for grantees, and more transparent and accountable to the public.

10x funded FGR for all four phases. We worked with several key stakeholders over the course of the project:

- Census (current system owners), 
- the Office of Management and Budget (OMB), and 
- Health and Human Services (HHS), which given its massive footprint in grant funding, was designated as the Quality Service Management Office (QSMO).

The QSMO is the agency responsible for ensuring long-term sustainability of the federal grants process. We explain more on these relationships and why they mattered below.

The project deliverables included two functional prototypes:

- The first prototype was called the distiller, which automatically extracts short summaries from audit packages. 
- The second prototype used natural language processing (NLP) to help users search for and extract specific text from large datasets.

These prototypes demonstrated that we could save agencies time, reduce manual data entry errors during the audit process, and vastly improve the user experience while doing so.

The prototypes we built during FGR used FAC data, but they were positioned downstream of the system itself. This means that we were able to build and experiment with our own technology without impacting the FAC in any way.

While FGR delivered value, it didn't lead to immediate adoption or immediate financial returns.

However, the work highlighted how current single audit processes result in data that is difficult for agencies to access and process. It also demonstrated incredible opportunities for improvement to the single audit user experience through the 10x approach to technology innovation. The necessity for improving the grants audit process never went away, and our partners continued working on this thorny problem while we focused on other projects.

A few years after FGR graduated from 10x, circumstances changed. In 2022, GSA received a new mandate for managing the Single Audit process, which would involve moving system capabilities and processes from Census to GSA.

Due to the complexity of such a transition, stakeholders approached 10x to ask us to oversee the FAC's initial transition, using what we learned and the relationships and credibility we built during the FGR project. We agreed to oversee the transition and then hand off the work to our colleagues within GSA.

This current FAC reimagination project is not a traditional 10x project—it's better described as a post-Phase Four project.

The new, 10x-managed, GSA-staffed FAC team set out on a path of continuous innovation and modernization. The team consists of a cross-functional group of designers, engineers, policy experts, and other professions. The team was drawn from a mix of existing 10x staff as well as talent from both within and outside TTS. Through this process, the team we stood up will carry this work forward, and will ultimately build and deliver a brand new clearinghouse for Single Audits for hundreds of thousands of users who interact with tens of billions of dollars in federal grant funding each year. This effort represents an organization-wide effort, in which many different offices within GSA contributed talent and expertise. This highlights another strength of 10x, which is to serve as a convening role for technology innovation: bringing the right folks together from across organizational boundaries, with the right outlook, and a shared perspective and vision for impact.

The GSA-developed FAC will be fully operational to handle audit packages beginning October of 2023.

### RPA for SSPs; ASAP

Also in 2017, 10x funded a project called Robotic Process Automation (RPA) for System Security Plans (SSP), or RPA for SSPs for short. Our goal was to get secure cloud services into the hands of civil servants faster by automating parts of the government's cybersecurity authorization process.

Over the course of this work, 10x documented the complex compliance process that a subset of  technology vendors called Cloud-Service Providers (CSPs) face getting the green light to sell cloud products to federal agencies. After all, government agencies must protect the privacy of their agency's digital assets, which leads to very strict security requirements.

Today, vendors express the cybersecurity controls and control baselines they have in place for their products in proprietary formats. This requires converting data and significant manual effort to describe how they are implemented.

To improve these processes, the National Institute for Standards and Technology (NIST) and GSA, in collaboration with industry, have developed a new language format called OSCAL–a standardized, machine readable framework to document cybersecurity controls.

The value of OSCAL is shifting security documentation from test-based formats to machine-readable code (XML, YAML, JSON) allowing for automation and efficiency. With systems security information represented in OSCAL, security professionals will be able to automate security assessment, auditing, and continuous monitoring processes. That focus on automation led us to rebrand the project as ASAP, or Automated Security Authorization Process, in FY22.

As OSCAL development was maturing, the next step in realizing its potential would be creating the automation that the standardized format allows. We focused our efforts on automating validations of the security packages.

The testing focused on Federal Risk Authorization Management Program (FedRAMP) security requirements. The FedRAMP program authorizes cloud service providers to conduct business with the federal government. We first focused on automating how FedRAMP can validate the cybersecurity controls included in SSPs, which are one of the primary documents involved in the cybersecurity review process.

The automated validations were released on Github and continuously updated. This allows vendors to self test security package materials before submitting to FedRAMP, which shortens the time to authorize systems.

In FY22, ASAP reached a new milestone. We completed Phase Four and by the end, we had proven the feasibility of automatically validating security control documentation using OSCAL. FY22 saw the FedRAMP program accepting and applying validations to SSPs formatted in OSCAL for the first time.

Over the course of Phase Four, we partnered closely with the Centers for Medicare & Medicaid Services (CMS) who agreed to test implementing OSCAL with actual vendors seeking to do business with CMS. The pilot has proven effective, and CMS expects to continue evangelizing the OSCAL framework to future vendors. We proved that automatic cybersecurity control validations could be done at scale by helping to spread the capability outside of the 10x team and into federal agencies.

As OSCAL is further adopted across the cybersecurity industry, the 10x ASAP project will continue supporting the goal of getting cloud services to agencies faster by shortening the authorization time and assuring cleaner packages with fewer errors.



