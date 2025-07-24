import React from 'react'
import Data from '../components/Data';
import Banner from '../components/Banner';

const FinancialPressRel = () => {
    const Financial_press_Release = [
        {
            title: 'Investor Pack for Q4FY25',
            url: '/pdfs/Investor_Pack_Q4FY25.pdf',

        },
         {
            title: 'Investor Pack for Q3FY25',
            url: '/pdfs/Investor_Pack_Q4FY25.pdf',

        },
         {
            title: 'Investor Pack for Q2FY25',
            url: '/pdfs/Investor_Pack_Q4FY25.pdf',

        },
         {
            title: 'Investor Pack for Q1FY25',
            url: '/pdfs/Investor_Pack_Q4FY25.pdf',

        },
         {
            title: 'Investor Pack for Q4FY24',
            url: '/pdfs/Investor_Pack_Q4FY25.pdf',

        },
    ]
  return (
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Financial Press Release"
        subtitle="Reliable Financial Disclosures – Timely & Transparent"
        description="HCL Infosystems remains committed to providing accurate, timely, and transparent financial updates. Our results reflect a focus on operational excellence, strategic growth, and long-term value creation for all stakeholders."
      />
      <div><br></br></div>
    
      <Data
        title="Financial Press Release"
        pdfList={Financial_press_Release}
      />
    </div>
  )
}

export default FinancialPressRel
