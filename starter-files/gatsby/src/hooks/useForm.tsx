import { useState } from 'react';

export const useForm = defaults => {
  const [values, setValues] = useState(defaults);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value }: any = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, updateValue };
};

export default useForm;
