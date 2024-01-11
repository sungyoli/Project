-- TIMESTAMP 로 할지 DATE로 할지~~

DROP TABLE status_tbl CASCADE CONSTRAINTS;
CREATE TABLE status_tbl(
    
    sysDate TIMESTAMP DEFAULT SYSTIMESTAMP, -- 근무 일자 
    startMonth NUMBER, -- 근무 월
    startDate TIMESTAMP, -- 근무 시작 일시
    endDate TIMESTAMP, -- 근무 종료 일시
    totalDate VARCHAR2(20), -- 총 근무 시간
    state VARCHAR2(10) NOT NULL -- 상태
);