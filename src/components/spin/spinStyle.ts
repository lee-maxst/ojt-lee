import styled from 'styled-components';
import { Spin } from 'antd';

const SpinWrap = styled.div`
  margin: 20px 0;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

const SpinStyle = styled(Spin)``;

export { SpinWrap, SpinStyle };
