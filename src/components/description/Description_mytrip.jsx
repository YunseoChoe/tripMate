import React, { useState } from "react";
import styles from "./Description.module.css";
import DescImage from "../../assets/login.png";
import ScheduleImage from "../../assets/schedule.png";

export default function Description_mytrip() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("전체 일정");

  const itemsPerPage = 3; // 페이지 당 들어갈 일정 수

  // 샘플 데이터
  const schedules = [
    {
      title: "우정 여행",
      participants: ["사람1", "사람2", "사람3", "사람4"],
      dateRange: "2024-10-03 ~ 2024-10-05",
      daysLeft: "D-9",
      image: ScheduleImage,
    },
    // 추가 데이터 작성 공간 {}
  ];

  // 페이지 변경
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 현재 페이지에 해당하는 일정 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSchedules = schedules.slice(indexOfFirstItem, indexOfLastItem);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(schedules.length / itemsPerPage);

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // 메뉴 항목 선택 함수
  const selectMenu = (menu) => {
    setSelectedMenu(menu);
    setDropdownOpen(false);
  };

  return (
    <section className={styles.container}>
      <img src={DescImage} className={styles.login_image} alt="Description" />
      <h2 className={styles.user_id}>USER_ID</h2>

      <div className={styles.trip_schedule_container}>
        <h3 className={styles.my_trip}>나의 여정</h3>

        {/* 전체 일정과 드롭다운 메뉴 */}
        <div className={styles.dropdown_container} onClick={toggleDropdown}>
          <h3 className={styles.all_schedule}>
            {selectedMenu} <span className={styles.arrow}>&#x25BC;</span>
          </h3>
          {isDropdownOpen && (
            <ul className={styles.dropdown_menu}>
              <li onClick={() => selectMenu("전체 일정")}>전체 일정</li>
              <li onClick={() => selectMenu("개인 일정")}>개인 일정</li>
              <li onClick={() => selectMenu("단체 일정")}>단체 일정</li>
            </ul>
          )}
        </div>
      </div>

      <div className={styles.schedule_box}>
        {currentSchedules.length > 0 ? (
          currentSchedules.map((schedule, index) => (
            <div key={index} className={styles.schedule_item}>
              <img
                src={schedule.image}
                alt="Schedule"
                className={styles.schedule_image}
              />
              <div className={styles.schedule_content}>
                <div className={styles.schedule_details}>
                  <h3>{schedule.title}</h3>
                  <p>{schedule.participants.join(", ")}</p>
                  <p>{schedule.dateRange}</p>
                </div>
                <div className={styles.schedule_days_left}>
                  <p>{schedule.daysLeft}</p>
                </div>
              </div>
              <div className={styles.schedule_separator}></div>
            </div>
          ))
        ) : (
          <p>일정이 없습니다.</p>
        )}
      </div>
      {/* 페이지네이션 */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.page_button} ${
              currentPage === index + 1 ? styles.active : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
