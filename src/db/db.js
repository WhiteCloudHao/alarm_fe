import Dexie from 'dexie';

export const db = new Dexie('localDatabase');

/**
 * Task collection
 * @param id
 * @param {String} title
 * @param {String} description
 * @param {Array} category
 * @param {Array} tags
 * @param {DateTime} createdAt
 * @param {DateTime} updatedAt
 * @param {Number} dayInterval
 * @param {Number} weekInterval
 * @param {Number} monthInterval
 * @param {Number} secondInterval
 * @param {Number} hourInterval
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Time} startTime (eg: 09:00) -> Use for second or hour interval
 * @param {Time} endTime
 * @param {Array} reminders
 * @param {Number} status (enum: 0, 1)
 * @param {Number} priority (enum: 0, 1, 2, 3)
 * @param {Number} deleted (enum: 0, 1)
 * @param {String} skip
 */

db.version(1).stores({
  tasks:
    'id, title, description, category, tags, createdAt, updatedAt, dayInterval, weekInterval, monthInterval, secondInterval, hourInterval, startDate, endDate, startTime, endTime, reminders, status, priority, deleted, skip',
  categories: 'id, title, description',
  tags: 'id, name',
});
