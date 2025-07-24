// TeamSection.js
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "../components/TeamCard";
import MonikaSingh from "../assets/monika_singh.jpg";
import rajSachdeva from "../assets/raj_sachdeva.jpg";
import ritaGupta from "../assets/ritaGupta.jpg";
import nikhilSinha from "../assets/NikhilSinha.jpg";
import kirtiDawar from "../assets/kirtiKumar.png";
import CVRaghu from "../assets/CVRaghu.png";
import pawan from "../assets/pawankDanwar.jpeg";
import neelesh from "../assets/neeleshAgg.jpg";
import alokSahu from "../assets/alokSahu.jpg";

// Animation logic
const cardVariants = {
  offscreen: {
    y: 200,
    opacity: 0,
    scale: 0.85,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.900,
    },
  },
  retract: {
    y: 100,
    scale: 0.8,
    opacity: 0.1,
    transition: { type: "spring", duration: 0.5 },
  },
};

// Team and board data with color
const teamData = [
  {
    image: MonikaSingh,
    name: "Monika Singh",
    designation: "Head, Human Resource",
    details: `Monika Singh holds the position of the Head of Human Resources at HCL Infosystems Limited. She brings about 20 years of rich experience in Human Resources and Internal communications. Her career spans multiple assignments including Business partnering, Learning and Development, Diversity, Talent Acquisition, and Talent Management in different Businesses in HCL. She joined HCL in the year 2007. Monika has completed her Masters in Political science from Delhi University and is an alumnus of XLRI. Prior to HCL she has worked with companies such as ADECCO India and Encyclopaedia Britannica.`,
    bgColor: "linear-gradient(120deg, #d97706 60%, #fde68a 100%)",
  },
  {
    image: alokSahu,
    name: "Mr. Alok Sahu",
    designation: "Chief Financial Officer",
    details: `Alok Sahu is the Chief Financial Officer of HCL Infosystems Limited. He is a Chartered Accountant by profession, is a finance professional who has over 25 years of extensive experience in spearheading financial/ accounting functions, Strategic Planning and implementation, Mergers & acquisitions and Treasury Management. He has been associated with HCL Infosystems since 1995. Alok is a strategic planner with proven ability to develop short- & long-term strategies resulting in improved operations and enhancing the overall efficiency of the organization. He is responsible for providing leadership to the Corporate Finance Team including Finance Shared Services. He will also lead global finance operations of the company.`,
    bgColor: "linear-gradient(120deg, #60a5fa 75%, #818cf8 100%)",
  },
  {
    image: rajSachdeva,
    name: "Mr. Raj Sachdeva",
    designation: "Manager",
    details: `Raj Sachdeva is the Manager of HCL Infosystems Limited. He has been associated with HCL Infosystems since 2019. As a global finance leader with 25 years of industry experience, Raj has extensive experience with global companies including corporate governance, establishing a solid foundation of compliances and internal controls, mergers and acquisitions, financial operations, financial accounting and reporting. He has a proven track record of being a business partner, partnering with IT experts, implementing digital tools. Raj is a commerce graduate from Delhi University and a Chartered Accountant.`,
    bgColor: "linear-gradient(120deg, #dc2626 65%, #fecaca 100%)",
  },
];

