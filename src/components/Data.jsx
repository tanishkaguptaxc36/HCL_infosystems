import React, { useState } from 'react';


export default function Data({ title, description, pdfList }) {
  const [selectedYear, setSelectedYear] = useState('All');
  const [visibleCount, setVisibleCount] = useState(5);

  // Extract year from title using RegEx (e.g., "2023-24")
  const extractYear = (title) => {
    const match = title.match(/\b(20\d{2})\b/);
    return match ? match[1] : 'Unknown';
  };

  // Augment each item with extracted year
  const enhancedList = pdfList.map(pdf => ({
    ...pdf,
    year: extractYear(pdf.title)
  }));

  // Create a sorted list of unique years
  const years = Array.from(new Set(enhancedList.map(pdf => pdf.year))).sort((a, b) => b.localeCompare(a));

  // Filter the list based on selected year
  const filteredList = selectedYear === 'All'
    ? enhancedList
    : enhancedList.filter(pdf => pdf.year === selectedYear);

  // Slice visible items
  const visiblePDFs = filteredList.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount(prev => prev + 5);
  const handleShowLess = () => setVisibleCount(5);

  return (<>
    <div className="shadow-lg rounded-md p-6 py-4 mb-8 bg-cyan-400  border-black outline-slate-900 text-white
    ">
      {/* Section Title */}
      <h2 className="text-2xl px-12  py-5 md:text-4xl font-bold mb-3">{title}</h2><br/>

      {/* Optional Description */}
      {description && (
        <p className="mb-4 px-12 text-lg md:text-base text-white">{description}</p>
      )}

      {/* Year Filter */}
      <div className="mb-4 flex items-center py-1 gap-2 justify-start px-12">
        <label htmlFor="yearFilter" className="text-sm  font-medium">Filter by Year:</label>
        <select
          id="yearFilter"
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
            setVisibleCount(5); // Reset visible count on year change
          }}
          className="text-black px-3 py-1 rounded-md"
        >
          <option value="All">All</option>
          {years.map((year, idx) => (
            <option key={idx} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* PDF List */}
      <ul className="space-y-2 mb-5">
        {visiblePDFs.map((pdf, idx) => (
          <li key={idx} className="flex sm:px-12 items-center justify-between text-white hover:underline">
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md md:text-base"
            >
              {pdf.title}
            </a>
            <a
              href={pdf.url}
              download
              className="text-sm md:text-xs bg-blue-200 text-black px-3 py-1 rounded hover:bg-blue-100 transition"
            >
              Download PDF
            </a>
          </li>
        ))}
      </ul>

      {/* Show More / Show Less */}
      {filteredList.length > 5 && (
        <div className="mt-4 flex gap-3">
          {visibleCount < filteredList.length && (
            <button
              onClick={handleShowMore}
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition"
            >
              Show More
            </button>
          )}
          {visibleCount > 5 && (
            <button
              onClick={handleShowLess}
              className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded transition"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
    
    </>
  );
}
