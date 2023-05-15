import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { pushAlarmSelector } from 'store/AlarmSelector';

function PushAlarm() {
  const [date, setDate] = useState('');
  const [pushAlarm, setPushAlarm] = useRecoilState(pushAlarmSelector);
  //   TODO : push 누르면 알림목록에 추가
  //   TODO : push 눌렀을 때 20개 이상되면 자동으로 오래된 애 삭제 후 추가
  const handleSetDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handlePushAlarm = () => {
    setPushAlarm({ id: uuid(), content: 'testtest', date: date });
  };

  return (
    <PushAlarmWrapper>
      <input type="date" value={date} onChange={handleSetDate} />
      <button
        onClick={() => {
          handlePushAlarm();
        }}>
        알림버튼
      </button>
    </PushAlarmWrapper>
  );
}

const PushAlarmWrapper = styled.div`
  display: flex;
  height: 3rem;
`;

export default PushAlarm;
