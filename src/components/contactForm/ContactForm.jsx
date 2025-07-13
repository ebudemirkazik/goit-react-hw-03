import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .matches(/^\d+$/, 'Number must contain only digits')
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be less than 50 characters')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label>
          Number
          <Field name="number" type="tel" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;