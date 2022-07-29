import Table from 'react-bootstrap/Table';

function BuyerGroupTable() {
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
            <td>리앤한</td>
            <td>₩ 26,233,335,375</td>
            <td>34.29 %</td>4
          </tr>
          <tr>
            <td>2위</td>
            <td>롯데백화점</td>
            <td>₩ 14,060,247,622</td>
            <td>18.38 %</td>
          </tr>
          <tr>
            <td>3위</td>
            <td>무신사</td>
            <td>₩ 7,816,524,945</td>
            <td>10.37 %</td>
          </tr>
          <tr>
            <td>4위</td>
            <td>29CM</td>
            <td>₩ 7,933,221,804</td>
            <td>10.22 %</td>
          </tr>
          <tr>
            <td>5위</td>
            <td>코오롱 몰</td>
            <td>₩ 4,319,869,726</td>
            <td>5.65 %</td>
          </tr>
          <tr>
            <td>6위</td>
            <td>이마트 트레이더스</td>
            <td>₩ 3,370,500,234</td>
            <td>4.41 %</td>
          </tr>
          <tr>
            <td>7위</td>
            <td>릭스브로 컴퍼니</td>
            <td>₩ 2,114,855,746</td>
            <td>2.76 %</td>
          </tr>
          <tr>
            <td>8위</td>
            <td>더블유 컨셉</td>
            <td>₩ 1,458,328,644</td>
            <td>1.91 %</td>
          </tr>
          <tr>
            <td>9위</td>
            <td>MXN</td>
            <td>₩ 1,040,343,315</td>
            <td>1.82 %</td>
          </tr>
          <tr>
            <td>10위</td>
            <td>하우스앤하우즈</td>
            <td>₩ 1,388,657,211</td>
            <td>1.36 %</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BuyerGroupTable;
