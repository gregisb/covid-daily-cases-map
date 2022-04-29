import React, { useContext } from "react";
import CovidContext from "../../context/CovidContext";

const VariantTable = ({ variantList, country }) => {
  if (variantList.length === 0) {
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>{country}</p>

        <div>No data available for this date or country</div>
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>{country}</p>
        <table>
          <thead>
          <th>Variant</th>
          <th>Number of cases</th>
          </thead>
          {variantList.map((currentVariant) => (
            <tr key={currentVariant.variant}>
              <td>{currentVariant.variant}</td>
              <td>{currentVariant.num_sequences}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
};

export default VariantTable;
