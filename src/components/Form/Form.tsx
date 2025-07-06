'use client';
import { Button, Container } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import {
  StyledButtonWrapper,
  StyledFormWrapper,
  StyledH1,
  StyledSection,
} from './Styled';
import { DateInput } from '../Input/DateInput';
import { InputComponent } from '../Input/Input';
import { PhoneInputComponent } from '../Input/PhoneInput';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const methods = useForm();
  const { control } = methods;

  const onSubmit = (data: any) => {
    emailjs
      .send(
        'your_service_id',    // Replace with your actual service ID
        'your_template_id',   // Replace with your actual template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: data.date ? new Date(data.date).toLocaleDateString('en-GB') : '',
          ceremonyLocation: data.ceremonyLocation,
          notice: data.notice,
        },
        'your_public_key'     // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log('✅ Email sent:', result.text);
          alert('Form submitted successfully!');
          methods.reset(); // optional: reset form after submission
        },
        (error) => {
          console.error('❌ Email failed:', error.text);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <FormProvider {...methods}>
      <StyledSection>
        <Container>
          <StyledH1 variant='h2'>Wedding Day Details</StyledH1>
          <StyledFormWrapper>
            <InputComponent id='name' />
            <InputComponent id='email' />
            <PhoneInputComponent />
            <DateInput name='date' control={control} />
            <InputComponent id='ceremonyLocation' />
            <InputComponent id='notice' />
          </StyledFormWrapper>
          <StyledButtonWrapper>
            <Button variant='outlined'>send</Button>
          </StyledButtonWrapper>
        </Container>
      </StyledSection>
    </FormProvider>
  );
};
