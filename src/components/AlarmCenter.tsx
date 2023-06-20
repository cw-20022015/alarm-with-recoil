import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { alarmListWithTimelineSelector, isAlarmCenterOpenSelector } from 'store/AlarmSelector';

function AlarmCenter() {
  const alarmList = useRecoilValue(alarmListWithTimelineSelector);
  const setIsAlarmCenterOpen = useSetRecoilState(isAlarmCenterOpenSelector);

  return (
    <StyledAlarmCenter>
      <StyledAlarmCenterTitle>
        <header>알림센터</header>
        <button type="button" onClick={() => setIsAlarmCenterOpen(false)} />
      </StyledAlarmCenterTitle>

      {Object.keys(alarmList).length ? (
        Object.keys(alarmList).map((date) => (
          <div key={date}>
            <AlarmTimeLine>{date}</AlarmTimeLine>
            {alarmList[date].map(({ content }) => (
              <p key={content}>{content}</p>
            ))}
          </div>
        ))
      ) : (
        <p>알림 없음</p>
      )}
    </StyledAlarmCenter>
  );
}

const StyledAlarmCenter = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 0.5rem;
  padding: 4rem 1rem;
`;

const StyledAlarmCenterTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: #dcdcdc;

  & header {
    padding: 1rem;
  }

  & button {
    border: none;
    background: none;
    cursor: pointer;
  }

  & button:after {
    display: inline-block;
    content: '\\00d7';
    font-size: 15pt;
    padding-right: 1rem;
  }
`;

const AlarmTimeLine = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export default AlarmCenter;
