import React, { useState } from 'react';
import { SpinWrap, SpinStyle } from './spinStyle';

const Spin = (props: any) => {
  return (
    <SpinWrap>
      <SpinStyle size="large" />
    </SpinWrap>
  );
};
export default Spin;
