import React, { createContext, useState } from 'react';

// context 생성
// createContext(): Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
export const MyContext = createContext({
  // 타입을 명시함으로써 자동완성에 나오게됨
  language: '',
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ko');

  return (
    <MyContext.Provider value={{ language, setLanguage }}>
        {children}
    </MyContext.Provider>
  );
}
