import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { alarmNoticeSelector, pushAlarmSelector } from 'store/AlarmSelector';
import useTranslate from 'hooks/useTranslate';

function PushAlarm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const setPushAlarm = useSetRecoilState(pushAlarmSelector);
  const setIsAlarmNotice = useSetRecoilState(alarmNoticeSelector);

  const handleSetDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSetTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handlePushAlarm = () => {
    if (!date || !time) {
      alert('날짜와 시간은 필수값입니다.');
      return;
    }

    setPushAlarm({
      id: uuid(),
      content: '내용 예시 내용 예시 내용 예시',
      date: `${date}T${time}`,
    });
    setIsAlarmNotice(true);
  };

  return (
    <StyledPushAlarm>
      <StyledDateInput type="date" value={date} onChange={handleSetDate} />
      <StyledDateInput type="time" value={time} onChange={handleSetTime} />
      <StyledButton type="button" onClick={handlePushAlarm}>
        {useTranslate('alarmButton')}
      </StyledButton>
    </StyledPushAlarm>
  );
}

const StyledPushAlarm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-bottom: 2rem;
`;

const StyledDateInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #dcdcdc;
  margin-right: 0.5rem;
`;
const StyledButton = styled.button`
  border: none;
  background: #dcdcdc;
  cursor: pointer;
`;

export default PushAlarm;
