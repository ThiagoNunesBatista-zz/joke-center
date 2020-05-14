// External Components
import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const BeLikeBill = () => {
  const [imageUrl, setImageUrl] = useState(null)

  const getJoke = async ({ name, gender }) => {
    name = name.replace(/ /g, '%20')
    const url = `https://belikebill.ga/billgen-API.php?default=1&sex=${gender}&name=${name}`

    setImageUrl(url)
  }

  return (
    <div>
      <Formik
        initialValues={{ name: '', gender: 'f' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Please Fill Out With Our Name')
        })}

        onSubmit={({ name, gender }, { setSubmitting }) => {
          getJoke({ name, gender })
          setSubmitting(false)
        }}
      >
        <FormContainer>
          <Form>
            <Field type='text' id='name' name='name' placeholder='What is Your Name?' />
            <ErrorMessage name='name' />

            <Field as='select' name='gender' id='gender'>
              <option value='f'>Female</option>
              <option value='m'>Male</option>
            </Field>

            <button type='submit'>Get Joke</button>
          </Form>
        </FormContainer>
      </Formik>

      <Image src={imageUrl} />
    </div>
  )
}

const Image = styled.img`
  width: 500px;
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #EBF4F0;
  margin: 50px auto;
  max-width: 300px;
  border-radius: 5px;
  padding: 10px 20px;


  input, select, button {
    border: none;
    display: block;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 20px 0px;
    width: 100%;
    background: #FFF;
    border: 1px solid #ccc;
  }

  button[type='submit']{
    background: #BFDBCF;
  }

  button[type='submit']:hover {
    cursor: pointer;
    background: #72837C;
  }
`

export default BeLikeBill
