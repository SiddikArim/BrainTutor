import Container from "@/components/Container";

const Register = () => {
  return (
    <Container className="">
      <input type="text" placeholder="Name" required />
      <br />
      <br />
      <input type="email" placeholder="Email Address" required />
      <br />
      <br />
      <input type="number" placeholder="Contact Number" required />
      <br />
      <br />
      <button
        onClick={() => {
          alert("Registered Successfully");
        }}
      >
        Submit
      </button>
    </Container>
  );
};

export default Register;
