import Head from 'next/head'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import Checkbox from 'components/inputs/checkbox'
import Select from 'components/inputs/select'
import TextInput from 'components/inputs/text'

import Radio from 'components/inputs/radio'

const Form = styled.form`
  flex-direction: column;
  width: 20em;
  padding: 1em;
`

const OPTIONS = [
  {
    label: 'One',
    value: 'one',
  },
  {
    label: 'Two',
    value: 'two',
  },
]

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <Head>
        <title>Nameless</title>
        <meta name="title" content="Nameless" />
        <meta
          name="description"
          content="Anonymous complaints and suggestions."
        />
      </Head>

      <h1>Nameless</h1>

      <Form onSubmit={handleSubmit((data) => console.log({ data }))}>
        <TextInput
          name="firstName"
          label="Name"
          errorMessage={errors.firstName?.type}
          {...register('firstName', { required: true })}
        />
        <TextInput name="lastName" label="Surname" />
        <Select
          name="branch"
          label="Select branch"
          options={OPTIONS}
          value={OPTIONS[1].value}
        />
        <Checkbox
          name="color"
          legend="Select applicable options"
          options={OPTIONS}
        />

        <Radio legend="Select one option" name="size" options={OPTIONS} />
        <button type="submit">submit</button>
      </Form>
    </>
  )
}

export default Home
