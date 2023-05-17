import { atom } from 'recoil';
import { Alarm } from 'types/alarm.types';

export const alarmListState = atom<Alarm[]>({
  key: 'alarmListState',
  default: [],
});
