import React from 'react';
import styled from 'styled-components';

function AlarmPopupButton() {
  return <StyledAlarmIcon src="images/bell.png" />;
}

const StyledAlarmIcon = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
`;

export default AlarmPopupButton;
