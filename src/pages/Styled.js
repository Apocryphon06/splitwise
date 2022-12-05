import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//Styled-Components for Login

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 30vw;

  margin: 50px 0;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const Heading = styled.div`
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  color: #515151;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  background: transparent;
  border-radius: 5px;
  border: none;
  border: 1px solid #515151;
  margin-bottom: 10px;
  font-size: 15px;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 0;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;
export const GButton = styled.button`
  padding: 10px;
  border: none;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 0;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const Horiz = styled.div`
  border-top: 1px solid #dfdfdf;
  width: 70px;
  margin: 5px;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #dfdfdf;
  font-weight: bold;
`;
