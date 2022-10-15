import TextInput from 'components/inputs/text'

const Home = () => {
  return (
    <>
      <title> A brief, clear, informative, and unique title</title>
      <h1>nameless</h1>
      <TextInput name="name" label="Name" errorMessage="required" />
      <TextInput name="surname" label="Surname" />
    </>
  )
}

export default Home
