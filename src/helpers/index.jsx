export const openFile = (file, target = '_blank') => window.open(file, target);

export const scrollTo = (to, position, behavior = 'smooth') =>
  window.scrollTo({ [to]: position, behavior });
