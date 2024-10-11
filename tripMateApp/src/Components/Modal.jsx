import styled from "styled-components";
import ModalPortal from "./ModalPortal";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import morae from '../assets/morae.png';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContent = styled.div`
  width: 1200px;
  height: 700px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;

const StyledModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledBackButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledModalTitle = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  margin-top: 50px;
  border-bottom: 3px solid pink;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  width: 80px;
  padding: 5px;
  margin: 5px;
  background-color: #ffe6f2;
  border: 2px solid pink;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;

const StyledTextInput = styled.input`
  width: 500px;
  height: 50px;
  padding: 10px;
  margin-top: 100px;
  margin-right: 10px;
  background-color: #ffe6f2;
  border: 2px solid pink;
  border-radius: 5px;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const StyledSelect = styled.select`
  width: 100px;
  padding: 5px;
  margin: 5px;
  border: 2px solid pink;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
`;

const StyledSubmitButton = styled.button`
  width: 100px;
  padding: 10px;
  margin: 20px auto 0;
  background-color: pink;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;

  &:hover {
    background-color: darkpink;
  }
`;

const StyledRegisterButton = styled.button`
  width: 100px;
  background-color: pink;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: darkpink;
  }
`;

const StyledInviteButton = styled.button`
  width: 100px;
  background-color: pink;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  text-align: center;

  &:hover {
    background-color: darkpink;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 80%;
  font-size: 1.5rem;
  
  .react-calendar__tile {
    font-size: 1.5rem;
  }
`;

const DateText = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;

const LightPinkBackground = styled.div`
  background-color: #fff0f5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-top: 120px;
`;

const FriendsList = styled.div`
  border: 2px solid pink;
  padding: 20px;
  margin-top: 20px;
  height: 200px;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const NewPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const NewPageTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const NewPageMessage = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 20px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
`;

