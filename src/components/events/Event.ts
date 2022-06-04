import dayjs from 'dayjs';
import { getWeekDayName } from './../../common/date-time-constants';

export type OrgEvent = {
  _id: string;
  name: string;
  route: string;
  description: string;
  imageUrl: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
};

export class Event {

  constructor(private event: OrgEvent) { }

  get id(): string {
    return this.event._id;
  }

  get name(): string {
    return this.event.name;
  }

  get route(): string {
    return this.event.route;
  }

  get description(): string {
    return this.event.description;
  }

  get imageUrl(): string {
    return this.event.imageUrl;
  }

  get date(): string {
    return this.event.date;
  }

  get dateAsDateObj(): dayjs.Dayjs | null {
    if (!!this.event.date) {
      return dayjs(this.event.date);
    }
    return null;
  }

  get dayOfWeek(): string {
    if (this.dateAsDateObj) {
      return getWeekDayName(this.dateAsDateObj);
    }
    return '';
  }

  get startTime(): string {
    return this.event.startTime;
  }

  get endTime(): string {
    return this.event.endTime;
  }

  get location(): string {
    return this.event.location;
  }
}