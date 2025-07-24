import react from "react";
import Data from '../components/Data';
import Banner from '../components/Banner';

export default function PublicNotice(){

    const data=[{title:'Notice to Members of the Employees’ Provident Fund Trust',
        url:'../pdfs/Annual_Return_2024_25.pdf'
                }]
    return <>
    <div className="min-h-screen text-white px-4 md:px-20 py-10">
            <Banner
                title="Public Notices"
                subtitle=""
                description=""
            />
            <div><br></br></div>

            <Data
                title="Notice to Members of the Employees’ Provident Fund Trust"
                pdfList={data}
            />


      
    </div>
    
    
    </>
}