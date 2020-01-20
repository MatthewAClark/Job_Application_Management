DROP DATABASE IF EXISTS career_management;
CREATE DATABASE career_management;

\c career_management;

CREATE TABLE professions
(
    profession_id SERIAL PRIMARY KEY,
    profession VARCHAR(50),
    profession_profile VARCHAR(1000)
);

CREATE TABLE companies
(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(30),
    sector VARCHAR(30),
    industry VARCHAR(30),
    website VARCHAR(100)
);

CREATE TABLE addresses
(
    address_id SERIAL PRIMARY KEY,
    company_id INT,
    address_field VARCHAR(100),
    postcode VARCHAR(8),
    live BOOLEAN,
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

CREATE TABLE contacts
(
    contact_id SERIAL PRIMARY KEY,
    company_id INT,
    address_id INT,
    contact_name VARCHAR(30),
    contact_position VARCHAR(30),
    capacity_known VARCHAR(30),
    reference BOOLEAN,
    date_known DATE,
    live BOOLEAN,
    FOREIGN KEY (company_id) REFERENCES companies(company_id),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id)
);

CREATE TABLE positions
(
    position_id SERIAL PRIMARY KEY,
    profession_id INT,
    position_title VARCHAR(100),
    FOREIGN KEY (profession_id) REFERENCES professions(profession_id)
);

CREATE TABLE correspondence
(
    correspondence_id SERIAL PRIMARY KEY,
    contact_id INT,
    address_id INT,
    company_id INT,
    position_id INT,
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id),
    FOREIGN KEY (company_id) REFERENCES companies(company_id),
    FOREIGN KEY (position_id) REFERENCES positions(position_id)
);

CREATE TABLE contact_values
(
    value_id SERIAL PRIMARY KEY,
    correspondence_id INT,
    contact_id INT,
    contact_type VARCHAR(10),
    contact_value VARCHAR(50),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (correspondence_id) REFERENCES correspondence(correspondence_id)
);

CREATE TABLE cvs
(
    cv_id SERIAL PRIMARY KEY
);

CREATE TABLE applications
(
    application_id SERIAL PRIMARY KEY,
    position_id INT,
    cv_id INT,
    cover_letter VARCHAR(2000),
    FOREIGN KEY (position_id) REFERENCES positions(position_id),
    FOREIGN KEY (cv_id) REFERENCES cvs(cv_id)
);

CREATE TABLE app_forms
(
    app_form_id SERIAL PRIMARY KEY,
    application_id INT,
    question VARCHAR(200),
    answer VARCHAR(500),
    FOREIGN KEY (application_id) REFERENCES applications(application_id)
);

CREATE TABLE adverts
(
    advert_id SERIAL PRIMARY KEY,
    position_id INT,
    correspondence_id INT,
    advert_ref VARCHAR(20),
    contract_type VARCHAR(20),
    full_time_part_time VARCHAR(10),
    date_posted DATE,
    date_seen DATE,
    closing_date DATE,
    live BOOLEAN,
    advert_url VARCHAR(200),
    min_salary VARCHAR(10),
    max_salary VARCHAR(10),
    advert_description VARCHAR(8000),
    agency BOOLEAN,
    job_board VARCHAR(50),
    voluntary BOOLEAN,
    job_location VARCHAR(20),
    applied BOOLEAN,
    FOREIGN KEY (position_id) REFERENCES positions(position_id),
    FOREIGN KEY (correspondence_id) REFERENCES correspondence(correspondence_id)
);

CREATE TABLE skills
(
    skill_id SERIAL PRIMARY KEY,
    skill_name VARCHAR(100),
    skill_profile VARCHAR(1000)
);

CREATE TABLE advert_experience
(
    ad_experience_id SERIAL PRIMARY KEY,
    skill_id INT,
    advert_id INT,
    essential BOOLEAN,
    duration INT,
    months BOOLEAN,
    experience_description VARCHAR(1000),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
    FOREIGN KEY (advert_id) REFERENCES adverts(advert_id)
);