export default function Modal({ content, handleCloseModal }) {
  const [showStep1, setShowStep1] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeSetting, setShowTimeSetting] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const [showNewPage, setShowNewPage] = useState(false);
  const [selectedRange, setSelectedRange] = useState([null, null]);
  const [startTime, setStartTime] = useState({ hour: '', minute: '', period: '오전' });
  const [endTime, setEndTime] = useState({ hour: '', minute: '', period: '오전' });
  const [friendId, setFriendId] = useState('');
  const [friendsList, setFriendsList] = useState(['jjang', 'yoon', 'choi', 'jung']);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (showNewPage) {
      const timer = setTimeout(() => {
        handleCloseModal();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showNewPage, handleCloseModal]);

  const handleNextStep = () => {
    if (showStep1) {
      setShowStep1(false);
      setShowCalendar(true);
    } else if (showCalendar) {
      setShowCalendar(false);
      setShowTimeSetting(true);
    } else if (showTimeSetting) {
      setShowTimeSetting(false);
      setShowInviteFriends(true);
    }
  };

  const handleBackStep = () => {
    if (showCalendar) {
      setShowCalendar(false);
      setShowStep1(true);
    } else if (showTimeSetting) {
      setShowTimeSetting(false);
      setShowCalendar(true);
    } else if (showInviteFriends) {
      setShowInviteFriends(false);
      setShowTimeSetting(true);
    }
  };

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    if (range[0] && range[1]) {
      setShowCalendar(false);
      setShowTimeSetting(true);
    }
  };

  const handleTimeChange = (setTime, field, value) => {
    setTime(prev => ({ ...prev, [field]: value }));
  };

  const handleRegisterFriend = () => {
    if (friendId) {
      setFriendsList([...friendsList, friendId]);
      setFriendId('');
    }
  };

  const handleInviteClick = () => {
    setShowInviteFriends(false);
    setShowNewPage(true);
  };

  const formatDate = (date) => {
    if (!date) return '????년 ?월 ?일';
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <ModalPortal>
      <StyledModal>
        <StyledModalContent>
          <StyledModalCloseButton onClick={handleCloseModal}>X</StyledModalCloseButton>
          <StyledBackButton onClick={handleBackStep}>←</StyledBackButton>

          {/* STEP 1: 여행 제목 입력 */}
          {showStep1 && (
            <>
              <StyledModalTitle>STEP 1. 여행 제목을 입력해 주세요!</StyledModalTitle>
              <div style={{ textAlign: 'center' }}>
                <StyledTextInput
                  type="text"
                  placeholder="여행 제목을 입력하세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <StyledSubmitButton onClick={handleNextStep}>확인</StyledSubmitButton>
              </div>
            </>
          )}

          {showCalendar && (
            <>
              <StyledModalTitle>STEP 2. 여행 일정을 선택해 주세요!</StyledModalTitle>
              <CalendarContainer>
                <StyledCalendar
                  selectRange={true}
                  onChange={handleRangeChange}
                  value={selectedRange}
                />
              </CalendarContainer>
            </>
          )}

          {showTimeSetting && (
            <>
              <StyledModalTitle>STEP 3. 여행 시간을 설정해 주세요!</StyledModalTitle>
              
              <LightPinkBackground>
                <DateText>{formatDate(selectedRange[0])}부터</DateText>
                <StyledSelect
                  value={startTime.period}
                  onChange={(e) => handleTimeChange(setStartTime, 'period', e.target.value)}
                >
                  <option value="오전">오전</option>
                  <option value="오후">오후</option>
                </StyledSelect>
                <StyledInput
                  type="number"
                  placeholder="시"
                  value={startTime.hour}
                  onChange={(e) => handleTimeChange(setStartTime, 'hour', e.target.value)}
                />
                :
                <StyledInput
                  type="number"
                  placeholder="분"
                  value={startTime.minute}
                  onChange={(e) => handleTimeChange(setStartTime, 'minute', e.target.value)}
                />

                <DateText>{formatDate(selectedRange[1])}까지</DateText>
                <StyledSelect
                  value={endTime.period}
                  onChange={(e) => handleTimeChange(setEndTime, 'period', e.target.value)}
                >
                  <option value="오전">오전</option>
                  <option value="오후">오후</option>
                </StyledSelect>
                <StyledInput
                  type="number"
                  placeholder="시"
                  value={endTime.hour}
                  onChange={(e) => handleTimeChange(setEndTime, 'hour', e.target.value)}
                />
                :
                <StyledInput
                  type="number"
                  placeholder="분"
                  value={endTime.minute}
                  onChange={(e) => handleTimeChange(setEndTime, 'minute', e.target.value)}
                />

                <StyledSubmitButton onClick={handleNextStep}>확인</StyledSubmitButton>
              </LightPinkBackground>
            </>
          )}

          {showInviteFriends && (
            <>
              <StyledModalTitle>STEP 4. 친구를 초대해 보세요!</StyledModalTitle>
              
              <div style={{ textAlign: 'center' }}>
                <StyledTextInput
                  type="text"
                  placeholder="친구의 아이디를 검색해보세요."
                  value={friendId}
                  onChange={(e) => setFriendId(e.target.value)}
                />
                <StyledRegisterButton onClick={handleRegisterFriend}>등록</StyledRegisterButton>
              </div>
              
              <FriendsList>
                {friendsList.map((friend, index) => (
                  <p key={index}>{friend}</p>
                ))}
              </FriendsList>

              <ButtonContainer>
                <StyledInviteButton onClick={handleInviteClick}>초대</StyledInviteButton>
              </ButtonContainer>
            </>
          )}

          {showNewPage && (
            <NewPageContent>
              <StyledImage src={morae} alt="모래시계 이미지" />
              <NewPageTitle>모든 설정이 완료되었습니다!</NewPageTitle>
              <NewPageMessage>잠시만 기다려주세요...</NewPageMessage>
            </NewPageContent>
          )}
        </StyledModalContent>
      </StyledModal>
    </ModalPortal>
  );
}
