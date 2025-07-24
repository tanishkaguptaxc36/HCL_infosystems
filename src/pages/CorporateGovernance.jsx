import React from 'react';
import Investerpg from '../components/Investerpg';
import Data from '../components/Data';
import Footer from "../components/Footer"

export default function CorporateGovernance() {
  const annualReports = [
    {
      title: 'Corporate Governance Report 2023-24',
      url: '/pdfs/CG_Report_2023_24.pdf',
    },
    {
      title: 'Corporate Governance Report 2022-23',
      url: '/pdfs/CG_Report_2022_23.pdf',
    },
    {
      title: 'Corporate Governance Report 2021-22',
      url: '/pdfs/CG_Report_2021_22.pdf',
    },
    {
      title: 'Corporate Governance Report 2020-21',
      url: '/pdfs/CG_Report_2020_21.pdf',
    },
    {
      title: 'Corporate Governance Report 2019-20',
      url: '/pdfs/CG_Report_2019_20.pdf',
    },
    {
      title: 'Corporate Governance Report 2018-19',
      url: '/pdfs/CG_Report_2018_19.pdf',
    },
    {
      title: 'Corporate Governance Report 2017-18',
      url: '/pdfs/CG_Report_2017_18.pdf',
    },
    {
      title: 'Corporate Governance Report 2016-17',
      url: '/pdfs/CG_Report_2016_17.pdf',
    },
    {
      title: 'Corporate Governance Report 2018-19',
      url: '/pdfs/CG_Report_2018_19.pdf',
    },
  ];

  const subsidiaryPolicies = [
    {
      title: 'Whistle Blower Policy – HCL Infotech',
      url: '/pdfs/whistle_blower.pdf',
    },
  ];

  const BoardMeeting =[
    {
      title: 'Board Meeting Notice – May, 2025',
      url: '/pdfs/whistle_blower.pdf',
    },

    {
      title: 'Board Meeting Notice – February, 2025',
      url: '/pdfs/whistle_blower.pdf',
    },

    {
      title: 'Board Meeting Notice – November, 2024',
      url: '/pdfs/whistle_blower.pdf',
    },

    {
      title: 'Board Meeting Notice – August, 2024',
      url: '/pdfs/whistle_blower.pdf',
    },

    {
      title: 'Board Meeting Notice – May, 2024',
      url: '/pdfs/whistle_blower.pdf',
    },

  ]

  const quaterlyReport= [
    
{ title:"CGR quarter ended June 2024",
  url: '/pdfs/cgr+data.pdf'
},

{ title:"CGR quarter ended September 2024",
  url: '/pdfs/cgr+data.pdf'
},

{ title:"CGR quarter ended December 2024",
  url: '/pdfs/cgr+data.pdf'
},

{ title:"Integrated governance quarter and year ended March 2025",
  url: '/pdfs/cgr+data.pdf'
},

{ title:"CGR quarter and year ended March 2024",
  url: '/pdfs/cgr+data.pdf'
},
 ]

 const noticeofResign= [
    
{ title:"Mr. Dilip Kumar Srivastava ",
  url: '/pdfs/cgr+data.pdf'
},
{ title:"Mr. Rangarajan Raghavan ",
  url: '/pdfs/cgr+data.pdf'
},
{ title:"Mr. Dhirendra Singh ",
  url: '/pdfs/cgr+data.pdf'
},
{ title:"Mr. V N Koura ",
  url: '/pdfs/cgr+data.pdf'
},
 ]

 

  return (<>
    <div className=" min-h-screen text-white px-4 md:px-20 py-10">
      <Investerpg />

      <h1 className="text-3xl font-bold mb-6 text-white">
        Corporate Governance
      </h1>

      <Data
        title="Subsidiary Policies"
        pdfList={subsidiaryPolicies}
      />

      <Data
        title="Annual Corporate Governance Report"
        description="Download the annual corporate governance reports below:"
        pdfList={annualReports}
      />

      <Data
        title="Board Meeting Notices & Advertisements"
        pdfList={BoardMeeting}
      />

      <Data
        title="Quarterly/Six Months/Yearly ended Corporate Governance Report"
        pdfList={quaterlyReport}
      />

      <Data
        title="Notice of Resignation"
        pdfList={noticeofResign}
      />

      
    </div></>
  );
}
