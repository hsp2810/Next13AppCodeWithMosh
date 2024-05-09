import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

interface Props {
  name: string;
}

const WelcomeEmail = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome User</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text>Hello {name}</Text>
            <Link href='https://harshitpatel.netlify.app/'>
              Visit My Portfolio
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
