import { atom } from 'recoil';
import dayjs from 'dayjs';

import { Alarm } from '../types/alarm.types';

export const alarmState = atom<Alarm>({
  key: 'alarmState',
  default: { id: '1', content: 'test', date: '2023-01-01' },
});

export const alarmListState = atom<Alarm[]>({
  key: 'alarmListState',
  default: [],
});
