import Table from 'react-bootstrap/Table';
import './SalesTable.scss';

function SalesTable() {
  return (
    <div className="SalesTable">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>순위</th>
            <th>브랜드</th>
            <th>메일 발송 건수</th>
            <th>열람 수</th>
            <th>클릭 수</th>
            <th>조회 수</th>
            <th>다운로드 수</th>
            <th>오더 제출 수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1위</td>
            <td>SAINT LAURENT</td>
            <td>97건</td>
            <td>6건</td>
            <td>18건</td>
            <td>3건</td>
            <td>1건</td>
            <td>1건</td>
          </tr>
          <tr>
            <td>2위</td>
            <td>MAISON KITSUNE</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>3위</td>
            <td>BOTEGA VENETA</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>4위</td>
            <td>STONE ISLANDS</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>5위</td>
            <td>MOOSE KNUCKLES</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>6위</td>
            <td>GUCCI</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>7위</td>
            <td>MAISON MARGILELA</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>8위</td>
            <td>OFF WHITE</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>9위</td>
            <td>THOME BROWNE</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
          <tr>
            <td>10위</td>
            <td>MAISON KITSUNE</td>
            <td>76건</td>
            <td>212건</td>
            <td>34건</td>
            <td>21건</td>
            <td>8건</td>
            <td>12건</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default SalesTable;