const boardData = [
  {
    image: ritaGupta,
    name: "Ms. Rita Gupta",
    designation: "Non Executive Director",
    details: `Ms. Rita Gupta is a finance professional with over 30 years of experience. Her expertise spans the entire gamut of finance, including Business Finance, Controllership, Treasury, Risk Management and Strategic Initiatives. She has been associated with HCL for almost the whole of her professional career. Rita has been instrumental in developing the existing and new businesses of HCL and has been involved across various functions, including financial planning, fund raising, investment management, forex, and business finance. Apart from HCL, Rita has also been associated with several Shiv Nadar Foundation initiatives, handling the initial phase of investment planning and strategy. She is a qualified Chartered Accountant from the Institute of Chartered Accountants of India and a Graduate in Law.`,
    bgColor: "linear-gradient(120deg, #f59e42 60%, #fff7ed 100%)",
  },
  {
    image: nikhilSinha,
    name: "Dr. Nikhil Sinha",
    designation: "Non Executive Chairman",
    details: `Nikhil Sinha is Chief Executive Officer of GSVlabs, a global innovation platform and Partner at Global Silicon Valley, a leading venture capital firm. Prior to joining GSVlabs as CEO in May 2018, Nikhil served as the Chief Business and Content Officer at Coursera, the world’s largest higher education platform. He continues to support Coursera as Senior Adviser to the CEO. Nikhil is a leading international expert on the information and communication technology industries and has extensive experience as an academician and corporate executive. In his academic career, Nikhil was the founding President of the Shiv Nadar University from 2011 to 2015, Associate Dean for Academic Affairs at the University of Texas from 2002 to 2005 and a faculty member at the University from 1991 to 1999. Outside the academy, Nikhil has served in senior positions in several organizations. In the past he has been President & Co-CEO of Silverskills, Executive Vice President of eFunds Corporation, President & CEO of iDLX Technology Partners, and a Venture Partner at Adams Capital Management. Nikhil began his professional life in the Government of India’s Ministry of Information & Broadcasting in 1983. Nikhil serves on several corporate and non-profit boards. He is Chairman of the Board of HCL Infosystems, a Director of Silverskills Pvt. Ltd. and a member of the Advisory Board of the Annenberg School for Communication at the University of Pennsylvania. He is a Director Emeritus of the US-India Business Council and a member of the Higher Education Committee of the Federation of Indian Chamber of Commerce and Industry. Nikhil has an M.A. and Ph.D. from the Annenberg School for Communication at the University of Pennsylvania and a B.A. (Honors) from St. Stephen’s College,Delhi University. He has published numerous articles and papers in scholarly journals and conferences and has been awarded a number of research, publishing and academic grants and awards.`,
    bgColor: "linear-gradient(120deg, #8b5cf6 40%, #38bdf8 100%)",
  },
  {
    image: kirtiDawar,
    name: "Kirti Kumar Dawar",
    designation: "Non Executive Director",
    details: `Mr. Kirti Kumar Dawar worked in the Corporate Sector with Shriram Refrigeration Ltd., now SIEL a Charatram Group Co. and Mohan export, international trading company, from 1974 to 1983. He worked in the International Trade Business through his 9 years in the company. Afterwards, he started his entrepreneurship journey in 1984 as a partner with United Exports. In 1991, Mr. Dawar started Jaishree exports, an ISO 9001: 2015, ISO 22000: 2018 firm that was recognized and continues to be a Star Export House, exporting to multiple countries in Middle east, USA, Canada, and Europe. Mr. Dawar brings 45 years of rich experience in International Trade, Finance, and Investment Management. He has an excellent mix of corporate & entrepreneurship world. He holds a master’s degree in economics from Delhi University and LLB from Faculty of Law, Delhi University`,
    bgColor: "linear-gradient(120deg, #14b8a6 50%, #99f6e4 100%)",
  },
  {
    image: CVRaghu,
    name: "Mr. C.V. Raghu",
    designation: "Non Executive Director",
    details: `Mr. C.V. Raghu was the Group General Counsel (Global Role), Motherson Group. He drove the Legal, Secretarial, Regulatory, Compliance and Governance processes across the globe for the Group. During his tenure at Motherson he has extensively been associated in its growth, strategy and has led all its acquisitions ( which included acquiring listed entities, large operating entities spanning across multiple jurisdictions etc), fund raising (from ordinary debt to structured debts, issuance of commercial papers to issuance of global bonds listed in international stock exchanges), restructuring ( from listed entities to collapsing special purpose vehicles in India and abroad) and large transactions across the globe. He has rich and varied experience for nearly over three decades in the legal domain that encompasses a diverse set of industries including large business conglomerates like the Max Group, American Express, Hindustan Unilever. He has served on several Boards & Committees since 1998 and also been on the Advisory Board of various Institutions. He was a member in the working committee of Insurance Regulatory and Development Authority of India for harmonizing Corporate Governance Guidelines for the Insurance sector and on CII task force on dispute resolution. Mr. Raghu is the President and Founding member of the General Counsel’s Association of India (“GCAI”). He holds bachelor’s degree in science from Utkal University, Cuttack, LLB from Delhi University and P.G. Diploma in industrial relation and personnel management from Sardar Patel College of communication & Management, New Delhi and a Certified Associate of Indian Institute of Bankers (CAIIB).  He is a trained Six-Sigma Black Belt and has also undertaken extensive classroom trainings on Negotiating skills and Techniques organized by George Washington University at Harvard Law School`,
    bgColor: "linear-gradient(120deg, #2563eb 75%, #6ee7b7 100%)",
  },
  {
    image: pawan,
    name: "Pawan K Danwar",
    designation: "Non Executive Director",
    details: `Mr. Pawan K. Danwar is the Executive Vice-President & CFO of HCL Corporation and Shiv Nadar Foundation. He brings over 24 years of vast experience to HCL. His association with the HCL Group spans over 18 years and he has served in different operational and strategic finance profiles within HCL; such as Business Finance, Corporate Restructuring, Acquisition & Business Integration, Treasury ,Planning & Strategy, Commercial, Business Development, Secretarial, Legal & Corporate Compliance and Investor Relationship. He has not only been instrumental in shaping different financial strategies for HCL but he has also been associated with various new business initiatives. Mr. Danwar is a qualified Chartered Accountant & Company Secretary.`,
    bgColor: "linear-gradient(120deg, #0ea5e9 30%, #f472b6 100%)",
  },
  {
    image: neelesh,
    name: "Neelesh Agarwal",
    designation: "Non Executive Director",
    details: `Neelesh Agarwal is a Taxation & Finance professional, serving as President –Taxation with HCL Corporation, a promoter company of HCL group. His association with the HCL Group spans over for past three decades and has served in varied lead profiles in the realm of corporate tax planning and efficiency, corporate restructuring and business integration, accounts, corporate laws & regulatory compliances and realties. Entrepreneurial orientation, strong commercial approach with operational excellence have been his key strengths and driving force. He has been contributory in finalizing and executing various financial & business strategies of the HCL group. Mr. Agarwal is also associated with Shiv Nadar Foundation (SNF), one of the India’s largest philanthropic initiatives for nation building through transformational leadership & education, advising and overseeing on financial, taxation and compliance matters of strategic nature. On professional front he is a Chartered Accountant.`,
    bgColor: "linear-gradient(120deg, #fde68a 10%, #fbbf24 100%)",
  },
];

