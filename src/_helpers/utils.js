export const localizeNumber = (data) => {
  return parseFloat(data)?.toLocaleString();
};

export const fixLocalizeNumber = (data, localize) => {
  return parseFloat(data)?.toLocaleString(localize);
};

export const isEmpty = (obj) => {
  return Object.keys(obj)?.length === 0;
};

export const hashMapHandler = (target, name, defaultvalues = {}) => {
  return target.hasOwnProperty(name) ? target[name] : defaultvalues;
};

export const validateEmail = (param) => {
  return /\S+@\S+\.\S+/.test(param);
};

export const validatePhone = (param) => {
  if (param.length < 12) return false;
  if (param.length > 18) return false;
  if (param.substring(0, 3) !== "62.") return false;
  return true;
};

export const maskingPhone = (phoneNumber) => {
  let newPhone = phoneNumber?.replace("62.", "+62");
  return newPhone.replace(
    /(\+?\d{3})(\d+)(\d{2})/g,
    function (match, start, middle, end) {
      return start + "*".repeat(middle.length) + end;
    }
  );
};

export const maskingEmail = (email) => {
  return email.replace(
    /^(.)(.*)(.@.*)$/,
    (_, a, b, c) => a + b.replace(/./g, "*") + c
  );
};
