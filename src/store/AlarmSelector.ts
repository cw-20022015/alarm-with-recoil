import { DefaultValue, selector } from 'recoil';
import { sortByDate } from 'util/sortUtils';
import { alarmListState } from './AlarmAtom';
import { Alarm } from '../types/alarm.types';

interface AlarmListWithTimelineType {
  [date: string]: Alarm[];
}
type Group = string;
type Result = [Group, Alarm[]];
/**
 * alarmListWithTimelineSelector
 * @description 알림 리스트를 최신순으로 정렬한 뒤 타임라인 형태로 가공
 */
export const alarmListWithTimelineSelector = selector<Result[]>({
  key: 'alarmListWithTimelineSelector',
  get: ({ get }) => {
    const alarmList = get(alarmListState);

    const newData = sortByDate([...alarmList], 'asc').reduce<AlarmListWithTimelineType>((listWithTimeLine, curr) => {
      const date = curr.date.split(' ')[0];
      const newArr = { ...listWithTimeLine };

      if (!listWithTimeLine[date]) {
        newArr[date] = [];
      }

      newArr[date] = newArr[date].concat(curr);
      return newArr;
    }, {});

    return Object.entries(newData);
  },
});
/**
 * pushAlarmSelector
 * @description 알림 리스트에 새로운 알림을 추가
 */
export const pushAlarmSelector = selector<Alarm>({
  key: 'pushAlarmSelector',
  get: () => {
    return { id: '', content: '', date: '' };
  },
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    const currentList = get(alarmListState);
    const limitListCount = 20;
    const limitCountList = currentList.length >= limitListCount ? currentList.slice(0, currentList.length - 1) : currentList;

    const newList = sortByDate([...limitCountList, { id: newValue.id, content: newValue.content, date: newValue.date }], 'asc');

    set(alarmListState, newList);
  },
});
