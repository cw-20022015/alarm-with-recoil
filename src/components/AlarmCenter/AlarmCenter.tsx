import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FormattedMessage } from 'react-intl';
import { v4 as uuid } from 'uuid';
import { formatDateUtil, formatTimeUtil } from 'util/intlUtils';
import styled from 'styled-components';
import { alarmListWithTimelineSelector, isAlarmCenterOpenSelector } from 'store/AlarmSelector';

function AlarmCenter() {
  const alarmList = useRecoilValue(alarmListWithTimelineSelector);
  const setIsAlarmCenterOpen = useSetRecoilState(isAlarmCenterOpenSelector);

  return (
    <StyledAlarmCenter>
      <StyledAlarmCenterTitle>
        <header>
          <FormattedMessage id="alarmCenter" />
        </header>
        <button type="button" onClick={() => setIsAlarmCenterOpen(false)} />
      </StyledAlarmCenterTitle>

      <StyledAlarmContent>
        {Object.keys(alarmList).length ? (
          Object.keys(alarmList).map((date) => (
            <div key={date}>
              <AlarmTimeLine>{formatDateUtil(date)}</AlarmTimeLine>
              {alarmList[date].map(({ content }) => (
                <>
                  <span>{formatTimeUtil(Date.parse(date))}</span>
                  <p key={uuid()}>{content}</p>
                </>
              ))}
            </div>
          ))
        ) : (
          <p>
            <FormattedMessage id="isEmpty" />
          </p>
        )}
      </StyledAlarmContent>
    </StyledAlarmCenter>
  );
}

const StyledAlarmCenter = styled.section`
  position: relative;
  width: 40%;
  height: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 0.5rem;
  padding: 4rem 1rem;
`;

const StyledAlarmContent = styled.div``;

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
