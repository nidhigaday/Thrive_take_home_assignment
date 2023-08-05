export const getDateDiff = (pastDate: string): number => {
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const pastDateInMilliseconds = new Date(pastDate);

  const diffInMilliseconds: number =
    today.getTime() - pastDateInMilliseconds.getTime();
  const diffInDays = diffInMilliseconds / oneDay;

  return Math.ceil(Math.round(diffInDays));
};
