import React from 'react';
import { loginAction } from './store/login';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const loginState = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  const logIn = () => {
    dispatch(loginAction.login());
  }
  const logOut = () => {
    dispatch(loginAction.logout());
  }
  
  return (
    <div>
      {loginState ? (
        <>
          <div>로그인하셨습니다</div>
          <button onClick={logOut}>로그아웃</button>
        </>
      ) : (
        <>
          <div>로그아웃하셨습니다</div>
          <button onClick={logIn}>로그인</button>
        </>
      )}
    </div>
  );
}
