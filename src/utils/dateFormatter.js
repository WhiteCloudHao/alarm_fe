export function formatDate_yyyyhhmm(date) {
  var month = '' + (date.getMonth() + 1);
  var day = '' + date.getDate();
  var year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

// Time (eg: 09:00)
export function subtractTime(time1, time2) {
  // Time: String (eg: 09:00)
  function getTimeInMinutes(time) {
    const [hours, minutes] = time.split(':');
    return parseInt(hours * 60) + parseInt(minutes);
  }

  const time1Minutes = getTimeInMinutes(time1);
  const time2Minutes = getTimeInMinutes(time2);

  let diff = time1Minutes - time2Minutes;

  if (diff < 0) {
    diff += 24 * 60;
  }

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return `${hours}:${minutes}`;
}
export function subtractTimeCheckDay(time1, time2, day) {
  // Time: String (eg: 09:00)
  
  function getTimeInMinutes(time) {
    const [hours, minutes] = time.split(':');
    return parseInt(hours * 60) + parseInt(minutes);
  }

  const time1Minutes = getTimeInMinutes(time1);
  const time2Minutes = getTimeInMinutes(time2);

  let diff = time1Minutes - time2Minutes;
  let dayInt = parseInt(day)
  if(dayInt > 0) {
    if (diff < 0) {
      diff += 24 * 60;
      dayInt--
    }
  } else {
    diff = -diff
  }

  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  return `${dayInt}:${hours}:${minutes}`;
}

export function formatReminderTime(days, hours, minutes) {
  let reminderString = '';

  days = parseInt(days);
  hours = parseInt(hours);
  minutes = parseInt(minutes);

  if (!days && !hours && !minutes) {
    return 'On time';
  }

  if (days > 0) {
    reminderString += `${days} day${days > 1 ? 's' : ''}`;
  }

  if (hours > 0) {
    if (reminderString) {
      reminderString += ', ';
    }
    reminderString += `${hours} hour${hours > 1 ? 's' : ''}`;
  }

  if (minutes > 0) {
    if (reminderString) {
      reminderString += ', ';
    }
    reminderString += `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

  reminderString += ' early';

  return reminderString;
}

export function formatReminderDay(days, time) {
  let reminderString = '';

  days = parseInt(days);

  if (!days) {
    reminderString = `On the day (${time})`;
  } else {
    reminderString = `${days} day${days > 1 ? 's' : ''} early (${time})`;
  }

  return reminderString;
}

export function formatReminderWeek(week, time) {
  let reminderString = '';

  week = parseInt(week);

  if (!week) {
    reminderString = `On the day (${time})`;
  } else {
    reminderString = `${week} week${week > 1 ? 's' : ''} early (${time})`;
  }

  return reminderString;
}

export function compareDatesByDayMonthYear(date1, date2) {
  const day1 = date1.getDate();
  const month1 = date1.getMonth();
  const year1 = date1.getFullYear();

  const day2 = date2.getDate();
  const month2 = date2.getMonth();
  const year2 = date2.getFullYear();

  if (day1 === day2 && month1 === month2 && year1 === year2) {
    return true;
  } else {
    return false;
  }
}
