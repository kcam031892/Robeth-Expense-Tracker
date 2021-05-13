import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Card, CardBody, CardHeader } from 'components/Card';
import Button from 'components/Button';
import Input from 'components/Input';
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
const AddForm = ({handleSubmit,title}) => {
  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <h1>New {title}s</h1>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={{ amount: '', category: '', date: '' }}
            validate={(values) => {
              const errors = {};
              if (values.amount <= 0) {
                errors.amount = 'Must be greater than 0';
              } else if (!/^([0-9])+$/.test(values.amount)) {
                errors.amount = 'Must be a digit';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <ErrorMessage name='amount' component='div' />
                <Field type='text' name='amount' as={Input} placeholder='Enter amount' autocomplete='off' />
                <Field type='text' name='category' as={Input} placeholder='Enter Category' />
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
