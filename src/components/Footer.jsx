import React from "react";
import { motion } from "framer-motion";

function Footer({status}) {
  const footerData = [
    {
      title: "Company",
      links: ["About Us", "Leadership", "Investor Relations", "Careers", "Press"],
    },
    {
      title: "Get in Touch",
      links: ["Contact Us", "Support", "Feedback", "FAQs", "Office Locations"],
    },
  ];

  return (
    <footer className="bg-[#f2f9ff] text-[#004b87] pt-8 px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        About HCL Infosystems
      </motion.h2>

      {/* Cards in a row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-7xl mx-auto mb-10"
      >
        {/* Info Cards */}
        {status?<><InfoCard
          title="Registrar & Share Transfer Agent"
          content={[
            "Link Intime India Pvt. Ltd.  Noble Heights, 1st Floor, Plot NH 2 C-1 Block LSC, Near Savitri Market Janakpuri, New Delhi - 110058",
            
            "Phone: +91-11-49411000",
            "Fax: +91-11-41410591",
            "Email: hcltech@linkintime.co.in",
          ]}
        />
        <InfoCard
          title="Nodal Officer"
          content={[
            "Name: Mr. Rahul Sharma",
            "Designation: Company Secretary",
            "Address: HCL Infosystems Ltd.-E-4,5,6, Sector 11, Noida, UP - 201301",
            
            "Email: nodalofficer@hcl.com",
            "Phone: +91-120-2526518",
          ]}
        /></>:null}
        

        {/* Link Cards */}
        {footerData.map((section, index) => (
          <FooterCard key={index} title={section.title} links={section.links} />
        ))}
      </motion.div>

      <p className="text-sm text-center text-[#336699] mt-8 mb-4">
        © {new Date().getFullYear()} HCL Infosystems Ltd. All rights reserved.
      </p>
    </footer>
  );
}

function FooterCard({ title, links }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "#e6f7ff" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="transition-all duration-300 p-4 rounded-xl bg-white/50 shadow-md"
    >
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-md">
        {links.map((link, idx) => (
          <li
            key={idx}
            className="transition-all duration-200 hover:text-blue-900 hover:font-bold hover:scale-105 transform origin-left cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function InfoCard({ title, content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: "#e6f7ff" }}
      transition={{ type: "spring", stiffness: 200 }}
      className="transition-all duration-300 p-4 rounded-xl bg-white/50 shadow-md"
    >
      <h4 className="text-lg font-semibold mb-3">{title}</h4>
      <ul className="space-y-1 text-sm">
        {content.map((line, index) => (
          <li
            key={index}
            className="transition-all duration-200 hover:text-blue-900 hover:font-bold hover:scale-105 transform origin-left cursor-pointer"
          >
            {line}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Footer;
