export function contact_validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
   if (!values.phone) {
     errors.phone = "Required";
   } else if (!/^\+?\d{10,}$/i.test(values.phone)) {
     errors.phone = "Invalid phone number";
   }
  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
}

export function register_validate(values) {
  const errors = {};

  if (!values.teamName) {
    errors.teamName = "Required";
  }

  if (!values.topic) {
    errors.topic = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.category || values.category === "Select your category") {
    errors.category = "Please select a category";
  }
  if (!values.size || values.size === "Select") {
    errors.size = "Please select a size";
  }

  if (!values.agreement) {
    errors.agreement = "Please check the checkbox";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^\+?\d{10,}$/i.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }
  return errors;
}
