import * as yup from 'yup';
import { InferType } from 'yup';

// helper to accept empty string as "no date"
const asNullableDate = yup
  .date()
  .typeError('Invalid date')
  .transform((value, originalValue) => (originalValue === '' ? null : value))
  .nullable();

export const schemaContact = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-zА-Яа-яЇїІіЄєҐґ\s-]+$/, 'Only Cyrillic or Latin letters, spaces, and hyphens are allowed')
    .min(2, 'Name must be at least 2 characters')
    .max(45, 'Name can be at most 45 characters'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?[0-9()\s-]{7,20}$/, 'Invalid phone number'),
  date: asNullableDate, // optional; accepts "" or a valid date
  ceremonyLocation: yup.string().max(200, 'Value is too long').optional(),
  notice: yup.string().max(1000, 'Notice can be at most 1000 characters').optional(),
});

export type FormSchema = InferType<typeof schemaContact>;
