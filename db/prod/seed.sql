DROP DATABASE IF EXISTS job_applications;
CREATE DATABASE job_applications;

\c job_applications;

CREATE TABLE applications (
    job_id SERIAL PRIMARY KEY,
    job_title VARCHAR(40),
    job_description VARCHAR(200),
    date_advertised DATE,
    closing_date DATE,
    job_location VARCHAR(20),
    advertised_location VARCHAR(20),
    company VARCHAR(20),
    industry VARCHAR(20),
    url_link VARCHAR(20),
    applied BOOLEAN,
    comments VARCHAR(200),
    date_applied DATE
);

