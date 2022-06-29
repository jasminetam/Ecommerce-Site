import styled from "styled-components";


export const Wrapper = styled.aside`
font-family: Arial, Helvetica, sans-serif;
width: 400px;
padding: 20px;


.clearCart {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.clearCartButton {
      border: none;
      border-radius: 20px;
      background-color: lightblue;
      font-size: 16px;
      padding: 10px;
      color: black;
      cursor: pointer;
   
     
  }

  .clearCartButton:hover {
      background-color: #0e557e;
      color: white;
  }

`

export const StyledButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: lightblue;
font-size: 26px;
border-radius: 30px;
border: none;
padding: 12px;
  :hover {
    background-color: #0e557e;
      color: white;
  
  }

 
`;
