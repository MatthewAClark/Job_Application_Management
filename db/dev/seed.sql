DROP DATABASE IF EXISTS job_board_dev;
CREATE DATABASE job_board_dev;

\c job_board_dev;

CREATE TABLE company (
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(20),
    company_address VARCHAR(200),
    company_url VARCHAR(200),
    company_email VARCHAR(50),
    company_telephone VARCHAR(20),
    company_fax VARCHAR(20),
    agency BOOLEAN,
    employer BOOLEAN
);

CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    company_id INT,
    contact_name VARCHAR(20),
    contact_title VARCHAR(100),
    contact_telephone1 VARCHAR(20),
    contact_telephone2 VARCHAR(20),
    contact_fax VARCHAR(20),
    contact_email VARCHAR(50),
    contact_url VARCHAR(50),
    reference BOOLEAN,
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);

CREATE TABLE position (
    position_id SERIAL PRIMARY KEY,
    job_title VARCHAR(50),
    job_description VARCHAR(2000),
    responsibilities VARCHAR(2000),
    job_location VARCHAR(20),
    job_field VARCHAR(20),
    contact_id INT,
    company_id INT,
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);

CREATE TABLE advert (
    position_id INT,
    date_posted DATE,
    date_applied DATE,
    closing_date DATE,
    live BOOLEAN,
    advert_url VARCHAR(200),
    min_salary VARCHAR(10),
    max_salary VARCHAR(10),
    FOREIGN KEY (position_id) REFERENCES position(position_id)
);

CREATE TABLE _contract (
    position_id INT,
    begin_date DATE,
    end_date DATE,
    salary VARCHAR(10),
    currently_employed BOOLEAN,
    FOREIGN KEY (position_id) REFERENCES position(position_id) 
);

CREATE TABLE notes (
    position_id INT,
    note_date DATE,
    note VARCHAR(1000),
    FOREIGN KEY (position_id) REFERENCES position(position_id)
);






INSERT INTO position (job_title, job_description, responsibilities, job_location, job_field)
VALUES('Junior Software Tester', 'Acorn are searching for an experienced software tester to join an innovative IT Solutions provider based in Exeter.

They are looking for an ambitious Junior tester or graduate to join their Agile QA team. Technology wise they develop predominantly in .NET / C# utilising Angular on the front-end within an Agile Azure based environment. Mot of the testing is fully automated using tools such as Selenium & Postman.', 'Testing software within an Agile environment.
Ensuring software is realised to an acceptable quality.
Working with developers on troubleshooting and diagnosing bugs
Performing exploratory and automated testing.', 'Exeter', 'Software');

INSERT INTO advert (position_id, date_posted, date_applied, closing_date, live, advert_url, min_salary, max_salary)
VALUES(1,'09-18-2019', null, null, true, 'https://www.acornpeople.com/job-search/job/BBBH17232_1568815253?utm_source=Indeed&utm_medium=organic&utm_campaign=Indeed','£25000','27000');

INSERT INTO company (company_name, company_address, company_url, company_email, company_telephone, company_fax, agency, employer)
VALUES ('Acorn','Somerton House, Hazell Drive, Newport, NP10 8FY','https://www.acornpeople.com/','acorn@acorn.com','01633 660 000','01633 660 001',true,false);

INSERT INTO contacts(company_id, contact_name, contact_title, contact_telephone1, contact_telephone2, contact_fax, contact_email, contact_url, reference) 
VALUES(1,'Ryan Harris','Associate Recruitment Consultant', '01633 287 183','','','ryan.harris@acornpeople.com','ryan-harris-acorn',false);