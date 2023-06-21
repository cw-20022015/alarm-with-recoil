import { atom } from 'recoil';
import { Alarm } from 'types/alarm.types';
import { alarmMock } from 'mock/alarmMock';

export const isAlarmCenterOpenState = atom({
  key: 'isAlarmCenterOpenState',
  default: false,
});

export const alarmNoticeState = atom({
  key: 'alarmNoticeState',
  default: false,
});

export const alarmState = atom<Alarm>({
  key: 'alarmState',
  default: { id: '1', content: 'test', date: '2023-01-01' },
});

export const alarmListState = atom<Alarm[]>({
  key: 'alarmListState',
  default: alarmMock,
});
