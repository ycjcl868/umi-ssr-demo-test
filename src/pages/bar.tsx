import React from 'react';
import { Table, Input, Button, DatePicker, Popover, Modal } from 'antd';
const { RangePicker } = DatePicker;

export default () => {
  const [count, setCount] = React.useState(0);
    const handleClick = () => {
      setCount(count => count + 1);
    }

    return (
      <div>
        <h1>Page bar</h1>
        <RangePicker />
        <Button onClick={handleClick}>Add</Button>
        <p>{count}</p>
      </div>
    )
}
