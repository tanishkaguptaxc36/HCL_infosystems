import React from 'react'
import Data from '../components/Data';

import Banner from '../components/Banner';

const SchemeArrangement = () => {
    const scheme_agreement = [
        {
            title: 'Final order',
            url: '/pdfs/Scheme_Agreement_Final_Order.pdf',
        },
        {
            title: 'II motion application',
            url: '/pdfs/Scheme_Agreement_Final_Order.pdf',
        },
        {
            title: 'HCL Infosystems Limited consolidated results;',
            url: '/pdfs/Scheme_Agreement_Final_Order.pdf',
        },
        {
            title: 'Digilife Distribution and Marketing Services Limited equity Shareholders result;',
            url: '/pdfs/Scheme_Agreement_Final_Order.pdf',
        },
        {
            title: 'Digilife Distribution and Marketing Services Limited Unsecured Creditors result;',
            url: '/pdfs/Scheme_Agreement_Final_Order.pdf',
        },
    ]
  return (
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Scheme Arrangement"
        subtitle="Strategic Restructuring – Designed for Growth & Efficiency"
        description="HCL Infosystems undertakes schemes of arrangement in line with regulatory standards to optimize business structure, enhance stakeholder value, and ensure long-term operational and financial efficiency."
      />
      <div><br></br></div>
    
      <Data
        title="Scheme Arrangement"
        pdfList={scheme_agreement}
      />
    </div>
  )
}

export default SchemeArrangement
