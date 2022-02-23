import React from "react";

// 테스팅 라이브러리는 한번씩 사용해보시기 위해서 현재 파일명과 컴포넌트 명, props 등을
// 자신의 id나 영문명 또는 nickname + Profile 형태로 바꿔주세요
// 그런다음 적절한 위치에 렌더링 해보시고, 테스트 라이브러리도 똑같이 바꿔주세요.
// 스프린트 1회차때는 이런 연습용 파일들이 삭제 될 예정이니, 필요한 예제코드는 가져가세요

const YoonOceanProfile = ({ username, name }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <span>({name})</span>
    </div>
  );
};

export default YoonOceanProfile;
