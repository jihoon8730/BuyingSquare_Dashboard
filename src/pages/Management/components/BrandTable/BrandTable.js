import Table from 'react-bootstrap/Table';

function BrandTable() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>순위</th>
            <th>브랜드 이름</th>
            <th>금액</th>
            <th>비율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1위</td>
            <td>SAINT LAURENT</td>
            <td>₩ 7,066,428,206</td>
            <td>9.33 %</td>
          </tr>
          <tr>
            <td>2위</td>
            <td>MAISON KITSUNE</td>
            <td>₩ 6,045,714,259</td>
            <td>7.98 %</td>
          </tr>
          <tr>
            <td>3위</td>
            <td>STONE ISLAND</td>
            <td>₩ 3,169,149,616</td>
            <td>4.18 %</td>
          </tr>
          <tr>
            <td>4위</td>
            <td>BOTTEGA VENETA</td>
            <td>₩ 2,285,257,901</td>
            <td>3.02 %</td>
          </tr>
          <tr>
            <td>5위</td>
            <td>MAISON MARGIELA</td>
            <td>₩ 2,128,783,003</td>
            <td>2.81 %</td>
          </tr>
          <tr>
            <td>6위</td>
            <td>THOM BROWNE</td>
            <td>₩ 2,064,625,409</td>
            <td>2.73 %</td>
          </tr>
          <tr>
            <td>7위</td>
            <td>GUCCI</td>
            <td>₩ 1,812,018,141</td>
            <td>2.39 %</td>
          </tr>
          <tr>
            <td>8위</td>
            <td>OFF WHITE</td>
            <td>₩ 1,449,170,536</td>
            <td>1.91 %</td>
          </tr>
          <tr>
            <td>9위</td>
            <td>MOOSE KNUCKLES</td>
            <td>₩ 1,448,869,306</td>
            <td>1.91 %</td>
          </tr>
          <tr>
            <td>10위</td>
            <td>BURBERRY</td>
            <td>₩ 1,446,582,223</td>
            <td>1.91 %</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BrandTable;
