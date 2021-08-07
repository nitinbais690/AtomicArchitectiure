import { useState, useEffect } from 'react';

const useForm = (callback: any, validate: any) => {
  // store and set form values
  const [values, setValues] = useState({});
  // store and set form errors
  const [errors, setErrors] = useState({});
  // store and set form submit status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // check that isSubmitting is true inside of the useEffect
  useEffect(() => {
    // if (Object.keys(errors).length === 0 && isSubmitting) {
    //   callback();
    // }
  }, [errors]);

  // handle submit event
  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
    }
    await setErrors(validate(values));
    await setIsSubmitting(true);
    if (Object.keys(validate(values)).length === 0) {
      callback();
    }
  };

  // handle change event for form field
  const handleChange = (event: any, withEvent = false) => {
    if (withEvent) {
      console.log(event);
      if (event.persist) {
        event.persist();
      }
      setValues((values) => ({
        ...values,
        [event.name]: event.value,
      }));
    } else {
      setValues((values) => ({
        ...values,
        [event.name]: event.value,
      }));
    }
    setErrors(
      validate({
        ...values,
        [event.name]: event.value,
      }),
    );
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
