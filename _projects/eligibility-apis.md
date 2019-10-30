---
layout: project
title: Eligibility APIs Initiative
deck: "Helping states turn federal eligibility policy into action"
permalink: /projects/eligibility-apis
description: "Helping states turn federal eligibility policy into action"
phase: 4
bg_color: white-cool-3
graphic_outer_bg: indigo-warm-50v
graphic_middle_bg: indigo-warm-70
graphic_inner_bg: orange-40v
show_navbar: true
github_repo: https://github.com/18F/eligibility-rules-service/blob/master/README.md
blurb: "The Eligibility APIs Initiative is exploring how federal eligibility-based programs could use a centralized web service—an eligibility API—to deliver machine-readable policy that state systems can integrate with their eligibility & enrollment systems and act on.

In this new model, policy changes made at the federal level would propagate out to states, including state implementation variations, rather than states each having to undertake a costly, redundant, time-consuming, error-prone process to update their systems individually."
---

## Overview

<img class="float-right margin-x-2 width-card tablet:width-mobile" src="/assets/img/projects/eligibility-api-logo.png" alt="Eligibility APIs Logo">


**The [Eligibility APIs Initiative](#project-description) (formerly the Eligibility Rules Service)** is exploring how federal eligibility-based programs could use a centralized web service—an eligibility API—to deliver machine-readable policy that state systems can integrate with their eligibility & enrollment systems and act on.

In this new model, policy changes made at the federal level would propagate out to states, including state implementation variations, rather than states each having to undertake a costly, redundant, time-consuming, error-prone process to update their systems individually.

After having shown the feasibility of this approach in [two prior phases](#What-weve-done-so-far), **[we are now seeking three new partner programs](#were-seeking-new-partners)** _(or program sub-types)_. We want to partner at the federal and state levels to understand the unique challenges of each program and to learn how to make this model viable across the wide variety of eligibility-based scenarios.

## What we believe this model can achieve

- **Cost-efficiency:** A federally-built API that can deliver eligibility rules to many state systems at once dramatically reduces the complexity and cost of building and maintaining state systems, because those systems no longer need to build or maintain eligibility rules in their own rules engine product.

- **Reduced risk:** Centralizing eligibility business logic at the federal level provides more flexibility and reduces risk for states who need to modernize their benefits systems. Instead of modernizing an entire massive system in a large risky project, states can strategically disconnect and reconnect pieces of the system gradually, significantly reducing their risk.

- **Integrity:** In this model, program eligibility rules are centrally maintained by the Eligibility API at the federal level. If rules or policy change, those changes can be made at the API level and will propagate out to all connected states automatically. This greatly reduces the risk of state systems being out of sync with federal rules.

- **Transparency:** Because the eligibility rules are written in publicly-available code, people can view them and confirm that systems are behaving as expected. There's no "black box" where eligibility criteria are hidden away; instead, the programatic rules are open to public review.

- **Innovation:** An API is a technique that is widely used within modern digital service design to provide controlled, secure, flexible access to a system's data. Using an API to deliver eligibility rules would create an open canvas for creative technologists and civil servants to come up with exciting and powerful ideas to serve the public that we haven't even thought of yet.

### What we've done so far

Through two projects, we have collaborated with federal and state staff to build two proofs-of-concept for the WIC and D-SNAP programs. This work has validated our technical concerns around building Eligibility APIs; most of our focus is now on program applicability and state integrations.

1. **For our first project**, we developed a prototype Eligibility API for *The Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)*. This work allowed us to show that we could accommodate varied state policy options into a single Eligibility API ruleset. _(Note: The prototype is for demonstration purposes only and is not an official interpretation of policy.)_ [Repo](https://github.com/18F/wic_rules) / [API](https://github.com/18F/wic_rules#using-the-api) / [Demo form](https://eligibility-rules-form.fr.cloud.gov/)

2. For our second project, we developed an Eligibility API for *Disaster Supplemental Nutrition Assistance Program (D-SNAP)* as well as an online Regististration App that uses the API. This is ongoing pending approval to proceed to the Beta stage. [Repo](https://github.com/18F/dsnap_rules) / [API](https://github.com/18F/dsnap_rules#development) / [Registration App](https://dsnap-rules.app.cloud.gov/)


For more details, see [this project's wiki](https://github.com/18F/eligibility-rules-service/wiki).

## We\'re seeking new partners

If you're part of a Federal human/social services agency, we're interested in talking with you about your Eligibility & Enrollment system(s), IT modernization plans, and general program eligibility determination methods.

Our partnerships have been critical to our current understanding of how eligibility policy works, and we want to partner with other agencies to learn about their unique situations and make sure our solution works for them, too.

### What does partnering with us entail?

A successful Discovery stage partnership looks like this:

- **We learn about the program.** We build an understanding of the general way the program currently works, and what operational challenges it faces.
- **We learn the eligibility policy.** We ramp up on the program's eligibility criteria and develop a hypothesis as to whether it could be turned into a centralized eligibility API that also accounts for state-by-state variations.
- **We learn about the financial context.** We research, gather, and compare status quo costs with potential future cost benefits.
- **We build a prototype API.** We create a proof of concept to test our hypothesis about how well an API would work for the program's needs.
- **We make recommendations on how to proceed.** Based on what we've learned, we determine whether moving forward into an Alpha phase would be effective, and start outlining what an Alpha phase would look like.

We're funded to do this exploration through [10x](https://10x.gsa.gov), so there's **no cost to your program when you partner with us**. All we need is some of your time and a commitment to helping us better understand how eligibility policy works in your program. Based on our past partnerships this commitment has amounted to approximately 40-60 total hours from a policy subject matter expert, and a handful of hours from other subject matter experts, over ~8-10 weeks of calendar time.

## Want to know more?

- "Watch" or "star" the above repos
- Read our blog posts [Implementing rules without a rules engine](https://18f.gsa.gov/2018/10/09/implementing-rules-without-rules-engines/) and [Exploring a new way to make eligibility rules easier to implement](https://18f.gsa.gov/2018/10/16/exploring-a-new-way-to-make-eligibility-rules-easier-to-implement/)
- Email us at eligibility-apis-initiative@gsa.gov - we're always happy to speak with similarly-interested people!
