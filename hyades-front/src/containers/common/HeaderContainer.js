import React from "react";
import Header from "../../components/common/Header";

const HeaderContainer = () => {
  /*
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
*/
  const user = {
    username: null,
  };

  return <Header user={user} />;
};

export default HeaderContainer;
