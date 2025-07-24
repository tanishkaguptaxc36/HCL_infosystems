import React from 'react'
import Data from '../components/Data';

import Banner from '../components/Banner';

const FinancialReports = () => {
    const Annual_Returns =[
        {
            title:'Annual Return – 2024-25',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return – 2023-24',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return – 2022-23',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return – 2021-22',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return ',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
    ]
    const subsidiaryReturn =[
         {
            title:'Annual Return 2024-25 – HCL Infotech ',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return 2023-24- HCL Infotech',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return-HCL Infotech',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual return – DDMS;',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Return – HCL Infotech;',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
    ]
    const Annual_Report =[
        {
            title:'Voting Results AGM 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Inspection Documents of Annual General Meeting 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Newspaper adv. for dispatch confirming dispatch of the notice of 38th',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'AGM',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual Report 2023-24',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Annual General Meeting Notice 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
    ]
    const Quarterly_results =[
        {
            title:'Unaudited Financial Results for the quarter ended 31st December, 2024 (standalone)',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Unaudited Financial Results for the quarter ended 31st December, 2024 (consolidated)',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Unaudited Financial Results for the quarter ended 30th September, 2024 (standalone)',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Unaudited Financial Results for the quarter ended 30th September, 2024 (consolidated)',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Unaudited Financial Results for the quarter ended 30th June, 2024 (standalone)',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
    ]
    const Shareholding_distribution = [
        {
            title:'SHP quarter ended March 2025',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'SHP quarter ended December 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'SHP quarter ended September 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'SHP quarter ended June 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'SHP quarter ended March 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
    ]
    const Subsidiary_reports =[
         {
            title:'HCL Infotech Financials March 2025',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'HCL Infotech Financials March 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'HCL Infotech Financials March 2023',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'HCL Infotech Limited March, 2022',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'HCL Learning Limited March, 2022',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
    ]
    const Related_party =[
        {
            title:'Related party disclosure March 2025',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Related party disclosure September 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Related party disclosure March 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Related party diclosure March 2023',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        {
            title:'Related party disclosure Sept 2023',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        ]

        const Secretarial_report =[
             {
            title:'Secretarial Compliance Report 2025',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Secretarial Compliance Report, 2024',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Secretarial Compliance Report, 2023',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Secretarial Compliance Report, 2022',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
         {
            title:'Secretarial Compliance Report March, 2021',
            url:'/pdfs/Annual_Return_2024_25.pdf',
        },
        ]
  return (
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Financial Reports"
        subtitle="Comprehensive Insights – Transparent Financial Performance"
        description="HCL Infosystems publishes detailed financial reports that reflect our operational results, fiscal discipline, and strategic direction—empowering investors with clarity and accountability.

"
      />
      <div><br></br></div>
    
      <Data
        title="Annual Returns"
        pdfList={Annual_Returns}
      />
      <Data
        title="annual Report"
        pdfList={ Annual_Report  }
      />
      <Data
        title="Quarterly Result"
        pdfList={Quarterly_results }
      />
       <Data
        title="Shareholding Distribution"
        pdfList={ Shareholding_distribution}
      />
       <Data
        title="Subsidiary Reports"
        pdfList={Subsidiary_reports}
      />
       <Data
        title="Related Party Transactions"
        pdfList={Related_party}
      />
       <Data
        title="Secretarial Compliance Report"
        pdfList={Secretarial_report}
      />
    </div>
  )
}

export default FinancialReports