const committees = [
  {
    title: "Accounts & Audit Committee",
    members: [
      { image: nikhilSinha, name: "Dr. Nikhil Sinha", designation: "Chairperson", bgColor: "linear-gradient(120deg, #f472b6 0%, #a5b4fc 100%)", status:"true" },
      { image: CVRaghu, name: "Mr. Raghu Venkat Chivukula", designation: "Member", bgColor: "linear-gradient(120deg, #60a5fa 60%, #dbeafe 100%)", status:"true" },
      { image: kirtiDawar, name: "Mr. Kirti Kumar Dawar", designation: "Member", bgColor: "linear-gradient(120deg, #facc15 80%, #bef264 100%)", status:"true" },
      { image: pawan, name: "Mr. Pawan Kumar Danwar", designation: "Member", bgColor: "linear-gradient(120deg, #b91c1c 60%, #fecaca 100%)" , status:"true"},
    ],
    color: "#a7c3fc",
  },
  {
    title: "Stakeholders Relationship Committee",
    members: [
      { image: kirtiDawar, name: "Mr. Kirti Kumar Dawar", designation: "Chairperson", bgColor: "linear-gradient(120deg, #a1a1aa 60%, #818cf8 100%)" , status:"true"},
      { image: neelesh, name: "Mr. Neelesh Agarwal", designation: "Member", bgColor: "linear-gradient(120deg, #fbbf24 80%, #fef3c7 100%)" , status:"true"},
      { image: pawan, name: "Mr. Pawan Kumar Danwar", designation: "Member", bgColor: "linear-gradient(120deg, #0ea5e9 30%, #f472b6 100%)" , status:"true"},
    ],
    color: "#addbfe",
  },
  {
    title: "Nomination & Remuneration Committee",
    members: [
      { image: CVRaghu, name: "Mr. Raghu Venkat Chivukula", designation: "Chairperson", bgColor: "linear-gradient(120deg, #c026d3 70%, #a7f3d0 100%)" , status:"true"},
      { image: nikhilSinha, name: "Dr. Nikhil Sinha", designation: "Member", bgColor: "linear-gradient(120deg, #818cf8 0%, #a7f3d0 100%)" , status:"true"},
      { image: pawan, name: "Mr. Pawan Kumar Danwar", designation: "Member", bgColor: "linear-gradient(120deg, #f43f5e 80%, #fbbf24 100%)" , status:"true"},
    ],
    color: "#cacff7",
  },
  {
    title: "Finance Committee",
    members: [
      { image: nikhilSinha, name: "Dr. Nikhil Sinha", designation: "Chairperson", bgColor: "linear-gradient(120deg, #a7f3d0 60%, #f59e42 100%)" , status:"true"},
      { image: ritaGupta, name: "Ms. Rita Gupta", designation: "Member", bgColor: "linear-gradient(120deg, #bef264 35%, #a1a1aa 100%)" , status:"true"},
      { image: pawan, name: "Mr. Pawan Kumar Danwar", designation: "Member", bgColor: "linear-gradient(120deg, #fb7185 40%, #fef9c3 100%)" , status:"true"},
    ],
    color: "#b0bff4",
  },
];

