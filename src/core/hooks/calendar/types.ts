import { Moment } from 'moment';

export type CalendarDay = {
    date: Moment;
    dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    disabled?: boolean;
    nextMonth?: boolean;
    prevMonth?: boolean;
    today?: boolean;
};
