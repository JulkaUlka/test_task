import styled from 'styled-components';

export const Title = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  padding-top: 50px;
  padding-bottom: 30px;
`;
