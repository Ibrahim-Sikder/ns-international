import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg"
        >
          Approved Factory
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          It will be our earnest endeavor to meet all the aspects of our buyers’
          code of conduct. We will only work with such factories which are
          approved by our buyers.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Child labor
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          Use of Child labor is not tolerated by our code. We do not work with
          such business partners who employ workers lesser than 15 years of age.
          Furthermore, no worker shall be younger than the mandatory school
          going age in the respective countries of operation. If the local law
          stipulates a higher minimum age than that of 15 years, then a more
          stringent limit is applicable.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Forced labor
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We do not work with any factory or organization which engages in
          forced or bonded labor.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Disciplinary practices
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We expect all our business partners to establish a clear disciplinary
          action procedure in line with the local law. We do not work with
          factories consisting of employees, who use abusive language, or
          practice corporal punishment, in the form of mental or physical abuse
          or any other coercive practices in any form against the workers.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Harassment & Abuse
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We do not work with any factory or organization who engages in any
          kind of harassment and abuse. It is strongly prohibited and
          contradicts the buyer Code of conduct, as per our business ethics as
          well as our local law
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Legal requirements
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We expect all our business partners to comply with the local laws
          applicable to the conduct of their business.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Ethical standards
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We make sure to identify and work with such organizations whose
          ethical standards are not divergent from ours.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Working hours
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We prefer to work with business partners who try and meet the 60 hour
          weekly limit. Whenever the regular work hour limit is exceeded, we
          expect the workers to be compensated as per the local law for the
          additional overtime hours. We accept flexibility in scheduling work
          hours, however we will not use business partners, who on a regular and
          systematic basis make the employees work more than the 60 hour weekly
          limit. Also, workers should be given one day off in seven days.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Wages and Benefits
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We only work with such business partners who compensate their workers
          as per the prevailing law and provide all benefits legally due to
          them.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Freedom of Association
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We respect the rights of workers to join an association of their
          choice and their right to Collective Bargaining. We only work with
          such business partners who share this same belief and they should
          ensure that workers who participate or associate with such movements
          are not discriminated against. No Punitive action should be taken
          against such workers for being a part of such association or movement
          as long as they don’t violate any of the local laws.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Discrimination
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          While being cognizant of cultural, religious and other differences, we
          firmly believe that workers should be given an opportunity to work,
          based on their skills only. Caste, Creed, Race etc: shall not be a
          part of the process used to decide employability.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Unauthorized Subcontract
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          Unauthorized subcontracting is considered a Zero Tolerance Violation.
          No vendor shall subcontract any aspect of our production without prior
          information to and approval from our company. Any violation will
          result in delisting of such factories.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Building and fire safety
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          e expect firmly that all our business partners ensure building and
          fire safety as per the local Law and the buyer’s requirement.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Health & safety
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We engage only with such factories who provide their workers a safe
          and healthy work environment.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg"
        >
          Environment
        </AccordionSummary>
        <AccordionDetails className="text-justify">
          We want all our business partners to ensure that their work process
          does not affect the environment adversely in any way. It is expected
          of all our business partners to meet the legal requirement on all
          environmental aspects and continuously strive to go beyond just
          meeting the law.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
