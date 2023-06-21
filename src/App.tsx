import React from 'react';
import { IntlProvider } from 'react-intl';
import { en, kr } from 'locales';
import DashBoard from './page/DashBoard';

import './App.css';

function App() {
  const { language } = window.navigator;
  const messages = { 'en-US': en, ko: kr }[language];

  return (
    // locale : 앱이 렌더링 되는 시점의 언어
    // messages : 각각 언어와 json 파일을 매칭
    // defaultLocale : 브라우저 언어랑 일치해야 함
    <IntlProvider messages={messages} locale={language} defaultLocale={language}>
      <DashBoard />;
    </IntlProvider>
  );
}

export default App;
