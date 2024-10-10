// Chat.jsx
import React from 'react';
import Header from '../Components/Header';
import ChatComponent from '../Components/ChatComponent';
import calendar from '../assets/calendar.png';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

const Chat = () => {
  const navigate = useNavigate();
  const userId = 'jjang'; // 로그인한 사용자의 ID

  return (
    <div>
      <Header title="TripMate" />
      <div className="invite-message">
        <p>윤재형님, 장성원님, 정진교님, 최윤서님이 초대되었습니다.</p>
      </div>
      <ChatComponent userId={userId} />
    </div>
  );
};

export default Chat;
