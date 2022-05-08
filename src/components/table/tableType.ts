type TablePropsType = {
  columns: Array<object>;
  dataSource: Array<object>;
  total: number;
  handlePagination?: (page: number) => void;
  loading?: boolean;
};

export default TablePropsType;
