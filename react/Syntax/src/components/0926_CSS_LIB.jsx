import React from 'react';
import styled from './css/0926_CSS_LIB.module.css';
import './css/SassComponent.scss';

export function PostCSS() {
  return (
    <div className={styled.main}>
      <div>안녕</div>
      <div>하이</div>
    </div>
  );
}

export function SassComponent() {
  return (
    <div className='SassComponent'>
      <div className='box red'></div>
      <div className='box orange'></div>
      <div className='box yellow'></div>
      <div className='box green'></div>
      <div className='box blue'></div>
      <div className='box navy'></div>
      <div className='box purple'></div>
    </div>
  );
}

export function Prac() {
  return (
    <>
      <div className="wrap">
        <div className='prac one'></div>
      </div>
      <div className="wrap">
        <div className='prac two'></div>
      </div>
      <div className="wrap">
        <div className='prac three'></div>
      </div>
    </>
  );
}
