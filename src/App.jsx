import styled, { createGlobalStyle } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin} from "./styled/styled";
import { useState } from "react";


const StyledSection = styled.section`
  ${flexMixin({justify:"center",align:
    "center",wrap:"wrap",gap:"20px"
  })}
  padding: 20px 40px;
`
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}
header{
  background-color: ${(props)=>(props.isLight?"white":"black")};
  transition: 0.3s ease;

  h1{
    color: ${(props)=>(props.isLight?"black":"white")};
  }
  li{
    color: ${(props)=>(props.isLight?"black":"white")};
  }
}

`

function App() {
  const [isLight,setIsLight] = useState(false)
  return (
    <main>
        <GlobalStyle isLight={isLight}/>
        <Header setIsLight={setIsLight}/>
        <StyledSection>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </StyledSection>
      </main>
  );
}

export default App;
