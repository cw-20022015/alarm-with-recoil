import React from 'react';
import styled from 'styled-components';
import PushAlarm from 'components/PushAlarm';
import AlarmCenter from 'components/AlarmCenter';
import { useRecoilValue } from 'recoil';
import { alarmListState } from '../store/AlarmAtom';

function DashBoard() {
  const isAlarm = useRecoilValue(alarmListState).length;

  return (
    <DashBoardWrapper>
      <PushArea>
        <PushAlarm />
        <PushAlarm />
        <PushAlarm />
      </PushArea>

      <AlarmCenter />

      {isAlarm !== 0 && <div>ALARM</div>}
    </DashBoardWrapper>
  );
}

const DashBoardWrapper = styled.div`
  display: flex;
  gap: 10%;
  width: 100%;
  padding: 3.5%;
`;

const PushArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DashBoard;
