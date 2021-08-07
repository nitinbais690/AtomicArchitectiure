const dayArr = [
  { d: '1', dd: '01', ddd: 'Sun', dddd: 'Sunday' },
  { d: '2', dd: '02', ddd: 'Mon', dddd: 'Monday' },
  { d: '3', dd: '03', ddd: 'Tue', dddd: 'Tueday' },
  { d: '4', dd: '04', ddd: 'Wed', dddd: 'Wednesday' },
  { d: '5', dd: '05', ddd: 'Thu', dddd: 'Thursday' },
  { d: '6', dd: '06', ddd: 'Fri', dddd: 'Friday' },
  { d: '7', dd: '07', ddd: 'Sat', dddd: 'Satday' },
];

const monthArr = [
  {
    M: '1',
    MM: '01',
    MMM: 'Jan',
    MMMM: 'January',
  },
  {
    M: '2',
    MM: '02',
    MMM: 'Feb',
    MMMM: 'February',
  },
  {
    M: '3',
    MM: '03',
    MMM: 'Mar',
    MMMM: 'March',
  },
  {
    M: '4',
    MM: '04',
    MMM: 'Apr',
    MMMM: 'April',
  },
  {
    M: '5',
    MM: '05',
    MMM: 'May',
    MMMM: 'May',
  },
  {
    M: '6',
    MM: '06',
    MMM: 'Jun',
    MMMM: 'June',
  },
  {
    M: '7',
    MM: '07',
    MMM: 'Jul',
    MMMM: 'July',
  },
  {
    M: '8',
    MM: '08',
    MMM: 'Aug',
    MMMM: 'August',
  },
  {
    M: '9',
    MM: '09',
    MMM: 'Sep',
    MMMM: 'September',
  },
  {
    M: '10',
    MM: '10',
    MMM: 'Oct',
    MMMM: 'October',
  },
  {
    M: '11',
    MM: '11',
    MMM: 'Nov',
    MMMM: 'November',
  },
  {
    M: '12',
    MM: '12',
    MMM: 'Dec',
    MMMM: 'December',
  },
];

const unit = {
  a: ['am', 'pm'],
  A: ['AM', 'PM'],
};

const nth = function (d: number) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const formatDate = (theDate: string, format = '$DD $MMM $YY, $hh:$mm $A') => {
  let isNaNStatus = 0;
  let parseDate: any = Date.parse(theDate);

  if (isNaN(parseDate)) {
    isNaNStatus = 1;
    parseDate = `${theDate.split(' ')[0]}T${theDate.split(' ')[1]}`;
  }

  parseDate = new Date(parseDate);

  let day = parseDate.getDay();
  let month = parseDate.getMonth();
  let date = parseDate.getDate();
  let year = parseDate.getFullYear();
  let hours = parseDate.getHours();
  let minutes = parseDate.getMinutes();
  let seconds = parseDate.getSeconds();

  if (isNaNStatus) {
    day = parseDate.getUTCDay();
    month = parseDate.getUTCMonth();
    date = parseDate.getUTCDate();
    year = parseDate.getUTCFullYear();
    hours = parseDate.getUTCHours();
    minutes = parseDate.getUTCMinutes();
    seconds = parseDate.getUTCSeconds();
  }

  let formatDate: string = format;

  // replace with day
  formatDate = formatDate.replace('$dddd', dayArr[day].dddd);
  formatDate = formatDate.replace('$ddd', dayArr[day].ddd);
  formatDate = formatDate.replace('$dd', dayArr[day].dd);
  formatDate = formatDate.replace('$d', dayArr[day].d);

  // replace with month
  formatDate = formatDate.replace('$MMMM', monthArr[month].MMMM);
  formatDate = formatDate.replace('$MMM', monthArr[month].MMM);
  formatDate = formatDate.replace('$MM', monthArr[month].MM);
  formatDate = formatDate.replace('$M', monthArr[month].M);

  // replace with year
  formatDate = formatDate.replace('$YYYY', `${year}`);
  formatDate = formatDate.replace('$YY', `${year}`.substr(2, 2));

  // replace with date
  formatDate = formatDate.replace('$DD', date < 10 ? `0${date}` : `${date}`);
  formatDate = formatDate.replace(
    '$Do',
    date < 10 ? `0${date}${nth(date)}` : `${date}${nth(date)}`
  );
  formatDate = formatDate.replace('$D', `${date}`);

  if (formatDate.includes('$a') || formatDate.includes('$A')) {
    // calculate 12 hours and unit in am/pm
    const unitA = hours < 12 ? unit.A[0] : unit.A[1];
    const unita = hours < 12 ? unit.a[0] : unit.a[1];
    hours = hours < 12 ? hours : hours - 12;

    // replace am pm
    formatDate = formatDate.replace('$A', unitA);
    formatDate = formatDate.replace('$a', unita);
  }

  // replace with hours
  formatDate = formatDate.replace('$hh', hours < 10 ? `0${hours}` : `${hours}`);
  formatDate = formatDate.replace('$h', `${hours}`);

  // replace with minutes
  formatDate = formatDate.replace(
    '$mm',
    minutes < 10 ? `0${minutes}` : `${minutes}`
  );
  formatDate = formatDate.replace('$m', `${minutes}`);

  // replace with seconds
  formatDate = formatDate.replace(
    '$ss',
    seconds < 10 ? `0${seconds}` : `${seconds}`
  );
  formatDate = formatDate.replace('$s', `${seconds}`);

  return formatDate;
};

export const dateTime = {
  formatDate,
};
