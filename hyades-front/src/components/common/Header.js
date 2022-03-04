import * as React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Palette from "../../lib/Palette";
import { Link } from "react-router-dom";
// 제공해드린 Button 컴포넌트는 인터페이스가 살짝 바뀔수 있습니다.

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  z-index: 5;
  color: black;
  background: white;
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  display: flex;
  height: 7.5rem;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  overflow: hidden;
  .logo {
    font-size: 2.0rem;
    letter-spacing: 10px;
    @media screen and (max-width: 375px) {
      width: 5rem;
    }
  }
  .rightBox {
    display: flex;
    height: 100%;
    align-items: center;
    .menuBarBox {
    display: flex;
    li{
      padding-left: 3rem;
      cursor: pointer;
      &:hover {
        color: ${Palette.Red[7]};
      }
    }
    }
    .authBox{
      display: flex;
      cursor: pointer;
      ul{
        &:hover {
        color: ${Palette.Red[7]};
        }
      }
      img{  
       width: 30px;
       height: 30px;
       border-radius: 100%;
       margin-left:  3rem;
     }
     button{
       border: none;
       margin-left: 0.5rem;
     }
    }
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 7.5rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            PSG
          </Link>
          <div className="rightBox">
            <ul className="menuBarBox">
              <Link to="/crew"><li>CREW</li></Link>
              <Link to="/notice"><li>NOTICE</li></Link>
            </ul>
            {user ? (
              user.username === "admin" ? (
                <div className="authBox">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/profile_image.webp`} />
                  <button>LOGOUT</button>
                  <button>ADMINPAGE</button>
                </div>
              ) : (
                <div className="authBox">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/profile_image.webp`} />
                  <button>LOGOUT</button>
                </div>
              )
            ) : (
              <div className="authBox">
                <ul>LOGIN</ul>
                <ul>SIGNUP</ul>
              </div>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
