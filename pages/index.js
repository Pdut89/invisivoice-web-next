import Head from 'next/head'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

// import Checkbox from 'components/input/checkbox'
import Select from 'components/input/select'
import TextInput from 'components/input/text'

// import Radio from 'components/input/radio'

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

      <Form onSubmit={handleSubmit((data) => console.log({ data }))} noValidate>
        <TextInput
          name="firstName"
          label="Name"
          errorMessage={errors.firstName?.type}
          required
          placeholder="Enter your name"
          {...register('firstName', { required: true })}
        />
        <TextInput
          name="disabled"
          label="Disabled"
          disabled
          value="I am disabled"
        />
        <TextInput
          name="readonly"
          label="Read only"
          readOnly
          value="I am read only"
        />

        <Select
          name="branch"
          label="Select branch"
          options={OPTIONS}
          // value={OPTIONS[1].value}
        />
        {/* <Checkbox
          name="color"
          legend="Select applicable options"
          options={OPTIONS}
        /> */}

        {/* <Radio legend="Select one option" name="size" options={OPTIONS} /> */}
        <button type="submit">submit</button>
      </Form>
    </>
  )
}

export default Home
