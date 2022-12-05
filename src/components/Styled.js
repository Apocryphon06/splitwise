import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: whitesmoke;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #515151;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Foot = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: whitesmoke;
  height: 120px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #515151;
`;
