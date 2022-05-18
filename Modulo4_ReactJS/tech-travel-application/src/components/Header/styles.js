import styled from 'styled-components';

export const Container = styled.header`
  background-color: #0676d9;
  padding: 30px 20px 20px;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 958px;
  img {
    width: 240px;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  div {
    background-color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 14px;
      color: #0676d9;
    }
  }
`;
