import * as React from 'react';
import { cn } from 'cn';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { ImMinus, ImPlus } from 'react-icons/im';

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn('flex w-full flex-col', className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border px-4 h-full', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/accordion-trigger relative flex flex-1 items-center gap-4  rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50    cursor-pointer',
          className
        )}
        {...props}
      >
        <div className='rounded-lg bg-[#3872b2] flex justify-center items-center size-11 shrink-0 text-white'>
          <ImPlus
            data-slot='accordion-trigger-icon'
            className='pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden'
          />
          <ImMinus
            data-slot='accordion-trigger-icon'
            className='pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline '
          />
        </div>
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  contentId,
  idClassName,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content> & {
  contentId: string;
  idClassName?: string;
}) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up'
      {...props}
    >
      <div
        className={cn(
          ' pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4 flex gap-4',
          className
        )}
      >
        <p
          className={cn(
            'text-[50px] font-bold leading-10 text-green-primary',
            idClassName
          )}
        >
          {contentId}.
        </p>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
