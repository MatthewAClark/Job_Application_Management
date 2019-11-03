DROP DATABASE IF EXISTS job_applications;
CREATE DATABASE job_applications;

\c job_applications;

CREATE TABLE organisation (
    organisation_id SERIAL PRIMARY KEY,
    organisation_name VARCHAR(20),
    address1 VARCHAR(50),
    address2 VARCHAR(50),
    address3 VARCHAR(50),
    address4 VARCHAR(50),
    postcode VARCHAR(8),
    email VARCHAR(100),
    organisation_url VARCHAR(200),
    contact_number VARCHAR(12),
    fax_number VARCHAR(12),
    agency BOOLEAN
);

CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    organisation_id INT,
    contact_name VARCHAR(50),
    contact_title VARCHAR(50),
    contact_position VARCHAR(50),
    contact_number1 VARCHAR(12),
    contact_number2 VARCHAR(12),
    contact_fax VARCHAR(12),
    contact_email VARCHAR(100),
    contact_url VARCHAR(200),
    reference BOOLEAN,
    FOREIGN KEY (organisation_id) REFERENCES organisation(organisation_id)
);

CREATE TABLE advert (
    advert_id SERIAL PRIMARY KEY,
    organisation_id INT,
    advert_ref VARCHAR(10),
    contract_type VARCHAR(10),
    full_time BOOLEAN,
    date_posted DATE,
    date_applied DATE,
    closing_date DATE,
    live BOOLEAN,
    advert_url VARCHAR(200),
    min_salary VARCHAR(10),
    max_salary VARCHAR(10),
    job_title VARCHAR(50),
    job_description VARCHAR(8000),
    job_location VARCHAR(20),
    job_field VARCHAR(20),
    FOREIGN KEY (organisation_id) REFERENCES organisation(organisation_id)
);

CREATE TABLE _contract (
    contract_id SERIAL PRIMARY KEY,
    advert_id INT,
    organisation_id INT,
    begin_date DATE,
    end_date DATE,
    salary VARCHAR(10),
    currently_employed BOOLEAN,
    notice_period VARCHAR(10),
    job_title VARCHAR(10),
    job_description VARCHAR(2000),
    responsibilities VARCHAR(2000),
    job_field VARCHAR(10),
    job_location VARCHAR(10),
    benifits VARCHAR(2000),
    FOREIGN KEY (advert_id) REFERENCES advert(advert_id),
    FOREIGN KEY (organisation_id) REFERENCES organisation(organisation_id)
);


CREATE TABLE position (
    position_id SERIAL PRIMARY KEY,
    advert_id INT,
    contract_id INT,
    industry VARCHAR(10),
    sector VARCHAR(10),
    FOREIGN KEY (advert_id) REFERENCES advert(advert_id),
    FOREIGN KEY (contract_id) REFERENCES _contract(contract_id)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    position_id int,
    comment_date DATE,
    comment_time TIME,
    comment VARCHAR(2000),
    FOREIGN KEY (position_id) REFERENCES position(position_id)
);


CREATE TABLE contract_contacts (
    contract_id INT,
    contact_id INT,
    FOREIGN KEY (contract_id) REFERENCES _contract(contract_id),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id)
);

CREATE TABLE advert_contacts (
    advert_id INT,
    contact_id INT,
    FOREIGN KEY (advert_id) REFERENCES advert(advert_id),
    FOREIGN KEY (contact_id) REFERENCES contacts(contact_id)
);


CREATE TABLE application_form (
    advert_id int,
    question VARCHAR(1000),
    answer VARCHAR(2000),
    FOREIGN KEY (advert_id) REFERENCES advert(advert_id)
);