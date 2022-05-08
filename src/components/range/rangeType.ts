import { Dispatch, SetStateAction } from 'react';

type RangePropsType = {
  setIsSearch: Dispatch<SetStateAction<boolean>>;
  setSearchData: Dispatch<SetStateAction<never[]>>;
};

export type { RangePropsType };
