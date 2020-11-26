export const dateToString = (postDate: Date) => {
  if (!postDate) return "";
  let currentTime = Date.now();
  let postTime = new Date(postDate).getTime();
  let postTimeDiff = (currentTime - postTime) / 1000;
  let visiblePostDate = "";
  let visiblePostMonth: string | number = "";

  if (postTimeDiff <= 120) {
    visiblePostDate = `1 minute ago`;
  } else if (postTimeDiff <= 3600) {
    visiblePostDate = Math.floor(postTimeDiff / 60) + ` minutes ago`;
  } else if (postTimeDiff <= 7200) {
    visiblePostDate = `1 hour ago`;
  } else if (postTimeDiff <= 82800) {
    visiblePostDate = Math.floor(postTimeDiff / 3600) + ` hours ago`;
  } else if (postTimeDiff <= 172800) {
    visiblePostDate = `1 day ago`;
  } else if (postTimeDiff <= 604800) {
    visiblePostDate = Math.floor(postTimeDiff / 86400) + ` days ago`;
  } else {
    visiblePostMonth = new Date(postDate).getMonth();
    if (visiblePostMonth === 0) visiblePostMonth = "January";
    else if (visiblePostMonth === 1) visiblePostMonth = "February";
    else if (visiblePostMonth === 2) visiblePostMonth = "March";
    else if (visiblePostMonth === 3) visiblePostMonth = "April";
    else if (visiblePostMonth === 4) visiblePostMonth = "May";
    else if (visiblePostMonth === 5) visiblePostMonth = "June";
    else if (visiblePostMonth === 6) visiblePostMonth = "July";
    else if (visiblePostMonth === 7) visiblePostMonth = "August";
    else if (visiblePostMonth === 8) visiblePostMonth = "September";
    else if (visiblePostMonth === 9) visiblePostMonth = "October";
    else if (visiblePostMonth === 10) visiblePostMonth = "November";
    else visiblePostMonth = "December";

    visiblePostDate = visiblePostMonth + " " + new Date(postDate).getDate();
  }
  return visiblePostDate;
};
