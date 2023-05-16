import { Alarm } from 'types/alarm.types';

export function sortByDate(list: Alarm[], sortType: 'asc' | 'desc'): Alarm[] {
  if (sortType === 'asc') {
    return [...list].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  }

  if (sortType === 'desc') {
    return [...list].sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
  }

  return list;
}
