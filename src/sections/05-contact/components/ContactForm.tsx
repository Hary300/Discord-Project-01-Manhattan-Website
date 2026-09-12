import { contactSchema, type ContactSchema } from '@/schema/contactSchema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import InputField from './InputField';
import { contactData } from '@/data/05-contactData';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data);
      alert('Your message delivered successfully');
      reset();
    } catch (error) {
      console.log(error);
      alert('Error! Please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fields = contactData.formFields;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full md:max-w-93.75 rounded-xl md:rounded-2xl flex flex-col gap-4 lg:gap-6 items-end'
      >
        <div className='flex flex-col gap-4 w-full'>
          {fields.map((field) => {
            const errorMessage = errors[field.name]?.message;
            return (
              <InputField
                key={field.id}
                type={field.type}
                register={register}
                label={field.label}
                name={field.name}
                errorMessage={errorMessage}
              />
            );
          })}
        </div>
        <Button
          disabled={isSubmitting}
          type='submit'
          className='flex gap-2 items-center bg-green-primary text-[28px] font-bold h-13 w-fit'
        >
          <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
        </Button>
      </form>
    </>
  );
};
export default ContactForm;
