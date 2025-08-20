import styled from "styled-components";
import { flexMixin, fontMixin } from "../styled/styled";
const StyledHeader = styled.header`
  ${flexMixin({justify:"space-between",align: "center"})}
  padding: 20px 20px;

  ul {
    ${flexMixin({justify:"center",align:"center",gap:"20px"})}
    li {
      ${fontMixin({size:"16px",weight:"700"})}
      list-style: none;
    }
  }
  button{
    color:black;
    font-weight:600;
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
  }
  

`;

export default function Header({setIsLight}) {

  return (
      <StyledHeader>
        <h1>OZ코딩스쿨</h1>
        <ul className="menu-container">
          <button onClick={()=>setIsLight(prev=>!prev)}>BrightMode</button>
          <li>로그인</li>
          <li>회원가입</li>
          <li>내클래스</li>
        </ul>
      </StyledHeader>
  );
}
