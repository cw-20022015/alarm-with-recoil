import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { alarmNoticeSelector, isAlarmCenterOpenSelector } from 'store/AlarmSelector';

function AlarmPopupButton() {
  const [isAlarmNotice, setIsAlarmNotice] = useRecoilState(alarmNoticeSelector);
  const setIsAlarmCenterOpen = useSetRecoilState(isAlarmCenterOpenSelector);

  const handleClickAlarmIcon = () => {
    setIsAlarmNotice(false);
    setIsAlarmCenterOpen((prev) => !prev);
  };

  return (
    <StyledAlarmButton type="button" onClick={handleClickAlarmIcon}>
      <StyledAlarmIcon src="images/bell.png" />
      {isAlarmNotice && <StyledAlarmNoticeCircle />}
    </StyledAlarmButton>
  );
}

const StyledAlarmButton = styled.button`
  position: relative;
  height: 100%;
  cursor: pointer;
`;

const StyledAlarmNoticeCircle = styled.span`
  position: absolute;
  top: 0.6rem;
  right: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: red;
`;

const StyledAlarmIcon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
`;

export default AlarmPopupButton;
