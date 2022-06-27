import React from "react";
import "./WidgetsLg.css";

const Button = ({ type }) => {
  return <button className={`widget-btn ${type}`}>{type}</button>;
};
const WidgetsLg = () => {
  return (
    <div className="widgets-lg">
      <h3 className="widget-title">Latest Transacions</h3>
      <table className="widget-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Page</th>
            <th>Amount</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-data-widgets">
            <td className="img-tr-widget">
              <img
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                alt=""
              />
              <p>Gita Gyawali</p>
            </td>
            <td>2 Jun 2022</td>
            <td>$100</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="table-data-widgets">
            <td className="img-tr-widget">
              <img
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                alt=""
              />
              <p>Gita Gyawali</p>
            </td>
            <td>2 Jun 2022</td>
            <td>$100</td>
            <td>
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="table-data-widgets">
            <td className="img-tr-widget">
              <img
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                alt=""
              />
              <p>Gita Gyawali</p>
            </td>
            <td>2 Jun 2022</td>
            <td>$100</td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="table-data-widgets">
            <td className="img-tr-widget">
              <img
                src="http://www.woman-themovie.org/wp-content/uploads/2020/02/CHAUD_Celine-W_78-FRANCE_24-FACIES-LVMH-CALLIGARO_Sandra-V.jpg"
                alt=""
              />
              <p>Gita Gyawali</p>
            </td>
            <td>2 Jun 2022</td>
            <td>$100</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetsLg;
