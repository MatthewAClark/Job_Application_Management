DROP DATABASE IF EXISTS job_applications;
CREATE DATABASE job_applications;

\c job_applications;

CREATE TABLE company (
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(50),
    sector VARCHAR(30),
    industry VARCHAR(30),
    company_url VARCHAR(200)
);

CREATE TABLE addresses (
    address_id SERIAL PRIMARY KEY,
    company_id INT,
    line_1 VARCHAR(100),
    line_2 VARCHAR(100),
    town_city VARCHAR(20),
    county_state VARCHAR(20),
    country VARCHAR(30),
    postcode_zipcode VARCHAR(8),
    FOREIGN KEY (company_id) REFERENCES company(company_id)
);


CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    address_id INT,
    contact_name VARCHAR(50),
    contact_title VARCHAR(50),
    contact_position VARCHAR(50),
    tel_number1 VARCHAR(12),
    tel_number2 VARCHAR(12),
    fax VARCHAR(12),
    email VARCHAR(100),
    contact_url VARCHAR(200),
    reference BOOLEAN,
    date_known DATE,
    live BOOLEAN,
    FOREIGN KEY (address_id) REFERENCES addresses(address_id)
);

CREATE TABLE position (
    position_id SERIAL PRIMARY KEY,
    address_id INT,
    contact_id INT,
    job_title VARCHAR(30),
    occupation_sector VARCHAR(50),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id)
);

CREATE TABLE advert (
    advert_id SERIAL PRIMARY KEY,
    position_id INT,
    address_id INT,
    contact_id INT,
    advert_ref VARCHAR(10),
    contract_type VARCHAR(20),
    full_time BOOLEAN,
    date_posted DATE,
    date_applied DATE,
    closing_date DATE,
    date_seen DATE,
    live BOOLEAN,
    advert_url VARCHAR(200),
    min_salary VARCHAR(10),
    max_salary VARCHAR(10),
    advert_description VARCHAR(8000),
    agency BOOLEAN,
    job_board VARCHAR(50),
    paid BOOLEAN,
    job_location VARCHAR(20),
    FOREIGN KEY (position_id) REFERENCES position(position_id),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id)
);


CREATE TABLE job_contracts (
    contract_id SERIAL PRIMARY KEY,
    position_id INT,
    address_id INT,
    contact_id INT,
    begin_date DATE,
    end_date DATE,
    salary VARCHAR(10),
    live BOOLEAN,
    job_description VARCHAR(5000),
    responsibilities VARCHAR(5000),
    notice_period VARCHAR(10),
    benifits VARCHAR(2000),
    contract_type VARCHAR(20),
    full_time BOOLEAN,
    paid BOOLEAN,
    FOREIGN KEY (position_id) REFERENCES position(position_id),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id)
);


CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    position_id INT,
    comment_date DATE,
    comment VARCHAR(2000),
    FOREIGN KEY (position_id) REFERENCES position(position_id)
);

CREATE TABLE application_form (
    application_id SERIAL PRIMARY KEY,
    position_id int,
    question VARCHAR(1000),
    answer VARCHAR(2000),
    FOREIGN KEY (position_id) REFERENCES position(position_id)
);

 -- 
INSERT INTO company (company_name)
    VALUES ('A Software Company'),
     ('Another Software House');

INSERT INTO addresses (company_id, town_city)
    VALUES (1, 'Exeter'),
    (1, 'Cardiff'),
     (2, 'Chester');

INSERT INTO contacts (address_id, contact_name, tel_number1)
    VALUES (1, 'Joe Bloggs', '01392123455');

INSERT INTO position (address_id, contact_id, job_title, occupation_sector)
    VALUES (1, 1, 'Digital Developer', 'Information Technology');

INSERT INTO advert (position_id, contact_id, advert_ref, contract_type, closing_date, advert_description)
    VALUES (1, 1, 'abc123', 'Permanent', '2019-12-15', 'If you enjoy a challenging and varied workload, a level of autonomy to identify and lead your own projects, to work as part of an innovative and supportive team and to gain and share knowledge, then we are looking for you.  This is a great opportunity to deliver services, support, advice and guidance to staff and students on getting the best out of digital technologies to enhance teaching and learning.  

Exeter College is a Times100, Ofsted Outstanding organisation whose vision is to shape the future of education by delivering excellence in all aspects of our work, to realise the ambitions of our learners, city and region.

The role attracts the following benefits:
•	28 days per annum holiday plus bank holidays 
•	Christmas closure, in addition to annual holiday entitlement
•	Defined benefit pension scheme
•	Cycle to work scheme which allows you to buy a new bike but spread the cost of it throughout the year
•	Staff discounts including IT software, taxi fares, gym membership
•	Staff development
•	On site gym, H2B spa and @34 Restaurant
•	Employee Assistance Programme
For an informal discussion about the role please contact Christian Schoter on 01392 400 202.

To apply for this post please visit our website at www.exe-coll.ac.uk.

Closing date: Sunday, 15 December 2019
Interview date: To be confirmed

Successful applicants will be required to undertake an enhanced disclosure by the DBS.

We do not accept CVs, no agencies please. 

Exeter College is committed to safeguarding and promoting the welfare of children, young people and adults and expects all staff to share this commitment.

Exeter College is committed to promoting equality of opportunity and access for all, irrespective of age, background, race, gender, religion, ability, disability or sexuality. We welcome applications for employment from the whole community.');


INSERT INTO job_contracts (position_id, address_id, contact_id, begin_date, end_date, salary, live, job_description, responsibilities, notice_period, benifits, contract_type, full_time, paid)
    VALUES (1,1,1,'2005-04-05', '2010-11-12', '£1', false, 'Being very busy stacking shelves in Tesco', 'Ensuring all the baked beans are stacked correctly', '2 months','discount off of baked beans','permanent',true,true);

INSERT INTO comments (position_id, comment) 
    VALUES (1, 'I have just been promoted');

    INSERT INTO application_form (position_id, question, answer)
    VALUES (1, 'Why is the sky blue?', 'Because of light refraction');
