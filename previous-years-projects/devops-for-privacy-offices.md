---
title: DevOps for Privacy Offices
subtitle: What if an elegant product could change the way the government handles private information?
description: "10x developed an innovative enhancement to their workflows — SORNDASH — a customizable, interactive dashboard that allows privacy offices easy access to the PII living within the systems they oversee, making it easier to manage and protect."
excerpt: |-
  Government agencies manage a vast number of systems that contain personally identifiable information (PII) for both their own employees and in some cases, the public. Every agency has an office dedicated to protecting this data, but not all of them are equipped with the modern technology needed to protect it. The project team looked at the  end-to-end processes used by government privacy offices and developed an innovative enhancement to their workflows — SORNDASH — a customizable, interactive dashboard that allows privacy offices easy access to the PII living within the systems they oversee, making it easier to manage and protect.  
template: "4"
intro: |-
  Protecting the privacy of Americans is a critically important obligation the government must meet while delivering public services. The civil servants at the center of this mandate work in agency privacy offices, which are tasked with ensuring their agencies are managing the personally identifiable information (PII) held within their IT systems responsibly. For example, privacy officers ensure that elements of PII are deleted when there is no longer a reason for the government to store it. And if an agency system is targeted by malware, it’s up to the privacy officers to find out what PII may be at risk. The problem is that privacy offices don’t always have access to modern technology, and that means a lot of time spent on manual, repetitive tasks. Our bet was simple: better equipped privacy officers equals better protected PII. To get there, we spent over a year learning about the people, policies, and possibilities of the nuanced world of government privacy management. We learned that the people are dedicated, the policies are navigable, and the possibilities are plentiful. Oh, and we shipped a product along the way.
impact: |-
  ### Why this matters

  First, there are a host of reasons why an agency IT system would store PII. For example, an agency may hold the social security numbers or credit information of members of the public who have applied for housing assistance, or entrepreneurs who have secured government loans. All of this information could be compromised if that system were targeted by malware. On top of that, the government’s collection and management of private information is a key factor in shaping the public’s level of trust and confidence in government. We felt these reasons were compelling enough to dedicate at least a Phase 1 investigation to see if we could make a difference for privacy officers.
approach: |-
  ### What we did
  We built a custom dashboard that allows privacy offices--and everyone else--to perform targeted searches across thousands of System of Records Notices (SORN), which are the documents that inform the public about the existence and current state of government IT systems that collect and store PII.

  ### How we did it

  First, we validated the problem and opportunity posed by the idea author. We started close to home by engaging with our own agency’s privacy office to learn about their work. This research uncovered the opportunity to help the officers work more efficiently by making it easier to locate privacy documents and specific information within them. Based on the research findings, we quickly prototyped a simple tool that pulled interesting data fields from SORNs into a simple, searchable table. This prototype was embraced by users within our agency, and we moved the project into the next phase. 

  For the next several months, we expanded upon that prototype and delivered a more polished minimum viable product. It's worth noting that we were particularly pleased by the way our project team took on a challenge we set before them. Simply put, we said that this project--like all 10x projects--was not guaranteed to receive additional funding, and that they should find a way to make sure users could find as much value from this work as possible moving forward, even if the project concluded  during the current phase. The solution was a perfect example of meeting people where they are--a common phrase used in civic tech circles. We built a simple, but more fleshed-out, version of the dashboard using Federalist and connected it with the same spreadsheets the users were already using in their day-to-day tasks. A simple script allowed the privacy officers to continue interacting with the dashboard via simple spreadsheets, which meant the users did not need to buy or learn any new systems. Furthermore, the set up required little to no development support moving forward--a great example of achieving medium to long-term product sustainability in government, without a budget or development contract. 

  Over the course of Phase Four, the privacy dashboard became what it is today. We continued working with privacy officers from agencies all across the government to scale SORN DASH to as many new users as possible. SORN DASH now hosts thousands of documents from dozens of agencies in structured, machine-readable data. 

  ### Where we are today

  SORN DASH lives on cloud.gov and is in use by privacy officers in many agencies. We found a sustainable path forward for the product by transferring ownership to an identity management focused-group within GSA. SORN DASH has a dedicated product owner and appropriated funding that will help it deliver impact going forward.
future: |-
  ### Next Steps

  We believe SORN DASH has a bright future, with more potential than we could unlock with our limited 10x funding. The technology behind SORN DASH could be extended to cover other privacy documents, such as privacy impact statements (PIAs). SORN DASH could be scaled even further to a point where it serves as a primary resource for the public to turn to when inquiring about the information the government may have about them. It could eventually contribute to implementation of the CASES Act of 2019. Mostly, we hope SORN DASH will continue to deliver value enough that it could influence upstream elements of PII management. For example, the structured data offered by SORN DASH could become the standard for future privacy documentation.
links:
  - link: https://all-sorns.app.cloud.gov/
    text: SORN Dashboard
  - link: https://18f.gsa.gov/2020/12/15/a-dashboard-for-privacy-offices/
    text: 18F blog entry on DevOps for Privacy Offices
phaseData:
  phase: "4"
  status: "3"
  summary: Graduated after Phase 4
projectType: Innovation
projectUrl: ""
summary:
  - text: |
      Privacy Offices play a critical role in protecting the privacy of Americans
  - text: |
      Privacy Offices are not always equipped with modern technology
  - text: |
      Small, targeted technical interventions can help privacy experts do their jobs more efficiently 
team:
  members: Andrew Hyder, Peter Rowland, Igor Korenfeld, Laura Gerhardt, Eric Richards, Qituwra Anderson,  Nikki Zeichner, Justin Koufopoulos, and Brian Fox
  submitter: Andrew Maier, TTS Alum
topics: Privacy managers
---