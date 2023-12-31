const checkIsByPassAPI = (query: any) => {
  const type = query.type;
  return type === 'BYPASS';
};

const regexPhoneNumber = (phone: string) => {
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  return phone.match(regexPhoneNumber) ? true : false;
};

export { checkIsByPassAPI, regexPhoneNumber };
