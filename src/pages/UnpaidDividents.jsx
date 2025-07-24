import React from 'react'
import Data from '../components/Data';
import Banner from '../components/Banner';

const UnpaidDividents = () => {
    const UnpaidDividents =[
        {
            title:'List of Shareholders w.r.t Transfer of Equity Shares to IEPF Account',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'for the Dividend – 2011-12 3rd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'Newspaper advertisement – Transfer of Equity Shares to IEPF suspense Account – 2011-12 3rd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders w.r.t Transfer of Equity Shares to IEPF Account for the Dividend – 2011-12 2nd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        
        
        
        {
            title:'List of Shareholders w.r.t Transfer of Equity Shares to IEPF Account for the Dividend – 2011-12 1st Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders w.r.t Transfer of Equity Shares to IEPF Account for the Dividend – 2010-11 Final',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'Newspaper advertisement – Transfer of Equity Shares to IEPF suspense Account – 2010-11 Final and 2011-12 1st Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders w.r.t Transfer of Equity Shares to IEPF Account for the Dividend – 2010-11 3rd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
         ]
         const Unpaid_Unclaimed = [
            {
            title:'List of Shareholders for 2011-12 3rd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders for 2011-12 2nd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders for 2011-12 1st Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders for 2010-11 Final',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
        {
            title:'List of Shareholders for 2010- 11 3rd Interim',
            url:'/pdfs/Unpaid_Dividends.pdf',
        },
         ]
  return (
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Unclaimed / Unpaid Dividends & Shares"
        subtitle="Ensuring Access – Transparent Tracking & Timely Updates"
        description="HCL Infosystems is committed to helping shareholders recover unclaimed dividends and shares by maintaining updated records and providing clear guidance in accordance with statutory requirements."
      />
      <div><br></br></div>
    
      <Data
        title="Unclaimed / Unpaid Dividends & Shares"
        pdfList={UnpaidDividents}
      />
      <Data
        title="Unpaid Unclaimed Dividend transferred to IEPF"
        pdfList={Unpaid_Unclaimed}
      />
    </div>
  )
}

export default UnpaidDividents
