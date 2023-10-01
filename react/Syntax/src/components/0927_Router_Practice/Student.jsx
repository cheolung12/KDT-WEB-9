import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
  const { param } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();
  const navi = useNavigate();
  const navigate = () => {
    navi('/');
  }
  return (
    <>
      <div style={{ fontWeight: 'bold' }}>
        학생의 이름은 <span style={{ color: 'green' }}>{param}</span> 입니다.
      </div>
      {searchParam.get('name') && (
        <div style={{ fontWeight: 'bold' }}>
          실제 이름은 <span style={{ color: 'red' }}>{searchParam.get('name')}</span> 입니다.
        </div>
      )}
      <button onClick={navigate}>이전 페이지로</button>
    </>
  );
}
