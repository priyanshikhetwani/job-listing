import React, { useState } from "react";
import data from "./data.json";
import { Jobs } from "./components/Jobs";
import { Header } from "./components/Header";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteFilterKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteFilterKeyword}
          clearAll={clearAll}
        />
      )}
      <Jobs
        data={data}
        setKeywords={addFilterKeywords}
        keywords={filterKeywords}
      />
    </div>
  );
}

export default App;
