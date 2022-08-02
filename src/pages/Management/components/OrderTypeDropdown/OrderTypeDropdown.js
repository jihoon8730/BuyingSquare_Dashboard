import Dropdown from 'react-bootstrap/Dropdown';
import './OrderTypeDropdown.scss';

function OrderTypeDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        className="dropdown"
      >
        전체 오더 타입
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item href="#/action-1">IN-STOCK GROUP</Dropdown.Item>
        <Dropdown.Item href="#/action-2">PRE ORDER</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default OrderTypeDropdown;
