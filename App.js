import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    fatherName: Yup.string().required('Father Name is required'),
    dob: Yup.string().required('Date of Birth is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
  });

  const initialValues = {
    name: '',
    fatherName: '',
    dob: '',
    email: '',
    address: '',
    phoneNumber: '',
  };

  const handleSubmit = (values) => {
    setFormData(values); // Update formData state
    // Handle the form submission logic here
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              label="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <HelperText type="error" visible={Boolean(errors.name)}>
              {errors.name}
            </HelperText>

            <TextInput
              label="Father Name"
              onChangeText={handleChange('fatherName')}
              onBlur={handleBlur('fatherName')}
              value={values.fatherName}
            />
            <HelperText type="error" visible={Boolean(errors.fatherName)}>
              {errors.fatherName}
            </HelperText>

            <TextInput
              label="Date of Birth"
              onChangeText={handleChange('dob')}
              onBlur={handleBlur('dob')}
              value={values.dob}
            />
            <HelperText type="error" visible={Boolean(errors.dob)}>
              {errors.dob}
            </HelperText>

            <TextInput
              label="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <HelperText type="error" visible={Boolean(errors.email)}>
              {errors.email}
            </HelperText>

            <TextInput
              label="Address"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
            />
            <HelperText type="error" visible={Boolean(errors.address)}>
              {errors.address}
            </HelperText>

            <TextInput
              label="Phone Number"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
            />
            <HelperText type="error" visible={Boolean(errors.phoneNumber)}>
              {errors.phoneNumber}
            </HelperText>

            <Button mode="contained" onPress={handleSubmit}>
              Submit
            </Button>
          </>
        )}
      </Formik>
      <StatusBar style="auto" />
      <Text>Form Data: {JSON.stringify(formData)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
});
