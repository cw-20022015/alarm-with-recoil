import { DefaultValue, selector } from 'recoil';
import { alarmListState, alarmState } from './AlarmAtom';
import { Alarm } from 'types/alarm.types';

interface AlarmListWithTimelineType {
  [date: string]: Alarm[];
}
/**
 * alarmListWithTimelineSelector
 * @description 알림 리스트를 최신순으로 정렬한 뒤 타임라인 형태로 가공
 */
export const alarmListWithTimelineSelector = selector<AlarmListWithTimelineType>({
  key: 'alarmListWithTimelineSelector',
  get: ({ get }) => {
    const alarmList = get(alarmListState);

    return [...alarmList]
      .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
      .reduce<AlarmListWithTimelineType>((listWithTimeLine, curr) => {
        const date = curr.date;
        if (!listWithTimeLine[date]) {
          listWithTimeLine[date] = [];
        }

        listWithTimeLine[date] = listWithTimeLine[date].concat(curr);
        return listWithTimeLine;
      }, {});
  },
});

/**
 * pushAlarmSelector
 * @description 알림 리스트에 새로운 알림을 추가
 */
export const pushAlarmSelector = selector<Alarm>({
  key: 'pushAlarmSelector',
  get: ({ get }) => {
    return get(alarmState);
  },
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    const currentList = get(alarmListState);
    const limitListCount = 20;
    const limitCountList = currentList.length >= limitListCount ? currentList.slice(0, currentList.length - 1) : currentList;

    const newList = [...limitCountList, { id: newValue.id, content: newValue.content, date: newValue.date }].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

    set(alarmListState, newList);
  },
});
