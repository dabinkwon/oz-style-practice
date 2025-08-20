import styled from "styled-components";
import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin} from "./styled/styled";

const StyledSection = styled.section`
  ${flexMixin({justify:"center",align:
    "center",wrap:"wrap",gap:"20px"
  })}
  padding: 20px 40px;

`

function App() {
  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
