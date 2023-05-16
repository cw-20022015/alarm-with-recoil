import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { pushAlarmSelector } from 'store/AlarmSelector';

function PushAlarm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const setPushAlarm = useSetRecoilState(pushAlarmSelector);

  const handleSetDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSetTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handlePushAlarm = () => {
    setPushAlarm({ id: uuid(), content: '내용 예시 내용 예시 내용 예시', date });
  };

  return (
    <StyledPushAlarm>
      <StyledDateInput type="date" value={date} onChange={handleSetDate} />
      <StyledDateInput type="time" value={time} onChange={handleSetTime} />
      <button type="button" onClick={handlePushAlarm}>
        알림버튼
      </button>
    </StyledPushAlarm>
  );
}

const StyledPushAlarm = styled.div`
  height: 3rem;
`;

const StyledDateInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
`;
export default PushAlarm;
