import React, { useState, useEffect } from 'react';
import { Model1, Model2, Model3, Model4, Header, HeaderTitle, HeaderTitleServe, HeaderEtc, Img, LoginBoxBox } from './Login.style';

import TextField from '@mui/material/TextField';
// 아이콘 보이기
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Title, InputBox, LoginBtn, PasswordBtn, Box, Etc, SignUpBtn } from './LoginBox.style';
import { useRouter } from 'next/navigation';
import ForgotPassword from './ForgotPassword';
import { useRecoilState } from 'recoil';
import { ForgetPasswordBox, userData } from '@/recoil/Auth';
import { postLogin } from '@/api/Auth/login';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [anim, setAnim] = useState(false);
  const [anim1, setAnim1] = useState(false);
  const [showPassword, setShowPassword] = useState('password');
  const [passwordModal, setPasswordModal] = useRecoilState(ForgetPasswordBox);
  const [user, setUser] = useRecoilState(userData);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const router = useRouter();
  useEffect(() => {
    setAnim(true);
    setTimeout(function () {
      setAnim1(true);
    }, 1300);
  }, []);

  // 로그인
  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    const res : any = await postLogin(data);
    if (res?.status === 200) {
      router.push('/main/classlist');
      const NewData = {
        memberId: res?.data.memberId,
        email: res?.data.email,
        name: res?.data.name,
        nickname: res?.data.nickname,
        role: res?.data.role,
      }
      setUser(NewData);
    }
  };

  return (
    <div className='w-full h-full'>
      <Model1
        style={{
          opacity: anim ? '1' : '0',
          visibility: anim ? 'visible' : 'hidden',
        }}
      />
      <Model2
        style={{
          opacity: anim ? '1' : '0',
          visibility: anim ? 'visible' : 'hidden',
        }}
      />
      <Model3
        style={{
          opacity: anim ? '1' : '0',
          visibility: anim ? 'visible' : 'hidden',
        }}
      />
      <Model4
        style={{
          opacity: anim ? '1' : '0',
          visibility: anim ? 'visible' : 'hidden',
        }}
      />

      <Header
        style={{
          opacity: anim1 ? '1' : '0',
          visibility: anim1 ? 'visible' : 'hidden',
        }}
      >
        <Img
          src='/Img/회원가입.png'
          style={{
            opacity: anim ? '1' : '0',
            visibility: anim ? 'visible' : 'hidden',
          }}
        />
        <HeaderTitle>English</HeaderTitle>
        <HeaderTitleServe>Education For You</HeaderTitleServe>
      </Header>

      <LoginBoxBox
        style={{
          opacity: anim1 ? '1' : '0',
          visibility: anim1 ? 'visible' : 'hidden',
        }}
      >
        {/* <LoginBox/> */}
        <div>
          <Title>Login</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <TextField
              id='standard-basic'
              label='E-mail'
              variant='standard'
              onChange={e => {
                setEmail(e.target.value);
              }}
              style={{
                //   margin: window.innerWidth <= 1340 ? '30px 0px 0px 0px' : '50px 0px 0px 0px'
                margin: '30px 0px 0px 0px',
              }}
              InputProps={{
                autoComplete: 'off',
                style: {
                  //   width: window.innerWidth <= 1340 ? '350px' : '400px',
                  width: '350px',
                  //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
                  fontSize: '15px',
                  color: '#AFAFAF',
                  borderBottom: '2px solid #AFAFAF',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#AFAFAF',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                },
              }}
            />
            <div style={{ display: 'flex' }}>
              <TextField
                id='standard-basic'
                label='Password'
                variant='standard'
                type={showPassword}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                style={{
                  margin: '10px 0px 0px 0px',
                }}
                InputProps={{
                  autoComplete: 'off',
                  style: {
                    //   width: window.innerWidth <= 1340 ? '350px' : '400px',
                    width: '350px',
                    //   fontSize: window.innerWidth <= 1340 ? '15px' : '20px',
                    fontSize: '15px',
                    color: '#AFAFAF',
                    borderBottom: '2px solid #AFAFAF',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#AFAFAF',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  },
                }}
              />
              {showPassword != 'password' ? (
                <>
                  <div
                    onClick={() => {
                      setShowPassword('password');
                    }}
                  >
                    <VisibilityIcon
                      style={{
                        position: 'relative',
                        top: '20px',
                        right: '25px',
                        //   fontSize: window.innerWidth <= 1340 ? '25px' : '30px',
                        fontSize: '25px',
                        color: '#AFAFAF',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setShowPassword('text');
                    }}
                  >
                    <VisibilityOffIcon
                      style={{
                        position: 'relative',
                        top: '20px',
                        right: '25px',
                        //   fontSize: window.innerWidth <= 1340 ? '25px' : '30px',
                        fontSize: '25px',
                        color: '#AFAFAF',
                      }}
                    />
                  </div>
                </>
              )}
            </div>
            <PasswordBtn
              onClick={() => {
                setPasswordModal(true);
              }}
            >
              Forgot Password?
            </PasswordBtn>
            <LoginBtn type='submit'>login</LoginBtn>
          </InputBox>
          </form>

          <Box>
            <Etc>Don’t have an account?</Etc>
            <SignUpBtn
              onClick={() => {
                setAnim(false);
                setTimeout(function () {
                  setAnim1(false);
                }, 1000);
                setTimeout(function () {
                  router.push('/');
                }, 2000);
              }}
            >
              Sign up
            </SignUpBtn>
          </Box>
        </div>
      </LoginBoxBox>
      <div>{passwordModal && <ForgotPassword />}</div>
    </div>
  );
}
