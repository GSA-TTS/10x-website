---
permalink: false
report_parent: fy21

nav_order: 2
nav_label: "FY21 by the Numbers"
nav_id: "fy21-by-the-numbers"

class: white

chartTitle: 10x Investment Snapshot 
chartDescription: "Chart of projects kicked off, closed out, and ideas received, by fiscal year from 2017 to 2021"

chartData:
- name: FY17
  projects_kicked_off: 20
  projects_closed_out: 17
  ideas_received: 36
- name: FY18
  projects_kicked_off: 28
  projects_closed_out: 23
  ideas_received: 146
- name: FY19
  projects_kicked_off: 53
  projects_closed_out: 51
  ideas_received: 220
- name: FY20
  projects_kicked_off: 91
  projects_closed_out: 88
  ideas_received: 365
- name: FY21
  projects_kicked_off: 47
  projects_closed_out: 46
  ideas_received: 250

chartLegend:
  projects_kicked_off:
    color: "#C2C2F5"
    label: "Projects Kicked Off" 
  projects_closed_out:
    color: "#45D9D9"
    label: "Projects Closed Out" 
  ideas_received:
    color: "#383577"
    label: "Ideas Received" 

chartYMax: 400

# cards
reasonsForRejection:
- color: '1'
  percent: '48'
  heading: Demand & Adoption
  body: |-
    - Low, no, or unclear demand for service
    - There is not a clear problem or practical solution
    - Potential customers aren’t yet able/willing to adopt solution
    - Potential customers don’t see the problem as urgent or disagree that the problem exists
- color: '2'
  percent: '26'
  heading: Feasibility
  body: |-
    - Business model is unclear or untenable
    - Potential benefits are not sufficient enough to justify further investment
- color: '3'
  percent: '11'
  heading: No Further Funding Necessary
  body: "- The project has achieved its goals and delivered value; no further investment
    from 10x necessary"
- color: '4'
  percent: '7'
  heading: Redundancy
  body: "- Someone else is doing this (or should already be doing it) and 10x doesn’t
    need to"
- color: '5'
  percent: '4'
  heading: Merged
  body: "- This project was merged into another 10x project"
- color: '6'
  percent: '4'
  heading: Other Funds
  body: "- This project will receive other funding from elsewhere"


---
## FY21 by the Numbers

- <span class="text-bold">250</span> ideas received - average between FY17 - FY20 = 192
- <span class="text-bold">47</span> projects kicked off - average between FY17 - FY20 = 48
- <span class="text-bold">46</span> project endings/closeouts - average between FY17 - FY20 = 45


{% include "components/report-bar-chart.html" %}

This chart shows the number of ideas that we received, the number of projects kicked off in our various phases, and how many closed out over the years. In FY21, we held only one round of idea solicitation and evaluation, rather than the two rounds we’ve conducted before.

<span class="text-bold">Fun facts: Across all the collective projects we kicked off in FY21, our 10x project teams have conducted more than:</span>

- <span class="text-bold">115+</span> unique organization collaborations
- <span class="text-bold">400+</span> user and subject-matter expert interviews

### Project Endings

Only one third of 10x projects advance past any particular phase. Some projects end after Phase 1, some after Phase 2, and so on. We do this as part of our due diligence in making sure that we are only investing in the most promising, impactful projects.

In FY21, we began tracking and analyzing data on why 10x projects end at particular phases, so we could identify trends and solutions for future teams. This analysis confirmed the most common reasons are lack of demand and lack of a dedicated product owner. The breakdown of why 10x decides not to fund work for additional phases is below.


<div class="grid-row">
{%- for card in reasonsForRejection -%}
  <div class="usa-card usa-card--no-media ReasonForRejection grid-col-12 desktop:grid-col-4">
    <div class="usa-card__container">
      <div class="usa-card__body">
        <div class="card_color--scheme-{{- card.color -}}">
          <div class="borderPercent grid-col-12 desktop:grid-col-4" style="width: {{- card.percent -}}%;"></div>
          <div class="border"></div>
          <div class="percent">{{- card.percent -}}%</div>
          <div class="heading">{{- card.heading -}}</div>
          {{- card.body | markdownify -}}
        </div>
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>

### Project Funding

The 10x budget is funded through the Federal Citizen Service Fund (FCSF), a fund appropriated by Congress that supports public-facing services and agency-facing programs that drive Government-wide transformation. Here’s a look at how we invested in FY21

In FY21, we:

- funded 22 Phase One projects.
- held one round of idea evaluation.
- eliminated funding for Phase Four projects. Instead, we committed to exploring other funding avenues to help our projects scale beyond Phase Three.



<div class="ReportTable">
  <h3 class="ReportTable__heading">10x Projects</h3>

  <table class="usa-table usa-table--borderless">
    <tr>
      <th scope="col">Phase</th>
      <th scope="col"># of Projects</th>
      <th scope="col">Total $</th>
    </tr>
    <tbody>
      <tr>
        <td>Phase One</td>
        <td>22</td>
        <td>$420,000</td>
      </tr>
      <tr>
        <td>Phase Two</td>
        <td>13</td>
        <td>$1,672,400</td>
      </tr>
      <tr>
        <td>Phase Three</td>
        <td>6</td>
        <td>$2,507,954</td>
      </tr>
      <tr>
        <td>Phase Four</td>
        <td>0</td>
        <td>$0</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>41</td>
        <td>$4,600,354</td>
      </tr>
    </tbody>
  </table>
</div>

The chart above illustrates the 41 projects that received obligated funding in FY21. This number is different from the total number of projects kicked off in FY21 (which was 47) because we started 6 projects in FY21 that received obligated funding from FY20.


<div class="ReportBudgetTable">
  <h3 class="ReportBudgetTable__heading">Other DSF Commitments</h3>
  <table class="usa-table usa-table--borderless">
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Total $</th>
    </tr>
    <tbody>
      <tr>
        <td class="highlight"><span class="text-bold">Total</span></td>
        <td class="highlight"><span class="text-bold">$808,889</span></td>
      </tr>
    </tbody>
  </table>
</div>

In addition to our usual appropriations, we were entrusted with $5m in funding via the [TTS American Rescue Plan](https://www.gsa.gov/technology/government-it-initiatives/tts-american-rescue-plan) ([TTS ARP](https://www.gsa.gov/technology/government-it-initiatives/tts-american-rescue-plan)) at the end of FY21. The funding will be used in FY22 to help accelerate TTS’ efforts to reimagine digital services delivery. This includes supporting TTS’ process and execution on their ARP-aligned projects.

Also, at the end of FY21, we used some of this ARP funding to advance a few existing projects that are already well-aligned to the ARP goals, including <span class="text-italic">Government Notification Services</span>.

