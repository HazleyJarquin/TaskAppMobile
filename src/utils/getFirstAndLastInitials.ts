export const getFirstAndLastInitials = (fullName: string) => {
  if (!fullName || typeof fullName !== "string") return "";

  const names = fullName
    .trim()
    .split(/\s+/)
    .filter((name) => name.length > 0);

  if (names.length === 0) return "";

  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial =
    names.length > 1 ? names[names.length - 1].charAt(0).toUpperCase() : "";

  return firstInitial + lastInitial;
};
