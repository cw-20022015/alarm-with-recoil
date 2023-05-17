import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { alarmListWithTimelineSelector } from 'store/AlarmSelector';

function AlarmCenter() {
  const alarmList = useRecoilValue(alarmListWithTimelineSelector);

  return (
    <StyledAlarmCenter>
      <StyledAlarmCenterTitle>
        <header>알림센터</header>
      </StyledAlarmCenterTitle>

      {alarmList.map((data) => {
        const [date, alarmList] = data;
        return (
          <div key={date}>
            <AlarmTimeLine>{date}</AlarmTimeLine>
            {alarmList.map((e) => (
              <p key={e.id}>{e.content}</p>
            ))}
          </div>
        );
      })}
    </StyledAlarmCenter>
  );
}

const StyledAlarmCenter = styled.div`
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
