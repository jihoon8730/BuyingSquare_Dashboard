import Table from 'react-bootstrap/Table';

function MonthOrderStatusTable() {
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>SUBMIT 금액</th>
            <th>구분</th>
            <th>합계</th>
            <th>21년 5월</th>
            <th>21년 6월</th>
            <th>21년 7월</th>
            <th>21년 8월</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>목표금액</td>
            <td>68,939,000,000</td>
            <td>1,891,000,000</td>
            <td>2,985,828,820</td>
            <td>1,091,000,000</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>SUBMIT 금액</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>달성률</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>전체 컨펌률</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead>
          <th>CONFIRM 금액</th>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>CONFIRM 금액</td>
            <td>1,891,000,000</td>
            <td>68,939,000,000</td>
            <td>1,891,000,000</td>
            <td>2,985,828,820</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>FALL OUT 금액</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>CANCEL 금액</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>확정 컨펌률</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead>
          <th>WAITING 금액</th>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>금액</td>
            <td>68,939,000,000</td>
            <td>1,891,000,000</td>
            <td>2,985,828,820</td>
            <td>1,091,000,000</td>
            <td>1,091,000,000</td>
          </tr>
          <tr>
            <td />
            <td>예상 금액</td>
            <td>62,528,552,104</td>
            <td>2,600.621.014</td>
            <td>1,832,000,000</td>
            <td>1,245,234,349</td>
            <td>1,091,000,000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MonthOrderStatusTable;
