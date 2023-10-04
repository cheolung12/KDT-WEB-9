import React from 'react';
import { useForm } from 'react-hook-form';

export  function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const valid = (data) => {
    console.log('valid', data);
  };

  const inValid = (data) => {
    console.log('invalid', data);
  };

  console.log('errors', errors);
  // 실시간 감시
  console.log('watch', watch());
  console.log('watch', watch('username'));

  return (
    <div>
      {/* handleSubmit(): 두개의 함수를 파라미터로 받는데,
                          첫번째는 유효할 때 실행되는 함수
                          두번째는 유요하지 않을 때 실행되는 함수 */}
      {/* <form onSubmit={handleSubmit(valid, inValid)}> */}
      <form onSubmit={handleSubmit(valid)}>
        {/* register('input을 사용할 이름', ... ) */}
        <input
          type='text'
          placeholder='username'
          // ref기 때문에 에러났을때 focus도 같이 잡아준다
          {...register('username', {
            required: '이름을 입력하세요',
            minLength: { message: '최소 2글자 이상 작성하세요', value: 2 },
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type='text'
          placeholder='email'
          {...register('email', { 
            required: '이메일을 입력하세요',
            // validate: 직접 오류를 만드는것
            validate: {
                useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입가능합니다.'
            },
         })}
        />
        {errors.email?.message}
        <br />
        <input type='text' placeholder='password' {...register('password')} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export function PracticeForm () {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

    const valid = (data) => {
        console.log('valid', data);
      };

    return (
        <div>
          <form onSubmit={handleSubmit(valid)}>
            <input
              type='text'
              placeholder='name'
              // ref기 때문에 에러났을때 focus도 같이 잡아준다
              {...register('name', {
                required: '이름은 필수 항목입니다',
              })}
            />
            {errors.name?.message}
            <br />
            <input
              type='text'
              placeholder='age'
              {...register('age', { 
                required: true,
                // validate: 직접 오류를 만드는것
                validate: {
                    numberValidate: (v) => v >= 0 || '0 이상의 숫자만 입력 가능합니다.'
                },
             })}
            />
            {errors.age?.message}
            <br />
            <button>Submit</button>
          </form>
        </div>
      );
}