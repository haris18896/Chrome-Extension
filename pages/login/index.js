/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { useAmp } from 'next/amp'

import * as Yup from 'yup'
import classNames from 'classnames'

import Layout from '../../Layout'
import { useFormik } from 'formik'
import { Eye, EyeOff } from 'react-feather'
import { Button, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap'

export default function Login() {
  const isAmp = useAmp()

  const [visible, setVisible] = useState(false)
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required('Email is a required field!'),
    password: Yup.string().required('Password is a required field!')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: values => {
      if (isObjEmpty(formik.errors)) {
        const { email, password } = values
        const data = {
          email: email.trim(),
          password: password.trim()
        }
        console.log('login data', data)
      }
    }
  })

  const renderIcon = () => {
    if (visible === false) {
      return <EyeOff size={24} />
    } else {
      return <Eye size={24} />
    }
  }

  // useEffect(() => {
  //   // if user is authenticated then redirect to Connect page
  // }, [])

  return (
    <Layout title='Login'>
      <div className='App'>
        <div className='Login'>
          <div className='Login__Img_container'>
            {isAmp ? (
              <amp-img width='163' height='130' src='/assets/logos/MainLogo.svg' alt='Friends VPN' layout='responsive' />
            ) : (
              <img width='163' height='130' src='/assets/logos/MainLogo.svg' alt='Friends VPN' />
            )}
          </div>
          <div className='Login__formContainer'>
            <form onSubmit={formik.handleSubmit}>
              <InputGroup>
                <FormGroup floating className='form-group'>
                  <Input
                    autoFocus
                    id='Email'
                    name='email'
                    placeholder='Email'
                    type='email'
                    {...formik.getFieldProps('email')}
                    className={classNames({
                      'is-invalid': formik.touched.email && formik.errors.email
                    })}
                  />
                  <Label for='Email'>Email</Label>
                  {formik.touched.email && formik.errors.email ? <FormFeedback>{formik.errors.email}</FormFeedback> : null}
                </FormGroup>
              </InputGroup>

              <InputGroup className='inputGroup-Password'>
                <FormGroup floating className='form-group'>
                  <Input
                    id='Password'
                    name='password'
                    placeholder='Password'
                    type={visible ? 'text' : 'password'}
                    {...formik.getFieldProps('password')}
                    className={classNames({
                      'is-invalid': formik.touched.password && formik.errors.password
                    })}
                  />
                  <Label for='Password'>Password</Label>
                  {formik.touched.password && formik.errors.password ? (
                    <FormFeedback>{formik.errors.password}</FormFeedback>
                  ) : null}
                </FormGroup>
                <InputGroupText className='eyeIcon' onClick={() => setVisible(!visible)}>
                  {renderIcon()}
                </InputGroupText>
              </InputGroup>

              <Button className='button' type='submits' onClick={() => Router.push('/?amp=1')}>
                Sign In
              </Button>
            </form>
            <div className='Login-forgotPassword'>
              <Link href='https://www.friendsvpnpro.com/forgot-password'>
                <a target='_blank'>Forgot Password?</a>
              </Link>
            </div>
          </div>

          <div className='Login__text'>
            <p>
              Don't have an account?{' '}
              <Link href='https://www.friendsvpnpro.com/pricing'>
                <a target='_blank'>Register</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
