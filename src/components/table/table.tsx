import React from 'react';
import TablePropsType from './tableType';
import { TableStyle } from './tableStyle';
import Spin from '@components/spin/spin';

const Table = ({
  columns,
  dataSource,
  total,
  handlePagination,
  loading,
}: TablePropsType) => {
  return (
    <>
      <TableStyle
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: 1,
          total: total,
          onChange: handlePagination,
          showSizeChanger: false,
        }}
        loading={loading ? { indicator: <Spin indicator={Spin} /> } : false}
      ></TableStyle>
    </>
  );
};
export default Table;
