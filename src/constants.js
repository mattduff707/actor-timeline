export const theme = {
  colors: {
    background: 'hsl(240, 100%, 98%)',
    primaryLight: 'hsl(208, 64%, 91%)',
    primaryNeutral: 'hsl(215, 28%, 47%)',
    primaryDark: 'hsl(210, 18%, 28%)',
    highlightPrimary: 'hsl(4, 80%, 60%)',
    highlightSecondary: 'hsl(58, 100%, 72%)',
  },
  fonts: {
    primary: "'Lora', serif",
  },
};

export const imageUrl = `https://image.tmdb.org/t/p/original`;

export function calculateAge(dob, date) {
  const diff_ms = new Date(date) - new Date(dob).getTime();
  const age_dt = new Date(diff_ms);
  const age = Math.abs(age_dt.getUTCFullYear() - 1970);

  return age;
}
