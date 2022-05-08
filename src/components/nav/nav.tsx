import React, { useState } from 'react';
import navData from './navData';
import { NavStyle, MenuStyle } from './navStyle';

function Nav(props: any) {
  return (
    <NavStyle>
      <MenuStyle
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={navData}
      ></MenuStyle>
    </NavStyle>
  );
}
export default Nav;
