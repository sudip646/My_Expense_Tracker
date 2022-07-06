import styled from "styled-components";
import HomeComponent from "./module/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: 30px 0 10px;
  font-family: Montserrat;
  
  
  


 
`;

const Header = styled.span`
 color: black;
 font-size: 25px;
 font-weight: bold;
 background: #ffb2b2;
 

`;

function App() {
  return (
    <Container>
      <Header>My Expense Tracker</Header>
      <HomeComponent/>
    </Container>
  );
}

export default App;
