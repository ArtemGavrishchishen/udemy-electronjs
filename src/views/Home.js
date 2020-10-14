import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';

import { chatActions } from '../store/chats';

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chats.items)

  useEffect(() => {
    dispatch(chatActions.fetchChats())
  }, [dispatch]);

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList chats={chats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle text="Choose your channel" />
        <AvailableChatsList chats={chats} />
      </div>
    </div>
  );
};

export default Home;
