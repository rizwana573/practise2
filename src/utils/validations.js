export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Invalid email address";
  return "";
};

export const validatePhone = (phone) => {
  if (!phone) return "Phone number is required";
  if (!/^\d{10}$/.test(phone)) return "Invalid phone number";
  return "";
};

export const validateConfirmPhone = (phone, confirmPhone) => {
  if (phone !== confirmPhone) return "Phone numbers do not match";
  return "";
};

export const validateCountry = (country) => {
  if (!country) return "Country is required";
  return "";
};
export const validateLegalAgreement = (isChecked) => {
  if (!isChecked) return "You must accept the legal agreement";
  return "";
};