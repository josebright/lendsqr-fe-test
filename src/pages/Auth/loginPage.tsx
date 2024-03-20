import React from 'react'
import { Grid } from '@mui/material'
import Logo from '../../utils/Assests/logo.svg'
import OnBoardingImage from '../../utils/Assests/pablo-sign-in 1.svg'
import { Formik, Form, Field } from 'formik'
import InputComponent from '../../components/Templates/inputComponent'
import SubmitButtonComponent from '../../components/Templates/submitButtonComponent'
import TextData from '../../utils/TextData/staticTexts.json'
import Spacer from '../../components/Templates/spacerComponent'
import TextButton from '../../components/Templates/textButtonComponent'

interface Props {
  onLogin: (isLoggedIn: boolean) => void
}

const LoginPage: React.FC<Props> = ({ onLogin }): React.ReactElement => {
  return (
    <div className='container'>
      <Grid container className='centered-flex'>
        <Grid item xs={0} md={6} >
          <img src={Logo} alt="Logo" />
          <img src={OnBoardingImage} alt="On Boarding" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.username === 'user' && values.password === 'pass') {
                onLogin(true)
              } else {
                alert(values.username)
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <div className='formik-form'>
                <h1>{TextData.loginPage.title}</h1>
                <h3>{TextData.loginPage.subTitle}</h3>
                <Spacer height='3rem' />
                <Form>
                  <Field name="username" as={InputComponent} width='94%' type='text' label='Email' />
                  <Spacer height='1rem' />
                  <Field name="password" as={InputComponent} width='94%' type='password' label='Password' />
                  <Spacer height='1rem' />
                  <TextButton text={TextData.loginPage.forgotPass} href='#' />
                  <Spacer height='2rem' />
                  <SubmitButtonComponent disabled={isSubmitting} type='primary' buttonText={TextData.loginPage.submitButtonText} width='100%' />
                </Form>
              </div>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoginPage
