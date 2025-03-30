import moment from "moment";

export const truncateText = (text = "", maxLength = 0) => {
  if (typeof text !== "string") return text;
  return text?.length > maxLength ? text?.slice(0, maxLength) + "..." : text;
};

export const getTimeLeft = (endDate) => {
  if (!endDate) {
    return "Invalid Date";
  }

  const end = moment(endDate);
  if (!end.isValid()) {
    return "Invalid Date";
  }

  const now = moment();
  if (now.isAfter(end)) {
    return "Time is up";
  }

  const duration = moment.duration(end.diff(now));
  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  return `${days}d ${hours}h`;
};

export const formatDate = (date, format) => {
  return moment(date).format(format);
};

export const capitalizeFirstChar = (str) => {
  if (typeof str !== "string" || !str.trim()) {
    return str;
  }
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};
