import { selector, DefaultValue } from 'recoil';
import { alarmState, alarmListState } from './AlarmAtom';
import { Alarm } from 'types/alarm.types';

/**
 * alarmListByDateSelector
 * @description 알림 리스트 조회
 */
export const alarmListByDateSelector = selector<Alarm[]>({
  key: 'alarmListByDateSelector',
  get: ({ get }) => {
    const alarmList = get(alarmListState);
    const sortedList = [...alarmList].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
    console.log([...alarmList].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()));
    return sortedList;
  },
});

/**
 * pushAlarmSelector
 * @description 알림 리스트에 추가
 */
export const pushAlarmSelector = selector<Alarm>({
  key: 'pushAlarmSelector',
  get: ({ get }) => {
    return get(alarmState);
  },
  set: ({ set, get, reset }, newValue) => {
    if (!newValue) {
      return;
    }
    if (newValue instanceof DefaultValue) {
      return;
    }
    const currentList = get(alarmListState);
    const newList = [...currentList, { id: newValue.id, content: newValue.content, date: newValue.date }];
    set(alarmListState, newList);
  },
});
