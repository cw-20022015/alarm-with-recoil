import React from 'react';
import { useRecoilValue } from 'recoil';
import { alarmListByDateSelector } from 'store/AlarmSelector';
import { Alarm } from 'types/alarm.types';

function AlarmCenter() {
  //   TODO : 알림센터 팝업 누르면 알림 리스트 뿌려주기 (selector 에서 날짜순으로 정렬하여 가져온다)
  const alarmList = useRecoilValue(alarmListByDateSelector);

  return (
    <div className="DashBoard">
      <div>푸쉬 알림창</div>
      <div>
        {alarmList.map((e: Alarm) => (
          <div key={e.id}>
            <div>{e.date}</div>
            <div>{e.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlarmCenter;
