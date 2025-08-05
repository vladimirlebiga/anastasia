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
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      ceremonyLocation: '',
      notice: '',
    }
  });
  const { control, handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    console.log('Submitting form with data:', data);
    console.log('Using EmailJS config:', {
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      publicKey: process.env.PUBLIC_KEY?.substring(0, 10) + '...'
    });
    
    emailjs
      .send(
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: data.date
            ? new Date(data.date).toLocaleDateString('en-GB')
            : '',
          ceremonyLocation: data.ceremonyLocation,
          notice: data.notice,
        },
        process.env.PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log('✅ Email sent successfully:', result);
          alert('Thank you! Your message has been sent successfully.');
          reset(); // Reset form after successful submission
        },
        (error) => {
          console.error('❌ EmailJS error:', error);
          alert(`Email failed: ${error.text || 'Unknown error'}. Please check your EmailJS configuration.`);
        }
      );
  };

  return (
    <section id='form'>
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
              <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
                send
              </Button>
            </StyledButtonWrapper>
          </Container>
        </StyledSection>
      </FormProvider>
    </section>
  );
};
