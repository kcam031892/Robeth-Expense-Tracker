import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Card, CardBody, CardHeader } from 'components/Card';
import { ErrorMessage as Error } from 'components/ErrorMessage';
import Button from 'components/Button';
import { Input, Select } from 'components/Forms';
const Wrapper = styled.div`
  ${CardHeader} {
    h1 {
      text-align: center;
      font-size: 1.5rem;
    }
  }
  ${Card} {
    min-width: 450px;
  }
  ${Button} {
    width: 100%;
  }
`;
const AddForm = ({handleSubmit,title,categories}) => {
  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <h1>New {title}s</h1>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={{ amount: '', category: categories[0], date: '' }}
            validate={(values) => {
              const errors = {};
              if (values.amount <= 0) {
                errors.amount = 'Must be greater than 0';
              } else if (!/^([0-9])+$/.test(values.amount)) {
                errors.amount = 'Must be a digit';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting,resetForm }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
                resetForm();
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ErrorMessage name='amount' component={Error} />
                <Field type='text' name='amount' as={Input} placeholder='Enter amount' autocomplete='off' />
                <Field name='category' as={Select} placeholder='Enter Category'>
                  {categories && categories.map((category,index) => (<option key={index} value={category}>{category}</option>) )}
                </Field>
                <Field type='date' name='date' as={Input} placeholder='Enter amount' />
                <Button type='submit' disabled={isSubmitting}>
                  Add {title}
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default AddForm;