// Animation wrapper for each card
const AnimatedCard = ({ bgColor, children, custom }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="offscreen"
      animate={inView ? "onscreen" : "retract"}
      style={{
        background: bgColor,
        borderRadius: 20,
        padding: 20,
        overflow: "hidden",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 300,
        minHeight: 420,
        boxShadow: "0 6px 24px rgba(0,0,0,0.09)",
      }}
      className={`team-card-motion-${custom}`}
    >
      {children}
    </motion.div>
  );
};

// Section wrapper
const sectionBox = (children, bg, title) => (
  <div style={{ background: bg, padding: "2.5rem" }}>
    <h1 className="text-3xl font-bold text-center text-gray-800 underline mb-10">
      {title}
    </h1>
    <div className="flex flex-wrap gap-6 justify-center">{children}</div>
  </div>
);

// Main export
const TeamSection = () => (
  <>
    {sectionBox(
      teamData.map((member, i) => (
        <AnimatedCard key={member.name} bgColor={member.bgColor} custom={i}>
          <TeamCard {...member} />
        </AnimatedCard>
      )),
      "#b8c1e2",
      "Executive Team"
    )}
    {sectionBox(
      boardData.map((member, i) => (
        <AnimatedCard key={member.name} bgColor={member.bgColor} custom={i}>
          <TeamCard {...member} />
        </AnimatedCard>
      )),
      "#f0f4fc",
      "Board of Directors and its Committees"
    )}
    {committees.map((committee, idx) =>
      sectionBox(
        committee.members.map((member, i) => (
          <AnimatedCard key={member.name} bgColor={member.bgColor} custom={i}>
            <TeamCard {...member} />
          </AnimatedCard>
        )),
        committee.color,
        committee.title
      )
    )}
  </>
);

export default TeamSection;
