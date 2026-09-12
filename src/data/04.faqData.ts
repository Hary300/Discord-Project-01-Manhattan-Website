interface FaqItem {
  id: string;
  value: string;
  trigger: string;
  content: string;
  isOpen?: boolean;
}

interface FaqSectionData {
  title: string;
  faqs: FaqItem[];
}

export const faqSectionData: FaqSectionData = {
  title: "FAQ's",
  faqs: [
    {
      id: 'A',
      value: 'faq-1',
      trigger: 'What is your 90 day interest rate?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, ',
      isOpen: true,
    },
    {
      id: 'B',
      value: 'faq-2',
      trigger: 'What is your 90 day interest rate?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
      isOpen: false,
    },
    {
      id: 'C',
      value: 'faq-3',
      trigger: 'What is your 90 day interest rate?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
      isOpen: false,
    },
    {
      id: 'D',
      value: 'faq-4',
      trigger: 'What is your 90 day interest rate?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
      isOpen: false,
    },
    {
      id: 'E',
      value: 'faq-5',
      trigger: 'What is your 90 day interest rate?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,',
      isOpen: false,
    },
  ],
};