CREATE TABLE work_contracts
(
    contract_id SERIAL PRIMARY KEY,
    position_id INT,
    job_description VARCHAR(5000),
    salary VARCHAR(10),
    agency BOOLEAN,
    date_from DATE,
    date_to DATE,
    job_location VARCHAR(50),
    job_profile VARCHAR(500),
    leave_reason VARCHAR(500),
    FOREIGN KEY (position_id) REFERENCES positions(position_id)
);

CREATE TABLE work_experience
(
    work_experience_id SERIAL PRIMARY KEY,
    contract_id INT,
    skill_id INT,
    date_from DATE,
    date_to DATE,
    description_short VARCHAR(500),
    description_long VARCHAR(1000),
    FOREIGN KEY (contract_id) REFERENCES work_contracts(contract_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id) 
);

CREATE TABLE schools
(
    school_id SERIAL PRIMARY KEY,
    address_id INT,
    contact_id INT,
    school_name VARCHAR(100),
    school_type VARCHAR(20),
    date_from DATE,
    date_to DATE,
    course_title VARCHAR(100),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id)
);

CREATE TABLE subjects 
(
    subject_id SERIAL PRIMARY KEY,
    school_id INT,
    subject_name VARCHAR(50),
    subject_grade VARCHAR(10),
    subject_level VARCHAR(10),
    description_long VARCHAR(1000),
    description_short VARCHAR(500),
    date_from DATE,
    date_to DATE,
    FOREIGN KEY (school_id) REFERENCES schools(school_id)
);

CREATE TABLE education
(
    education_id SERIAL PRIMARY KEY,
    subject_id INT,
    skill_id INT,
    description_long VARCHAR(1000),
    description_short VARCHAR(500),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);
-- CREATE TABLE professions (
--     profession_id SERIAL PRIMARY KEY,
--     profession_name VARCHAR(30),
--     profession_summary VARCHAR(500)
-- );

-- CREATE TABLE cvs (
--     cv_id SERIAL PRIMARY KEY
-- );

-- CREATE TABLE applications (
--     application_id SERIAL PRIMARY KEY,
--     company_id INT,
--     advert_id INT,
--     profession_id INT,
--     cv_id INT,
--     cover_letter VARCHAR(5000),
--     date_applied DATE,
--     pending BOOLEAN,
--     FOREIGN KEY (advert_id) REFERENCES adverts(advert_id),
--     FOREIGN KEY (profession_id) REFERENCES professions(profession_id),
--     FOREIGN KEY (cv_id) REFERENCES cvs(cv_id),
--     FOREIGN KEY (company_id) REFERENCES companies(company_id)
-- );

-- CREATE TABLE application_contacts (
--     contact_id INT,
--     application_id INT,
--     position VARCHAR(20),
--     comments VARCHAR(100),
--     FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
--     FOREIGN KEY (application_id) REFERENCES applications(application_id),
-- );



-- INSERT INTO companies
--     (company_name)
-- VALUES('Digitalcut'),
--     ('Rokk'),
--     ('CodeFirst');

-- INSERT INTO addresses
--     (company_id, address_field, postcode, live)
-- VALUES(2, '4 Test Road Way, Testerton, Testshire', 'TS1 1ST', true),
--     (1, '5 Test Close, Testville, Testingbourough', 'TE1 4ST', true),
--     (1, '6 Test Way, Testford, Testle', 'TS1 4ST', true);

-- INSERT INTO contacts
--     (company_id, address_id, contact_name, contact_position, capacity_known, reference, date_known, live)
-- VALUES(1, 3, 'Bob Geldoff', 'Rock Star', 'Supervisor', true, '2005-09-05', true),
--     (1, 2, 'Bob Marley', 'Rock Star', 'Manager', true, '2005-09-05', true);

-- INSERT INTO contact_values
--     (contact_id, contact_type, contact_value)
-- VALUES(1, 'mobile', '0712345689'),
--     (1, 'email', 'bob.geldoff@idontlikemondays.boomtown.com');

