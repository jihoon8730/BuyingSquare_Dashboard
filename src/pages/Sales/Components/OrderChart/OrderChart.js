import Table from 'react-bootstrap/Table';
import './OrderChart.scss';

function OrderChart() {
  return (
    <div className="OrderChart">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>순위</th>
            <th>공급사</th>
            <th>AMT</th>
            <th>ORDERS</th>
            <th>COMP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>CL</td>
            <td>1,594,826,463</td>
            <td>21</td>
            <td>11.65%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SR</td>
            <td>153,497,431</td>
            <td>15</td>
            <td>11.19%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>BT</td>
            <td>1,343,025,684</td>
            <td>3</td>
            <td>9.81%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>SM</td>
            <td>852,823,028</td>
            <td>22</td>
            <td>9.59%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>WS</td>
            <td>8,49,272,260</td>
            <td>16</td>
            <td>7.99%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>WS</td>
            <td>849,272,260</td>
            <td>18</td>
            <td>6.23%</td>
          </tr>
          <tr>
            <td>7</td>
            <td>BL</td>
            <td>788,494,399</td>
            <td>2 </td>
            <td>6.20%</td>
          </tr>
          <tr>
            <td>8</td>
            <td>GB</td>
            <td>735,992,032</td>
            <td>13</td>
            <td>5.76%</td>
          </tr>
          <tr>
            <td>9</td>
            <td>HX</td>
            <td>593,877,337</td>
            <td>14</td>
            <td>5.38%</td>
          </tr>
          <tr>
            <td>10</td>
            <td>US</td>
            <td>593,877,337</td>
            <td>2</td>
            <td>4.34%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderChart;
