import React, { useState, useEffect } from "react";
import { Job } from "./Job";

export const Jobs = ({ data, setKeywords, keywords }) => {
  console.log(data);
  const [filteredData, setFilteredData] = useState([]);

  const modifiedData = () => {
    if (keywords.length > 0) {
      const newData = filteredData.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      // console.log(newData);
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <div className="jobs">
      {filteredData.map((d) => {
        return <Job data={d} key={d.id} setKeywords={setKeywords} />;
      })}
    </div>
  );
};
