import phoneIcon from '@/assets/images/contact/phone.png';
import mailIcon from '@/assets/images/contact/mail.png';
import locationIcon from '@/assets/images/contact/location.png';

export type ContactFieldName = 'name' | 'email' | 'message';
export type ContactFieldLabel = 'Name' | 'Email' | 'Message';
export type ContactFieldType = 'text' | 'email' | 'textarea';

interface ContactInfoItem {
  id: string;
  type: 'phone' | 'email' | 'address';
  title: string;
  icon: string;
  details: string[];
}

interface FormField {
  id: string;
  name: ContactFieldName;
  label: ContactFieldLabel;
  type: ContactFieldType;
  placeholder: string;
}

interface ContactData {
  title: string;
  contactInfo: ContactInfoItem[];
  formFields: FormField[];
  submitButtonText: string;
  mapEmbedUrl: string;
}

export const contactData: ContactData = {
  title: 'CONTACT',
  contactInfo: [
    {
      id: 'phone-info',
      type: 'phone',
      title: 'Phone',
      icon: phoneIcon,
      details: ['555 555 5555', 'Mon-Fri 9am - 5pm (EST)'],
    },
    {
      id: 'email-info',
      type: 'email',
      title: 'Email',
      icon: mailIcon,
      details: ['manhattan@yahoo.com'],
    },
    {
      id: 'address-info',
      type: 'address',
      title: 'Address',
      icon: locationIcon,
      details: ['60 Main St.', 'Suite 205', 'Great Neck, NY 11021'],
    },
  ],
  formFields: [
    {
      id: 'name',
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Name',
    },
    {
      id: 'email',
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      id: 'message',
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Message',
    },
  ],
  submitButtonText: 'Submit',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.3111418599!2d-73.969231!3d40.7590615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sid!4v1789209474742!5m2!1sen!2sid',
};
