import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { alarmListWithTimelineSelector, isAlarmCenterOpenSelector } from 'store/AlarmSelector';

function AlarmCenter() {
  const alarmList = useRecoilValue(alarmListWithTimelineSelector);
  const setIsAlarmCenterOpen = useSetRecoilState(isAlarmCenterOpenSelector);

  return (
    <StyledAlarmButton>
      <StyledAlarmCenterTitle>
        <header>알림센터</header>
        <button type="button" onClick={() => setIsAlarmCenterOpen(false)}>
          닫기
        </button>
      </StyledAlarmCenterTitle>

      {alarmList.map((data) => {
        const [date, alarms] = data;
        return (
          <div key={date}>
            <AlarmTimeLine>{date}</AlarmTimeLine>
            {alarms.map((e) => (
              <p key={e.id}>{e.content}</p>
            ))}
          </div>
        );
      })}
    </StyledAlarmButton>
  );
}

const StyledAlarmButton = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #dcdcdc;
  border-radius: 0.5rem;
  padding: 4rem 1rem;
`;

const StyledAlarmCenterTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: #dcdcdc;

  & header {
    padding: 1rem;
  }
`;

const AlarmTimeLine = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export default AlarmCenter;
