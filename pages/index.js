import Head from 'next/head'

import Checkbox from 'components/inputs/checkbox'
import Select from 'components/inputs/select'
import TextInput from 'components/inputs/text'
import { Flex } from 'components/styled'

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

      <Flex
        as="form"
        flexDirection="column"
        width="18rem"
        p="1em"
        onSubmit={(e) => {
          e.preventDefault()
          console.log('submit', e)
        }}
      >
        <TextInput name="firstName" label="Name" />
        <TextInput name="lastName" label="Surname" />
        <Select
          name="branch"
          label="Select branch"
          options={OPTIONS}
          // value={OPTIONS[1].value}
        />
        <Checkbox legend="Select applicable options" options={OPTIONS} />
        <button type="submit">submit</button>
      </Flex>
    </>
  )
}

export default Home
