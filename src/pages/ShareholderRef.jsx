import React from 'react'
import Data from '../components/Data';
import Banner from '../components/Banner';

const ShareholderRef = () => {
    const Shareholder_Ref =[
        {
            title:'Unpaid Unclaimed Dividend 2017-18 as on date of AGM (27.09.2018)',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Unpaid Unclaimed Dividend 2016-17 as on date of AGM (14.09.2017)',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Unpaid unclaimed Dividend 2015-16 as on date on AGM (29.09.2016)',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Unpaid Unclaimed Dividend 2014-15 as on date of AGM (19.11.2015)',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Unpaid Unclaimed Dividend 2014-15 as on date of AGM (19.11.2015)',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
    ]
    const Shareholder_Referencer = [
         {
            title:'Shareholders referencer',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
    ]

    const physical_shareholder =[
         {
            title:'SEBI Master Circular – 7th May 2024',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Form_ISR-5',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Form_ISR-2',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'Form_ISR-1',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
         {
            title:'SEBI Circular- Important update on Choice of Nomination',
            url:'/pdfs/Unpaid_Unclaimed_Dividend_2017-18.pdf',
        },
    ]
  return (
     <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Shareholder Reference"
        subtitle="Essential Information – All in One Place"
        description="HCL Infosystems provides shareholders with easy access to essential information, policies, and procedures, enabling informed decisions and smooth interaction with the company."
      />
      <div><br></br></div>
    
      <Data
        title="Shareholder Refernce"
        pdfList={Shareholder_Ref}
      />
      <Data
        title="Shareholder Referncer"
        pdfList={Shareholder_Referencer}
      />
      <Data
        title="Physical Shareholder "
        pdfList={physical_shareholder}
      />
    </div>
  )
}

export default ShareholderRef
