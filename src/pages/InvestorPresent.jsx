import React from 'react'
import Data from '../components/Data';

import Banner from '../components/Banner';






const InvestorPresent = () => {

  const InvestorPresentations = [
    {
      title: 'Transcript of Q3FY20 Results',
      url: '/pdfs/CG_Report_2023_24.pdf'},
      {
      title: 'Analyst/Investor Update Q3FY20',
      url: '/pdfs/CG_Report_2023_24.pdf'},
      {
      title: 'Transcript of Q2FY20 Results',
      url: '/pdfs/CG_Report_2023_24.pdf',},
      {
      title: 'Analyst/Investor Update Q2FY20',
      url: '/pdfs/CG_Report_2023_24.pdf',},
      {
      title: 'Transcript of Q1FY20 Results',
      url: '/pdfs/CG_Report_2023_24.pdf',}]
  return (
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
      <Banner
        title="Investor Presentations"
        subtitle="Our Investor Relations – Clear and Direct"
        description="HCL Infosystems’ fair practices emanating from core values of transparency, integrity, honesty and accountability ensure that we always deliver maximum value to all our stakeholders."
      />
      <div><br></br></div>
    
      <Data
        title="Investor Presentation"
        pdfList={InvestorPresentations}
      />
    </div>
  )
}

export default InvestorPresent;
