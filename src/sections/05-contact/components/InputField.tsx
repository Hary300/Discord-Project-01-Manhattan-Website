import type {
  ContactFieldLabel,
  ContactFieldType,
} from '@/data/05-contactData';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: ContactFieldLabel;
  type: ContactFieldType;
  errorMessage?: string;
}

const InputField = <T extends FieldValues>({
  type,
  errorMessage,
  register,
  name,
  label,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-1.5 lg:gap-2'>
      <div className='flex justify-between items-center'>
        {errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          rows={5}
          placeholder={label}
          className='focus:outline-0 px-4 py-2 border placeholder:font-sans placeholder:font-bold'
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          {...register(name)}
          placeholder={label}
          className='focus:outline-0 px-4 py-2 border placeholder:font-sans placeholder:font-bold '
        />
      )}
    </div>
  );
};

export default InputField;
