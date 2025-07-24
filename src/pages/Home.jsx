import React from 'react';

import CardGrid from '../components/Card';
import investorCards from '../routes/InvestorCards';
import HomeBanner from '../components/HomeBanner';
import TeamSection from './TeamSection.jsx';
import Footer from '../components/Footer.jsx';  

export default function Home() {
  return (
    <>
    <section id="home">    
    <div>
       <HomeBanner />
    </div>
    </section>

   
    <div className="text-white">
      
      
      <CardGrid cards={investorCards} />
    </div>

    <section id="team" >
      <TeamSection/>
      </section>

      
    </>
  );
}
