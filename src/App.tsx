import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { en, kr } from 'locales';
import DashBoard from './page/DashBoard';

import './App.css';

function App() {
  const { language } = window.navigator;
  const [localLanguage, setLocalLanguage] = useState(language);
  const messages = { ko: kr, 'en-US': en }[localLanguage];

  return (
    // locale : 앱이 렌더링 되는 시점의 언어
    // messages : 각각 언어와 json 파일을 매칭
    // defaultLocale : 브라우저 언어랑 일치
    <IntlProvider messages={messages} locale={localLanguage} defaultLocale={localLanguage}>
      <DashBoard localLanguage={localLanguage} handleLocalLanguage={setLocalLanguage} />;
    </IntlProvider>
  );
}

export default App;
