import React from 'react'
import Data from '../components/Data';

import Banner from '../components/Banner';

const InfoUnderListing = () => {
    const infoUnderListing = [
        {
            title:'Regulation 30 Intimation – Order from Excise Department',
            url:'/pdfs/Regulation_30_Intimation.pdf',
        },
        {
            title:'Regulation 30 Intimation Order CGST Noida',
            url:'/pdfs/Regulation_30_Intimation.pdf',
        },
        {
            title:'Regulation 30 change in management',
            url:'/pdfs/Regulation_30_Intimation.pdf',
        },
        {
            title:'Financial year 2025-26',
            url:'/pdfs/Regulation_30_Intimation.pdf',
        },
        {
            title:'Regulation 30 update on litigation against ITI Limited',
            url:'/pdfs/Regulation_30_Intimation.pdf',
        },
    ]

    const Credit_Rating = [
        {
            title:'Credit rating 2024-25',
            url:'/pdfs/Credit_Rating_2024_25.pdf',
        },
        {
            title:'Credit Rating: 2022-2023',
            url:'/pdfs/Credit_Rating_2024_25.pdf',
        },
        {
            title:'Change in Credit Rating',
            url:'/pdfs/Credit_Rating_2024_25.pdf',
        },
    ]
  return (
   <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Information under Listing Regulation"
        
        description="HCL Infosystems provides timely and accurate disclosures as mandated by SEBI’s Listing Obligations and Disclosure Requirements (LODR), ensuring transparency, investor protection, and regulatory compliance at every step."
      />
      <div><br></br></div>
    
      <Data
        title="Information under Listing Regulation"
        pdfList={infoUnderListing}
      />
      <Data
        title="Credit Rating"
        pdfList={Credit_Rating}
      />
    </div>
  )
}

export default InfoUnderListing
