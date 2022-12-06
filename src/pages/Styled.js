import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

//Styled-Components for Login

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 35vw;
  position: fixed;
  margin: 90px 0;
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
  &:hover {
    box-shadow: none;
  }
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

//Simple Navbar for homepage with account logged in

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  background-color: #5bc4a6;
  padding: 5px;
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 5px;
`;

export const Account = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

export const Profile = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: whitesmoke;
  margin-right: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 100vh;
  justify-content: center;
`;

//Menu Column
export const VerticalMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  width: 15vw;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color};
  padding: 5px;
  border-left: ${(props) => props.select};
  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

//Content space
export const ShowContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

//Advertisement section
export const Advertisement = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  padding: 15px;
`;


