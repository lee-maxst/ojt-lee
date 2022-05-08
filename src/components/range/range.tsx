import React, { useState } from 'react';
import { Button, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RangeWrap } from './rangeStyle';
import { getSearchAbvList } from '@pages/api/list/list';
import { RangePropsType } from '@components/range/rangeType';

const Range = ({ setIsSearch, setSearchData }: RangePropsType) => {
  const [abvRange, setAbvRange] = useState([1, 15]);

  const searchReset = () => {
    setIsSearch(false);
  };

  const onChange = (value: Array<number>) => {};

  const onAfterChange = (value: Array<number>) => {
    setAbvRange(value);
  };

  const searchAbv = async () => {
    const searchAbvList = await getSearchAbvList(abvRange[0], abvRange[1] + 1);
    setSearchData(searchAbvList);
    setIsSearch(true);
  };
  return (
    <RangeWrap>
      <Slider
        range
        min={1}
        max={55}
        step={1}
        defaultValue={[1, 15]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <Button icon={<SearchOutlined />} size="large" onClick={searchAbv}>
        abv Search
      </Button>
      <Button size="large" onClick={searchReset}>
        reset
      </Button>
    </RangeWrap>
  );
};
export default Range;
