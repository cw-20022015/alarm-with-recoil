import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import PushAlarm from 'components/PushAlarm';
import AlarmCenter from 'components/AlarmCenter';
import AlarmPopupButton from 'components/AlarmPopupButton';
import { alarmListState } from 'store/AlarmAtom';

function DashBoard() {
  const isAlarm = useRecoilValue(alarmListState).length;

  return (
    <StyledDashBoard>
      <StyledPushAlarmSection>
        <PushAlarm />
        <PushAlarm />
        <PushAlarm />
      </StyledPushAlarmSection>

      {isAlarm !== 0 && <AlarmCenter />}

      <AlarmPopupButton />
    </StyledDashBoard>
  );
}

const StyledDashBoard = styled.div`
  display: flex;
  gap: 10%;
  width: 100%;
  padding: 3.5%;
`;

const StyledPushAlarmSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DashBoard;
