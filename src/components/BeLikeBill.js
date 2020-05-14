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
    <Container>
      <Formik
        initialValues={{ name: '', gender: 'f' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Please Fill Out With Your Name')
        })}

        onSubmit={({ name, gender }, { setSubmitting }) => {
          getJoke({ name, gender })
          setSubmitting(false)
        }}
      >
        <FormContainer>
          <Form>
            <Field type='text' id='name' name='name' placeholder='What is Your Name?' />
            <ErrorMessage name='name' render={msg => <ErrorParagraph>{msg}</ErrorParagraph>} />

            <Field as='select' name='gender' id='gender'>
              <option value='f'>Female</option>
              <option value='m'>Male</option>
            </Field>

            <button type='submit'>Get Joke</button>
          </Form>
        </FormContainer>
      </Formik>
      <Image src={imageUrl} />
    </Container>
  )
}

// Styled Components
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 420px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #EBF4F0;
  margin: 50px auto;
  border-radius: 5px;
  padding: 20px;
  `

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  /* overflow: hidden; */

  input, select, button {
    border: none;
    display: block;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 20px 0px;
    width: 300px;
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

const ErrorParagraph = styled.p`
  color: #FF0000;
  font-weight: BeforeUnloadEvent;
  margin: 10px auto;
`

export default BeLikeBill
