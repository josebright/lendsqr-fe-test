import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Logo from '../../utils/Assests/logo.svg'
import OnBoardingImage from '../../utils/Assests/pablo-sign-in 1.svg'
import { Formik, Form, Field } from 'formik'
import InputComponent from '../../components/Templates/inputComponent'
import SubmitButtonComponent from '../../components/Templates/submitButtonComponent'
import TextData from '../../utils/TextData/staticTexts.json'
import Spacer from '../../components/Templates/spacerComponent'
import TextButton from '../../components/Templates/textButtonComponent'
import ErrorComponent from '../../components/Templates/errorComponent'
import AlertBar from '../../components/Templates/alertBarComponent'

interface Props {
  onLogin: (isLoggedIn: boolean) => void
}

interface FormValues {
  username: string
  password: string
}

const LoginPage: React.FC<Props> = ({ onLogin }): React.ReactElement => {
  const [alert, setAlert] = useState<{ message: string, type: 'success' | 'error' | '' }>({ message: '', type: '' })
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const closeAlert = (): void => {
    setShowAlert(false)
  }

  return (
    <div className='container'>
      <Grid container className='centered-flex'>
        <Grid item xs={0} md={6} className='vertically-centered-flex'>
          <Grid>
            <Spacer height='5%' />
            <img src={Logo} alt="Logo" height='36px' width='173.76px' />
            <Spacer height='20%' />
            <img src={OnBoardingImage} alt="On Boarding" height='337.57px' width='100%' />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className='vertically-centered-flex'>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }): void => {
              if (values.username === 'user' && values.password === 'pass') {
                onLogin(true)
              } else {
                setAlert({ message: 'Incorrect Email or Password.', type: 'error' })
                setShowAlert(true)
              }
              setSubmitting(false)
            }}
            validate={(values): Partial<FormValues> => {
              const errors: Partial<FormValues> = {}
              if (!values.username) errors.username = 'Email is required'
              if (!values.password) errors.password = 'Password is required'
              return errors
            }}
          >
            {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
              <div className='formik-form'>
                <h1>{TextData.loginPage.title}</h1>
                <h3>{TextData.loginPage.subTitle}</h3>
                <Spacer height='3rem' />
                <Form>
                  <Field
                    name="username"
                    component={InputComponent}
                    width='94%'
                    type='text'
                    label='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.username && errors.username && <ErrorComponent errorMessage={errors.username} />}
                  <Spacer height='1rem' />
                  <Field
                    name="password"
                    component={InputComponent}
                    width='94%'
                    type='password'
                    label='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && <ErrorComponent errorMessage={errors.password} />}
                  <Spacer height='1rem' />
                  <TextButton text={TextData.loginPage.forgotPass} href='#' />
                  <Spacer height='2rem' />
                  <SubmitButtonComponent disabled={isSubmitting} variant='primary' buttonText={TextData.loginPage.submitButtonText} width='100%' />
                </Form>
              </div>
            )}
          </Formik>
        </Grid>
      </Grid>
      {showAlert === true && alert.type !== '' && <AlertBar message={alert.message} type={alert.type} onClose={closeAlert} />}
    </div>
  )
}

export default LoginPage
