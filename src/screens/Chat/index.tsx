import React from 'react';

// container/component
import ChatContainer from '@app/containers/Chat';

const ChatScreen = (props: any) => {
  return <ChatContainer navigation={props.navigation} />;
};

export default ChatScreen;
