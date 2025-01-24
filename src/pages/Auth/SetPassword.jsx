import Button from "../../component/atom/Button";
import Container from "../../component/atom/Container";
import Form from "../../component/atom/Form";
import Input from "../../component/atom/Input";
import Section from "../../component/atom/Section";
import FormTitle from "../../component/moleculs/FormTitle";
import ShowPassword from "../../component/moleculs/ShowPassword";

const SetPassword = () => {
  return (
    <>
      <Section>
        <Container className="flex justify-center items-center h-full">
          <Form className="flex flex-col gap-4">
            <FormTitle
              title="Set Password"
              description="Enter your new password"
            />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />
            <ShowPassword />
            <Button className="text-white">Submit</Button>
          </Form>
        </Container>
      </Section>
    </>
  );
};

export default SetPassword;
