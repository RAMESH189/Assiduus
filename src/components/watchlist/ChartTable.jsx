import React from 'react'
import './charttable.css'

export default function ChartTable({tableData}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Account</th>
          <th>This Month</th>
          <th>YTD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sales</td>
          <td>{tableData[0] || `-`}</td>
          <td>{tableData[1]*12 || `-`}</td>
        </tr>
        <tr>
          <td>Advertising</td>
          <td>{tableData[1] || `-`}</td>
          <td>{tableData[2]*9 || `-`}</td>
        </tr>
        <tr>
          <td>Inventory</td>
          <td>{tableData[2] || `-`}</td>
          <td>{tableData[3]*8 || `-`}</td>
              </tr>
              <tr>
          <td>Entertainment</td>
          <td>{tableData[3] || `-`}</td>
          <td>{tableData[4]*10 || `-`}</td>
              </tr>
              <tr>
          <td>Product</td>
          <td>{tableData[4] || `-`}</td>
          <td>{tableData[5]*15 || `-`}</td>
        </tr>
      </tbody>
    </table>
  );
}
