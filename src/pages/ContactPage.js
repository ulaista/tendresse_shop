import React from "react";
import PageHeader from '../components/contactPageComponents/PageHeader';
import ContactPage from "../components/contactPageComponents/Content";

function ContactUsPage() {
  return (
    <div className="py-40">
      <PageHeader/>
      <ContactPage/>
    </div>
  );
}

export default ContactUsPage;
