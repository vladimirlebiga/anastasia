'use client';
import React, { useEffect, useState, useId } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { StyledTextField } from './Styled';

interface InputConfig {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

interface InputProps {
  id: string;
}

export const InputComponent = ({ id }: InputProps) => {
  const config: Record<string, InputConfig> = {
    name: {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Provide your full name',
    },
    email: {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    ceremonyLocation: {
      name: 'ceremonyLocation',
      label: 'Ceremony Location',
      type: 'text',
      placeholder: 'Enter your ceremony location',
    },
    notice: {
      name: 'notice',
      label: 'Notice',
      type: 'text',
      placeholder: 'Leave your comment',
    },
    
  };

  // 1. Always call your Hooks unconditionally at the top
  const [mounted, setMounted] = useState(false);
  const reactId = useId();
  const { control } = useFormContext();

  // 2. Then do side effects
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Finally, if you need to bail out of rendering, do so
  if (!mounted) {
    return null;
  }

  // 4. Now do the rest of your logic
  const { name, label, type, placeholder } = config[id];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <StyledTextField
            {...field}
            id={reactId}
            variant="outlined"
            type={type}
            error={!!error}
            helperText={error ? error.message : ''}
            label={label}
            placeholder={placeholder}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      )}
    />
  );
};
