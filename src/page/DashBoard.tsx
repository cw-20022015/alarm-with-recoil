import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isAlarmCenterOpenState } from 'store/AlarmAtom';
import PushAlarm from 'components/PushAlarm';
import AlarmCenter from 'components/AlarmCenter/AlarmCenter';
import AlarmCenterButton from 'components/AlarmCenter/AlarmCenterButton';

type DashBoard = {
  localLanguage: string;
  handleLocalLanguage: React.Dispatch<React.SetStateAction<string>>;
};

function DashBoard(props: DashBoard) {
  const { handleLocalLanguage, localLanguage } = props;
  const isAlarmCenterOpen = useRecoilValue(isAlarmCenterOpenState);

  return (
    <StyledDashBoard>
      <StyledRadioGroup>
        <StyledLabel htmlFor="English">
          <StyledRadio type="checkbox" id="en-US" name="en-US" value="en-US" onClick={() => handleLocalLanguage('en-US')} checked={localLanguage === 'en-US'} /> <span>English</span>
        </StyledLabel>
        <StyledLabel htmlFor="Korean">
          <StyledRadio type="checkbox" id="ko" name="ko" value="ko" onClick={() => handleLocalLanguage('ko')} checked={localLanguage === 'ko'} /> <span>Korean</span>
        </StyledLabel>
      </StyledRadioGroup>

      <StyledPushAlarmSection>
        <PushAlarm />
        <PushAlarm />
        <PushAlarm />
      </StyledPushAlarmSection>

      <AlarmCenterButton />

      {isAlarmCenterOpen && <AlarmCenter />}
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

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  > span {
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
  }
`;

const StyledRadio = styled.input.attrs(() => ({
  type: 'radio',
}))`
  appearance: none;
  margin: 0 11px 0 0;
  width: 18px;
  height: 18px;
  border: 1.5px solid #e2e2e2;
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }

  &:checked {
    background: #e2e2e2;
    border: none;

    :disabled {
      background: #e2e2e2;
    }
  }
`;

export default DashBoard;
