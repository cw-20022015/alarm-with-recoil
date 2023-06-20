import { DefaultValue, selector } from 'recoil';
import dayjs from 'dayjs';
import { sortByDate } from 'util/sortUtils';
import { alarmListState, alarmNoticeState, isAlarmCenterOpenState } from './AlarmAtom';
import { Alarm } from '../types/alarm.types';

interface AlarmListWithTimelineType {
  [date: string]: Alarm[];
}
/**
 * alarmListWithTimelineSelector
 * @description 알림 리스트를 최신순으로 정렬하여 타임라인으로 가공
 * @return {[date:string] : T[]} 날짜 key : 해당 날짜의 데이터
 */
export const alarmListWithTimelineSelector = selector<AlarmListWithTimelineType>({
  key: 'alarmListWithTimelineSelector',
  get: ({ get }) => {
    const alarmList = get(alarmListState);

    const newData = sortByDate([...alarmList], 'asc').reduce<AlarmListWithTimelineType>((listWithTimeLine, curr) => {
      const isValidDate = dayjs(curr.date).isValid();
      const date = isValidDate ? dayjs(curr.date).format('YYYY.MM.DD') : curr.date;

      const newArr = { ...listWithTimeLine };

      if (!listWithTimeLine[date]) {
        newArr[date] = [];
      }

      newArr[date] = newArr[date].concat(curr);
      return newArr;
    }, {});

    return newData;
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

/**
 * pushAlarmSelector
 * @description 확인하지 않은 알림 개수 세팅
 */
export const alarmNoticeSelector = selector({
  key: 'alarmNoticeSelector',
  get: ({ get }) => {
    return get(alarmNoticeState);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(alarmNoticeState, newValue);
  },
});

export const isAlarmCenterOpenSelector = selector({
  key: 'isAlarmCenterOpenSelector',
  get: ({ get }) => {
    return get(isAlarmCenterOpenState);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return;
    }
    set(isAlarmCenterOpenState, newValue);
  },
});
