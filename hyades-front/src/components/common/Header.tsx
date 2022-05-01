import styled from "styled-components";
import Responsive from "./Responsive";
import { Button, BorderButton } from "./Button";
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
    font-size: 3rem;
    letter-spacing: 10px;
    @media screen and (max-width: 375px) {
      width: 5rem;
    }
  }
  .menuBarBox {
    display: inherit;
    cursor: pointer;

    li {
      margin-right: 8rem;
    }
  }

  .leftBox {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .rightBox {
    display: flex;
    height: 100%;
    align-items: center;

    .authBox {
      display: flex;
      cursor: pointer;

      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        margin-left: 3rem;
      }
      button {
        border: none;
        margin-left: 0.5rem;
      }
    }
  }
`;

const MenuButton = styled(BorderButton)`
  margin-left: 4rem;
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 7.5rem;
`;

const UserSelection = ({ user }: any) => {
  if (!user.username) {
    return (
      <div className="authBox">
        <Button fullWidth={null} to={null} fontcolor={"orange"}>
          GoogleLogin
        </Button>
      </div>
    );
  }

  if (user.username === "admin") {
    return (
      <div className="authBox">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/profile_image.webp`}
        />
        <Button>LOGOUT</Button>
        <Button>ADMINPAGE</Button>
      </div>
    );
  } else {
    return (
      <div className="authBox">
        <Link to="/mypage">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profile_image.webp`}
          />
        </Link>

        <Button fontcolor={"black"}>LOGOUT</Button>
      </div>
    );
  }
};

const Header = ({ user }: any) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="leftBox">
            <Link to="/" className="logo">
              PSG
            </Link>
            <MenuButton to="/notice" fontcolor={"teal"}>
              NOTICE
            </MenuButton>
          </div>

          <div className="rightBox">
            <UserSelection user={user} />
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
