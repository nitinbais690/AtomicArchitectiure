import React from 'react';

// container/component
import ContactContainer from '@app/containers/Contacts';

const ContactScreen = (props: any) => {
  return <ContactContainer navigation={props.navigation} />;
};

export default ContactScreen;
