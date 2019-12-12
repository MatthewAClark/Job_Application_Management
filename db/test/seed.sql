DROP DATABASE IF EXISTS career_management_test;
CREATE DATABASE career_management_test;

\c career_management_test;


CREATE TABLE adverts (
    advert_id SERIAL PRIMARY KEY,
    company_name VARCHAR(50),
    job_title VARCHAR(30),
    advert_ref VARCHAR(10),
    contract_type VARCHAR(20),
    full_time BOOLEAN,
    date_posted DATE,
    date_seen DATE,
    closing_date DATE,
    live BOOLEAN,
    website VARCHAR(200),
    min_salary VARCHAR(10),
    max_salary VARCHAR(10),
    advert_description VARCHAR(8000),
    agency BOOLEAN,
    job_board VARCHAR(50),
    voluntary BOOLEAN,
    job_location VARCHAR(20)
    
);

INSERT INTO adverts(company_name, job_title, advert_ref, contract_type, full_time, date_posted, date_seen, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location)
    VALUES('Talent Ticker','Software Engineer', 'abc123', 'Permanent', true, null, '2019-12-12', null, true, 'https://www.indeed.co.uk/jobs?q=software&l=cardiff&advn=998224676670214&vjk=e82b617fb725f81d', '£25,000', '£30,000', "Dupont Consulting is proud to be recruiting on behalf of our client, Talent Ticker for a Platform Engineer to join their Head Office in Cardiff.

Talent Ticker is the world’s first Predictive Talent Management Market Intelligence platform. Talent Ticker uses Artificial Intelligence including deep learning and natural language processing to deliver a SaaS based platform that provides market insights for staffing firms to improve efficiencies, outreach and increase sales.

Talent Ticker are building a cutting-edge AI SaaS product that will be a leading tool to be used within global Human Capital and are building a brand that will be synonymous with names such as LinkedIn, Indeed, Workable and Zoom.

In under 1 year since inception they have successfully achieved their MVP, having launched Version 1 BETA in Jan 2019 and progressed to monetisation of the platform, surpassing initial revenue targets and approaching £250k ARR in the first quarter of monetisation. The business has recruited 18 members across their offices in Cardiff, London & New York, assembling a very strong team of Technology and Operations professionals with successful SAAS backgrounds and educations at Oxford, Cambridge, St Andrews and Stanford CA amongst others.

Given ther ambitious growth plans they are now looking for additional software engineers to help accelerate their product roadmap implementation.

You will be working on building the A.I. driven platform that provides the Talent Ticker website and 3rd party clients with accurate and relevant market intelligence.

Responsibilities

Contribute to the development of features from definition to deployment. These features may cover things such as:

o Data mining

o Data enrichment

o Data engineering

o Internal and external client APIs

o Building reports and monitoring

-Be a pro-active contributor on product features, technical design sessions, planning, bug washing, etc with an opportunity to lead on features with experience.

-Writing high quality software

-Deploying, running and supporting the services you build

-There is also an opportunity to contribute to and work on associated features as wanted/needed such as our A.I. and UEX.

Talent Ticker use a cutting-edge, cloud-focused tech stack, including (but certainly not limited to): Python 3.x, Serverless, AWS (e.g. EC2, Lambda, SQS/SNS, Fargate, Aurora), MongoDB, ElasticSearch & Terraform. BUT – they are advocates of using the right tools for the right job.

You must be able to work independently and be self-motivated, whilst also being able to work effectively in cross-functional teams. They are committed to innovation here and strongly encourage it with events and tools such as Hackathons, meetups, E-Learning, Learning lunches and Lightning Round Talks.

Useful/Desirable experience

- Python 3.x or another high-level programming language

- Micro-services architectures

- Both NoSQL (MongoDB, ElasticSearch) and SQL

- Cloud (especially AWS) services

- Source control software e.g. git

- BDD/TDD

- Agile methodologies – Scrum/Kanban

- Infrastructure as code e.g. Terraform

- CI/CD tooling

- Containers and their management tools e.g. ECS/Kubernetes/Fargate

- Messaging/Asynchronous frameworks/platforms

- Bachelor Degree or equivalent experience required

You will be part of a forward-thinking team within one the fastest growing tech start-ups in Wales.

Apart from being in this fast-paced environment some of the perks on offer are fantastic. You will have unlimited annual leave, daily coffee/tea, fresh fruit, healthy snacks, pension, flexible working hours and the chance to be awarded share options, not to mention a competitive basic salary.

If you are interested in this exciting position, apply now for immediate consideration.

Job Types: Full-time, Permanent

Salary: £25,000.00 to £30,000.00 /year

Experience:

TDD: 1 year (Preferred)
No Sql: 1 year (Preferred)
BDD: 1 year (Preferred)
Agile: 1 year (Preferred)
Sql: 1 year (Preferred)
Python: 1 year (Preferred)
Education:

Bachelor's (Required)
Location: 

Cardiff, Cardiff \(Required)
Flexible Working Options Available:

Flexitime", true, 'indeed.co.uk', false, 'Cardiff');