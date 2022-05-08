import { Dispatch, SetStateAction } from 'react';
import SelectedRowKeysType from '@pages/list/selectedRowKeysType';
import TablePropsType from '@components/table/tableType';

type DetailModalPropsType = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  modalData?: SelectedRowKeysType;
};

type AmountType = {
  unit: string;
  value: number;
};

type MaltHopsType = {
  name: string;
  amount: AmountType;
};

export type { DetailModalPropsType, MaltHopsType };
