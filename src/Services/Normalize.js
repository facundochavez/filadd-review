//NORMALIZE SERVICE

const Normalize = (data) => {
  return data
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export default Normalize;