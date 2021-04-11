const getInitials = (name: string) => {
  if (!name) {
    return "";
  }
  const splitName = name.split(" ");

  let initials = "";
  for (let word in splitName) {
    initials += splitName[word].charAt(0);
  }

  return initials;
};

export default getInitials;
