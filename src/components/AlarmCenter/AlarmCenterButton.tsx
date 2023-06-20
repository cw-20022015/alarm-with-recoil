import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { alarmNoticeSelector, isAlarmCenterOpenSelector } from 'store/AlarmSelector';

function AlarmCenterButton() {
  const [isAlarmNotice, setIsAlarmNotice] = useRecoilState(alarmNoticeSelector);
  const setIsAlarmCenterOpen = useSetRecoilState(isAlarmCenterOpenSelector);

  const handleClickAlarmIcon = () => {
    setIsAlarmNotice(false);
    setIsAlarmCenterOpen((prev) => !prev);
  };

  return (
    <StyledAlarmPopupButtonArea>
      <StyledAlarmPopupButton type="button" onClick={handleClickAlarmIcon}>
        <StyledAlarmIcon src="images/bell.png" />
        {isAlarmNotice && <StyledAlarmNoticeCircle />}
      </StyledAlarmPopupButton>
    </StyledAlarmPopupButtonArea>
  );
}
const StyledAlarmPopupButtonArea = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const StyledAlarmPopupButton = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
`;

const StyledAlarmNoticeCircle = styled.span`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: red;
`;

const StyledAlarmIcon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
`;

export default AlarmCenterButton;
