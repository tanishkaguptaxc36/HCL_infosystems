import React from 'react'
import Data from '../components/Data';

import Banner from '../components/Banner';


const PostalBallot = () => {
    const postal_ballot =[
        {
            title:'Postal ballot 2024-25 Results',
            url:'/pdfs/Postal_Ballot_2024_25.pdf',
        },
        {
            title:'Postal Ballot Notice 2024-25',
            url:'/pdfs/Postal_Ballot_2024_25.pdf',
        },
        {
            title:'Postal ballot- 2023-24- Newspaper advertisement',
            url:'/pdfs/Postal_Ballot_2024_25.pdf',
        },
        {
            title:'Postal Ballot Notice 2023-24',
            url:'/pdfs/Postal_Ballot_2024_25.pdf',
        },
    ]
  return (
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Postal Ballot"
        subtitle="Empowering Shareholders – Transparent Voting Processes"
        description="HCL Infosystems ensures that every shareholder has the opportunity to participate in key corporate decisions through fair and compliant postal ballot processes, upholding the principles of corporate democracy and governance."
      />
      <div><br></br></div>
    
      <Data
        title="Postal Ballot"
        pdfList={postal_ballot}
      />
    </div>
  )
}

export default PostalBallot
