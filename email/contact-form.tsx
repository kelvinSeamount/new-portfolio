import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
type ContactFormProps = {
  message: string;
  senderEmail: string;
};
import { Tailwind } from "@react-email/components";

const ContactForm = ({ message, senderEmail }: ContactFormProps) => {
  return (
    <Html>
      <Head>
        <Preview>New message alert</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight">
                  Message from contact form
                </Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>Sernder email is {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
};

export default ContactForm;
