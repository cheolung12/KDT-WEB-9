import React, { useContext } from 'react';
import { MyContext } from '../store/lang-context';
import { CartContext, UserContext } from '../store/context-prac';
import styled from 'styled-components';

export function ContextStudy() {
  const { language, setLanguage } = useContext(MyContext);

  return (
    // 두번째 방법: useContext
    <div>
      <h2>현재 선택된 언어: {language}</h2>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value='ko'>한국어</option>
        <option value='en'>영어</option>
        <option value='jp'>일본어</option>
      </select>
    </div>

    // 첫번째 방법: Consumer
    // <div>
    //   <MyContext.Consumer>
    //     {(value) => {
    //       return (
    //         <div>
    //           <h2>현재 선택된 언어: {value.language}</h2>
    //           <select
    //             value={value.language}
    //             onChange={(e) => value.setLanguage(e.target.value)}
    //           >
    //             <option value='ko'>한국어</option>
    //             <option value='en'>영어</option>
    //             <option value='jp'>일본어</option>
    //           </select>
    //         </div>
    //       );
    //     }}
    //   </MyContext.Consumer>
    // </div>
  );
}

export function ContextPractice() {
  const { darkMode, setDarkMode, language, setLanguage } = useContext(UserContext);

  return(
    <>
    <_Container darkMode={darkMode}>
    <button style={{ width: '100px'}}onClick={() => {setDarkMode(prev => !prev)}}>
        {darkMode ? '라이트모드' : '다크모드'}
    </button>
    <div>
      <_H2 darkMode={darkMode}>현재 선택된 언어: {language}</_H2>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value='ko'>한국어</option>
        <option value='en'>영어</option>
        <option value='jp'>일본어</option>
      </select>
    </div>
    </_Container>
    
    </>
  );
}

const _Container = styled.div`
  background-color: ${({ darkMode }) => {
    if (darkMode) {
      return 'black';
    }
    return '#eee';
  }};
  padding: 3rem;
  width: fit-content;
  height: auto;
`;

const _H2 = styled.h2`
    color: ${({ darkMode }) => {
    if (darkMode) {
      return 'white';
    }
    return 'black';
  }};
`



export function ProductList() {
  const productList = [
    {
      id: 1,
      name: '상품1',
      price: 10000,
    },
    {
      id: 2,
      name: '상품2',
      price: 20000,
    },
    {
      id: 3,
      name: '상품3',
      price: 30000,
    },
  ];

  return (
    <>
    <_Wrapper>
      {productList.map((product) => {
        return <div key={product.id}>
          <Product id={product.id} name={product.name} price={product.price} />
        </div>
      })}
    </_Wrapper>
    </>
  );
}

export function Product({name, price, id}) {
  const {cart, setCart} = useContext(CartContext);
  const addCart = () => {
    setCart([...cart, {id, name, price}]);
  }
  
  return(
    <_ProductCard>
      <div>상품 명: {name}</div>
      <div>가격: ₩ {price}</div>
      <button onClick={addCart}>장바구니에 추가</button>
    </_ProductCard>
  );
}

export function Cart() {
  const {cart} = useContext(CartContext);
  let sum = 0;
  cart.forEach((el) => sum += el.price);

  return(
    <>
    <h2>총가격: {sum} </h2>
     <_Wrapper>
    {cart.map((item) => {
      return <div key={item.id} >
        <CartItem id={item.id} name={item.name} price={item.price}/>
      </div>
    })}
     </_Wrapper>
    </>
  )

}

export function CartItem({id, name, price}) {
  const {cart, setCart} = useContext(CartContext);
  const deleteCart = () => {
    setCart(cart.filter((item) =>  item.id !== id))
  }

  return(
    <_ProductCard>
      <div>상품 명: {name}</div>
      <div>가격: ₩ {price}</div>
      <button onClick={deleteCart}>삭제</button>
    </_ProductCard>
  );
}


const _Wrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
`

const _ProductCard = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`