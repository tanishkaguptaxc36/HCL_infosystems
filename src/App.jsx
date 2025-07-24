import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import TeamSection from './pages/TeamSection';

import Form from './pages/Form.jsx';
import Home from './pages/Home.jsx';
import CorporateGovernance from './pages/CorporateGovernance.jsx';
import InvestorPresent from './pages/InvestorPresent.jsx';
import FinancialPressRel from './pages/FinancialPressRel.jsx';
import FinancialReports from './pages/FinancialReports.jsx';
import PostalBallot from './pages/PostalBallot.jsx';
import SchemeArrangement from './pages/SchemeArrangement.jsx';
import InfoUnderListing from './pages/InfoUnderListing.jsx';
import UnpaidDividents from './pages/UnpaidDividents.jsx';
import ShareholderRef from './pages/ShareholderRef.jsx';
import PublicNotice from './pages/PublicNotices.jsx';
import About_us_pg from './pages/About_us_pg.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        

        <Route path="/" element={<Home />}  />
        <Route path="/corporate-governance" element={<CorporateGovernance />} />
        <Route path="/InvestorPresent" element={<InvestorPresent />} />
        <Route path="/FinancialReports" element={<FinancialReports />} />
        <Route path="/FinancialPressRel" element={<FinancialPressRel />} />
        <Route path="/PostalBallot" element={<PostalBallot />} />
        <Route path="/SchemeArrangement" element={<SchemeArrangement />} />
        <Route path="/InfoUnderListing" element={<InfoUnderListing />} />
        <Route path="/UnpaidDividents" element={<UnpaidDividents />} />
        <Route path="/ShareholderRef" element={<ShareholderRef />} />
        <Route path="/Team" element={<TeamSection/>}/>
        <Route path="/investors" element={<CorporateGovernance/>}/>
        <Route path="/publicnotice" element={<PublicNotice/>}/>
        <Route path="/ContactUs" element={<Form />}  />
        <Route path="/About_us_pg" element={<About_us_pg />}  />

        
        
      </Routes>
      <Footer status={"true"}/>
      
    </>
  );
}

export default App;
