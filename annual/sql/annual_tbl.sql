-- TIMESTAMP 로 할지 DATE로 할지~~

DROP TABLE annual_tbl CASCADE CONSTRAINTS;
CREATE TABLE annual_tbl(
    employeeName VARCHAR2(20) NOT NULL, -- 직원 이름    
    departmentName VARCHAR2(20) NOT NULL, -- 부서명   
    leaveType VARCHAR(20) NOT NULL, -- 휴가종류
    startDate TIMESTAMP, -- 연차 시작 일시
    endDate TIMESTAMP, -- 연차 종료 일시
    leaveDescription VARCHAR2(255) NOT NULL, -- 연차 사용 내용
    approval_status NUMBER(1) DEFAULT 0 NOT NULL -- 승인 체크박스
);
