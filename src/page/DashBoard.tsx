import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { alarmListState, isAlarmCenterOpenState } from 'store/AlarmAtom';
import PushAlarm from 'components/PushAlarm';
import AlarmCenter from 'components/AlarmCenter';
import AlarmPopupButton from 'components/AlarmPopupButton';

function DashBoard() {
  const isAlarmCenterOpen = useRecoilValue(isAlarmCenterOpenState);

  return (
    <StyledDashBoard>
      <StyledPushAlarmSection>
        <PushAlarm />
        <PushAlarm />
        <PushAlarm />
      </StyledPushAlarmSection>

      {isAlarmCenterOpen && <AlarmCenter />}

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
