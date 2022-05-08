import { Dispatch, SetStateAction } from 'react';
import SelectedRowKeysType from '@pages/list/selectedRowKeysType';

type RangePropsType = {
  setIsSearch: Dispatch<SetStateAction<boolean>>;
  setSearchData: Dispatch<SetStateAction<never[]>>;
};

export type { RangePropsType };
