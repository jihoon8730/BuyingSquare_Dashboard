import Table from 'react-bootstrap/Table';
import './OrderChart2.scss';

function OrderChart2() {
  return (
    <div className="OrderChart2">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>BRAND</th>
            <th>AMT</th>
            <th>ORDERS</th>
            <th>COMP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>MAISON KISUNE</td>
            <td>1,980,188,513</td>
            <td>10</td>
            <td>14.46%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>MOOSE KNUCKLKES</td>
            <td>849,272,260</td>
            <td>2</td>
            <td>6.20%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>NIKE GOLF</td>
            <td>726,439,230</td>
            <td>1</td>
            <td>5.31%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>NIKE</td>
            <td>676,123,663</td>
            <td>3</td>
            <td>4.94%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>ISABEL MARANT ETOILE</td>
            <td>639,767,011</td>
            <td>8</td>
            <td>4.67%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>MAISON MARGILELA</td>
            <td>593,199,145</td>
            <td>9</td>
            <td>4.33%</td>
          </tr>
          <tr>
            <td>7</td>
            <td>NOBIS</td>
            <td>572,031,082</td>
            <td>2 </td>
            <td>4.18%</td>
          </tr>
          <tr>
            <td>8</td>
            <td>UGG</td>
            <td>412,074,659</td>
            <td>4</td>
            <td>3.01%</td>
          </tr>
          <tr>
            <td>9</td>
            <td>ISABEL MARANT Man</td>
            <td>410,205,990</td>
            <td>10</td>
            <td>3.00%</td>
          </tr>
          <tr>
            <td>10</td>
            <td>BURBERRY</td>
            <td>368,238,636</td>
            <td>6</td>
            <td>2.69%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderChart2;
