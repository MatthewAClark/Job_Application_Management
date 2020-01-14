DROP DATABASE IF EXISTS career_management_test;
CREATE DATABASE career_management_test;

\c career_management_test;

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

CREATE TABLE applications
(
    application_id SERIAL PRIMARY KEY,
    position_id INT,
    cover_letter VARCHAR(2000),
    FOREIGN KEY (position_id) REFERENCES positions(position_id)
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

INSERT INTO professions
    (profession, profession_profile)
VALUES('finance',''),('administration','A fine member of the administration team, I would make an excellent candidate'),('Marketing',''),('Scientist','Following my studies as a scientist, I am now looking for my first role in science'),('Software Development','Give me a job in software!');

INSERT INTO positions
    (profession_id, position_title)
VALUES(1, 'Senior VAT Officer'),(2, 'Office Administrator'),(3,'Marketing Assistant'),(4,'Scientist - Urban Modelling'),(5,'Junior Developers'),(5, 'Software Developer'),(4,'Climate Scientist (Decadal Prediction)');

INSERT INTO companies
    (company_name, sector, industry, website)
VALUES('Devon County Council', 'public authority','government','www.devon.gov.uk'),('Plumbing Company','plumbing','building','www.plumbcompany.co.uk'),('PPP Taking Care','Healthcare','','www.ppptakingcare.co.uk'),('Met Office','scientific','government','www.metoffice.gov.uk');

INSERT INTO addresses
    (company_id, address_field, postcode, live)
VALUES(1, 'Great Moor House\nExeter\nDevon','EX2 7NN', true),(2, 'Ground Floor Office\n8 Sandpiper Court\nHarrington Lane\nExeter','EX4 8NS', true),(3, 'Linhay House\nLinhay Business Park\nAshburton \n','TQ13 7UP', true),(4, 'Met Office\nFitzRoy Road\nExeter\nDevon','EX1 3PB', true);

INSERT INTO contacts
    (company_id, address_id, contact_name, contact_position, capacity_known, reference, date_known, live)
VALUES(1,1,'Ray Rimes','','',false,null,true);

INSERT INTO correspondence(contact_id, address_id, company_id, position_id)
    VALUES(1,1,1,1),(null,2,2,2),(null,3,3,3),(null,4,4,4),(null,null,4,5),(null,4,4,6),(null,4,4,7);

INSERT INTO adverts(position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied)
    VALUES(1, 1, 'REC/19/06732', 'permanent', 'full-time',null,'2019-12-20T00:00:00.000Z','2020-01-15T00:00:00.000Z', true, 'https://www.devonjobs.gov.uk/finance-accounting-corporate-services-senior-vat-officer/66897.job', '£32,029', '35,934', 'The Tax Compliance Team is seeking to recruit a Senior VAT Officer, to provide support, advice and guidance to council services on all aspects of VAT compliance. An up to date knowledge of VAT legislation and practice is essential, ideally with local authority/public sector experience.\n\nThe key duties and responsibilities of the role include:\n\n\n·       Preparation and checking of VAT returns, and associated activity (such as complex partial exemption calculations);\n\n·       Interpretation of VAT regulations, providing robust advice and guidance on their implications for council services and schools;\n\n·       VAT compliance monitoring, dealing with adjustments and corrections in liaison with finance teams;\n\n·       Tax education and promotion across the council;\n\n·       Monitoring changes to VAT legislation and the potential impact on the Council;\n\n·       Playing an active role in developing the tax compliance service, reducing risk whilst pursuing savings and tax efficiency.\n\nWe are looking for an individual with a sound understanding of the application of VAT regulations to complex scenarios, who can deal confidently with a wide range of customers at all levels within the organisation. They will be well-organised and self-motivated, capable of providing a high-quality tax service to tight deadlines.\n\nThe post is full-time with a flexible work pattern over 5 days per week. Alternative working hours or patterns may be considered.\n\nThis role requires the ability to fulfil all spoken aspects of the role with confidence and fluency in English.\n\nPersonal data we collect from you will be processed in accordance with the Applicant privacy notice.\n\nFor more information about Working for Devon please visit our Working for Devon page.', false, '', false, 'Exeter', false),(2,2,'', '', 'full-time', '2019-12-18T00:00:00.000Z', '2019-12-20T00:00:00.000Z', null, true, 'https://www.indeed.co.uk/jobs?q&l=exeter&advn=455972492952954&vjk=a90385efdf8d3e1d', '£18,000', '£18,000', 'This is an exciting opportunity for an experienced Administrator to join a growing forward-thinking plumbing and heating business based in Exeter. As Office Administrator you will be service led with strong administration skills and the ability to multi-task effectively. You will support the Office Manager with the day-to-day administrative tasks. This will include dealing with enquiries from customers by telephone and email, booking engineer appointments into the company booking system, invoicing customers and providing quotations. This position would suit a candidate with a good eye for detail looking to work within a fast-paced office who enjoys a varied workload.\n\nKnowledge Required:\n\nPrevious experience of delivering a high level of customer service within a busy environment\nExperience in a role requiring a high level of organisational skills\nExperience of Microsoft Office\nSkills and attributes:\n\nProven organisational ability to a high standard\nAbility to switch between tasks as necessary\nAbility to communicate well with colleagues and customers\nPositive problem solving attitude\nHighly IT Literate\nExcellent telephone manner\nAbility to work independently\nTeam focused\nCustomer Service driven\nExcellent standard of literacy\nHours:\n\nMonday to Friday from 09:00 - 17:30\n\n28 days holiday inclusive of Bank Holidays\n\nJob Type: Full-time\n\nSalary: £18,000.00 /year\n\nJob Type: Full-time\n\nSalary: £18,000.00 /year\n\nExperience:\n\ncustomer service: 1 year (Preferred)\nLocation:\n\nExeter EX4 (Preferred)', false, '', false, 'Exeter',false),(3,3,'','permanent','full-time','2019-12-18T00:00:00.000Z','2019-12-20T00:00:00.000Z', null, true, 'https://www.indeed.co.uk/jobs?q&l=exeter&advn=9071700039686278&vjk=517068aa4b163722', '£18,000', '£23,000', 'PPP Taking Care provides around the clock support to over 70,000 people. Telecare can help older adults and the vulnerable remain independent, safe in their home, and provide reassurance to their friends and family. We have 30 years of providing the Age UK personal alarm service and are the largest private pay telecare provider in the UK. As part of AXA PPP Healthcare we are developing exciting new services and technology to help people live in the homes they love for longer.\n\nWe are looking for an aspiring marketer who is very well organised and able to multi-task. You will help deliver consumer marketing activity across a range of channels.\n\nYou will need to be keen to learn and be comfortable using your initiative to challenge the status quo and be able to work alone or as part of a team. We will support you to make a real impact in a varied role within a new and growing team.\n\nThe successful candidate will help execute a range of marketing campaigns both on and offline, and help plan consumer and trade events and shows, and be part of them.\n\nYou will be responsible for the day to day management of the departmental priorities helping to organise the department’s workflow. You will need to be able to report on a weekly basis both digital and offline activity and use Google and other tools to gather and report business performance.\n\nWith attention to detail skills, you will help write copy and create campaigns and consumer material. You will assist in the production of customer communication. The candidate will be involved in website management using our CMS and help manage the eCommerce function.\n\nYou will need to be able to help manage assets in Adobe Creative Suite (InDesign, Photoshop & Illustrator).\n\nIt would be desirable if you had copywriting/SEO experience.\n\nEssential Skills required:\n\n· 1-2 years’ relevant experience, with a professional qualification relevant to the role.\n\n· Previous marketing experience\n\n· You will need to have proven experience of working extensively with words and numbers\n\n· Excellent interpersonal skills.\n\nBenefits:\n\n· 26 days’ paid annual leave plus Bank Holidays. The opportunity to purchase an additional week’s holiday.\n\n· Healthcare Cash Plan\n\n· Contributory pension plan\n\n· My Discounts – Access to online cash back, childcare vouchers, retail discounts and cycle to work schemes.\n\n· Life Assurance.\n\nSalary: £18,000 - £23,000 p.a. dependant on skills and experience. The role is full time, 35 hours per week.\n\nThe position will be based at our head office in Pynes Hill in Exeter\n\nBenefits:\n\nLife insurance\nJob Types: Full-time, Permanent\n\nSalary: £18,000.00 to £23,000.00 /year\n\nExperience:\n\nrelevant experience with professional qualification: 1 year (Required)\nEducation:\n\nDiploma of Higher Education (Preferred)', false, '', false, 'Exeter', false),(4,4,'','permanent', 'full-time', '2019-12-20T00:00:00.000Z', '2019-12-20T00:00:00.000Z', '2020-01-19T00:00:00.000Z', true, 'https://www.metoffice.gov.uk/about-us/careers/vacancies', '23673', '40352', 'Salary Information\nSenior Scientist: £36,684 - £40,352 pa*\nScientist: £30,325 to £33,260 pa*\nFoundation Scientist: 23,673 - 26,119 pa*\n\n*Salary quoted is based on full-time salary (37 hours) and 27.5 days annual leave and 8 bank holidays. Employees can buy or sell up to 5 days leave if full-time or for part-time staff up to their weekly contracted hours.\n\nBackground\nDo you want to work for a globally renowned organising, helping to safeguard the lives of millions of people?\n\nWe want to be able to provide increased detail in future to our customers. One of the visions for a future using our High Powered Computer (exascale ) is 100m “City Scale” atmospheric models. These will provide improved guidance on urban climate and weather on neighbourhood scales. One of the key issues with developing these models (and with current, km scale, models which include urban areas) is the representation of the urban surface.\n\nThe operational UK 1.5km Unified Model (UM) configuration currently uses an urban surface energy balance scheme (MORUSES) as part of the Joint UK Land Environment Simulator (JULES) scheme. MORUSES distinguishes between roofs and street canyons but more work is required to optimise and develop this and to make it more applicable to higher resolution models.\n\nA second important issue is to develop ways to represent anthropogenic fluxes from cities (e.g heat from air conditioning, transport etc). Thirdly, a major limitation of the current representation is that the urban surface only interacts with the model at the lower boundary and we therefore need to develop a vertically distributed urban canopy scheme which will require a great deal of development both on the theoretical level and on pragmatic issues of how to implement this in the model.\n\nJob Purpose\nTo contribute to research aimed at developing the urban representation the UM in order to ensure it is fit for purpose for future km scale and 100m scale configurations.\n\nJob Responsibilities\nYou will join a small group of scientists based at MetOffice@Reading which is part of the Met Office Regional Model Evaluation and Development (RMED) team. You will carry out research to develop urban, km and sub-km scale UM configurations. Responsibilities will include:\n• Contributing to the research into ways to represent urban processes in the UM/JULES.\n• Coding in the UM/JULES in order to develop schemes to represent urban processes.\n• Running km scale and 100m scale UM configurations in order to assess the benefits of the above against observations and theoretical models.\n• Working collaboratively with University of Reading scientists working on urban meteorology/modelling and also with other partners elsewhere (e.g. other UK universities and UM partner organisations).\n• To document and present the work in internal reports, meetings, scientific journals, and external conferences. To provide scientific/technical advice to peers, management and external stakeholders. At Senior level, to make significant contributions to writing project plans and to leading and managing research.\n• To travel nationally and internationally as required to further collaborations and present work..\n\nEssential Qualifications, Skills & Abilities\nA degree in a relevant (physics, maths, atmospheric sciences) scientific subject (Foundation Scientist) and/or a PhD in a relevant scientific area or equivalent experience (Scientist). Extensive experience and proven track record of scientific research, and ability to plan and deliver scientific research projects (Senior Scientist).\nExperience working with atmosphere models in an NWP or climate context.\nDemonstrable scientific software experience: Experience of writing, modifying and running scientific software codes (in Python, R or Fortran) and using these codes for analysis of model and/or observational data.\nEvidence of a proactive approach to work and solving problems\nEvidence of good communication skills (written, oral, presentation and listening) with ability to communicate scientific and technical information to a range of audiences.\nDesirable Qualifications, Skills & Abilities\nSome of the following:\n\nEvidence of a strong interest in meteorology and in particular urban meteorology.\nExperience of working in the field of urban meteorology/modelling\nExperience of km scale or sub-km NWP modelling.\nExperience of configuring, running and coding in the UM and/or JULES.\nExperience of evaluating atmosphere/surface models against observations and theoretical models.\nAdditional Supplementary Information\nThis role will nominally be based in Reading (MetOffice@Reading, Reading University, Department of Meteorology, PO BOX 243, Reading, RG6 6BB) with some travel to Exeter HQ required (mostly day trips). We will consider applicants wishing to work elsewhere within the UK.\n\nTo apply, please click on the ‘apply’ button below. Please indicate on your application which post you are interested in.\n\n\nKey Dates: Closing date 19/01/2020 with interviews week commencing 10/02/2020. Please note that you will be notified if you are successful or unsuccessful.\n\nShould you be offered an interview, please be aware there may be a selection exercise which could include a presentation, written test or a scenario-based activity. If you require any reasonable adjustments during these exercises, please include this information in your application.\n\nPlease note, when joining the Met Office all new employees will start on the salary band minimum for the position you are offered.\n\nFull-time, part-time and job share applications are invited. During induction applicants will be need to be based in Exeter and Reading and thereafter successful candidate to spend typically 75% of the month in Reading.\n\nThis recruitment post is not offering UK Visa and Sponsorship and therefore requires all applicants to be eligible to work within the UK / EU without restriction. If you are a non–EU candidate, you will be required to provide and attach all relevant eligibility documentation to your application at the time of applying. \n\n\nPlease note that successful candidate/s will be required to satisfactorily undergo security clearance checks. This will generally require the candidate to have lived in the UK for at least three out of the last five years, but applicants not meeting this criteria may be considered.\n\n\nWe are a “Disability Confident” employer, Mindful Employer, with an Athena Swan Bronze award for our work on gender equality and an LGBTi network.', false, '', false, 'Flexible',false),(5,5,'', 'permanent','full-time','2019-12-20T00:00:00.000Z', '2019-12-20T00:00:00.000Z','2020-01-20T00:00:00.000Z',true, 'https://www.metoffice.gov.uk/about-us/careers/vacancies', '23673', '44265', 'Salary Information\nSalary range £44,265 – £23,673 + incentives, depending on role.\n\nBackground\nAs the world becomes more aware of climate change the need for an organisation that brings together the best meteorologists, climatologists and technologists to rise to the challenge has never been greater. If you are the kind of person who wants to make a difference, then we’d like you to become part of this world class team. \n\n \n\nWe’re the Met Office. The UK national meteorological service and we are looking for a number of development resources across the full range of abilities from Junior to Senior and Solution Architects  to help us grow our teams to deliver new and exciting solutions.  We’re particularly supportive of those who may be returning to work after a break, or who may be looking to relocate. Our edge of Exeter location is appealing for its proximity to some of the best countryside and beaches in the UK, and we are willing to offer flexible working arrangements where required. We’re a committed equal opportunities employer with an accessible workplace and adaptable tooling. \n\nWe offer a great package, which includes: \n\nA competitive salary \nHighly competitive contributory Civil Service Pension\nPersonalised training, aligned to your needs and aspirations\nFlexible hours and homeworking\nUp to 35.5 days leave per year on appointment, including bank holidays – with the option to purchase up to 5 more days if required\nOnce you are on board, your team leader will build a training programme for you from the outset, be that through classroom training, e-learning, mentoring, coaching or a combination. All designed to equip you with the skills to help us to fulfil our global mission.  \n\n \n\nAre you ready to be part of the team?  If so, to apply, please click on the ‘apply’ button below. \n\nJob Purpose\nWe solve complex technical and meteorological problems in order to predict the weather across the globe and we use those forecasts to help people stay safe and thrive.  We work alongside organisations such as NOAA, NASA and NATO, looking at observations from the oceans and far out into space, using cutting edge technology to provide forecasts that range from predicting solar flares, to monitoring ash plumes from volcanic eruptions. We’re the people that use one of the world’s most advanced supercomputers to provide the forecast for half of the world’s commercial aircraft whilst still working hard to tell the public whether it is going to rain tomorrow.\n\nEssential Qualifications, Skills & Abilities\nWhat are we looking for? \n\nEnthusiasm and experience of pushing the boundaries of computer scienceand a positive attitude to making a difference\nA working knowledge of one or more programming languages, ideally Python, Java, NodeJS or web development capabilities\nA genuine interest in solving complex technical problems\nA drive to develop your skills\nAdditional Supplementary Information\nKey Dates: Closing date 20/01/2020 with interviews W/C 10/02/2020 & W/C 17/02/2020. Please note that you will be notified if you are successful or unsuccessful.   \n\nShould you be offered an interview, please be aware there may be a selection exercise which could include a presentation, written test or a scenario-based activity. If you require any reasonable adjustments during these exercises, please include this information in your application. \n\nA reserve list may be held for a period up to 12 months from which further appointments may be made.\n\nAssociated salaries:\n\nSolutions Architect - £44,265 + £9,500 market supplement and incentive plan*   \n\nTech Lead - £36,684 + £6,000 market supplement and incentive plan*\n\nSenior Developer - £30,325 + £3,425 market supplement and incentive plan*     \n\nJunior Developer - £ 23,673 + £3,125 market supplement and incentive plan*\n\nFull-time, part-time and job share applications are invited. These role will nominally be based in Exeter but we will consider applicants wishing to work elsewhere within the UK within operational requirements. \n\nThis recruitment post is not offering UK Visa and Sponsorship and therefore requires all applicants to be eligible to work within the UK / EU without restriction. If you are a non–EU candidate, you will be required to provide and attach all relevant eligibility documentation to your application at the time of applying.\n\nPlease note that successful candidate/s will be required to satisfactorily undergo security clearance checks. This will generally require the candidate to have lived in the UK for at least three out of the last five years, but applicants not meeting this criteria may be considered. \n\nWe are a “Disability Confident” employer, Mindful Employer, with an Athena Swan Bronze award for our work on gender equality and an LGBTi network.\n\n*Market supplement and incentive plans are subject to review and cannot be permanently guaranteed.  Further details will be provided in formal offer letters.', true, '', false, 'Flexible', false);
    
    INSERT INTO adverts(position_id, correspondence_id, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, advert_url, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied)
    VALUES(6, 6, '', 'permanent', 'full-time','2019-12-19T00:00:00.000Z','2019-12-20T00:00:00.000Z','2020-01-24T00:00:00.000Z',true,'https://www.metoffice.gov.uk/about-us/careers/vacancies','23673','33260','Salary Information\nDepending on experience the salary will be between:\n\nSalary will start at £23,673 with opportunities to progress within the role up to the maximum of £26,119. Plus a discretionary Market Supplement value of £1,125 and a discretionary long-term incentive plan of £2,000 (subject to periodical review). \n\nSalary will start at £30,325 with opportunities to progress within the role up to the maximum of £33,260. Plus a discretionary Market Supplement value of £1,125 and a discretionary long-term incentive plan of £2,300 (subject to periodical review).  \n\nBackground\nYou’ll be joining a passionate and dedicate Agile/DevOps team that develop and maintain big data networks that are spread across the globe. We’re a growing team and we’re looking to invest in the continual development of our developers.\n\nJob Responsibilities\nYou’ll be responsible for delivering solid well engineered software that allows the Met Office to prosper. We commonly write in Python and JavaScript / TypeScript, but we’re look for candidates willing to turn their hand to any language that is suitable for the job.  \n\nEssential Qualifications, Skills & Abilities\nA degree, preferably a numerical based degree, or enough demonstrable knowledge \nExcellent problem-solving ability \nCollaborative team player, who is willing to learn and contribute with others \nA passion for writing code \nCommitted to professional development \nDesirable Qualifications, Skills & Abilities\nAn understanding of best practices for software development \nExperience writing scientific software \nUse of cloud services e.g. AWS \nTest driven development or behaviour driven development\nMentoring junior developers \nKnowledge of agile methodologies \nAn understanding of code version-control systems (GIT etc.) \nAdditional Supplementary Information\nGenuine career development – we even have an onsite college for training\nExcellent Civil Service defined benefit pension scheme (One of the most generous occupational pension schemes on the market)\n5 days a year holiday rising to 32.5 days after 5 years of service plus 8 bank holidays.\nAccess to onsite Gym, open 24/7\nFlexible working to help you to manage your work/life balance\nFree car park, excellent access to public transport and a cycle to work scheme\nVery competitive paternity/maternity leave\nTo apply, please click on the link below and attach the most recent version of your CV, along with a cover letter which briefly (no more than two-pages) states your experience against each essential and desirable criteria.  \n\nKey Dates: Closing date 24/01/2020 with interviews expected W/C 03/02/2020. Please note that you will be notified if you are successful or unsuccessful. \n\nShould you be offered an interview, please be aware there may be a selection exercise which could include a presentation, written test or a scenario-based activity. If you require any reasonable adjustments during these exercises, please include this information in your application. \n\nPlease note, when joining the Met Office all new employees will start on the salary band minimum.\n\nThis role will nominally be based in Exeter but we will consider applicants wishing to work elsewhere within the UK.\n\nThis recruitment post is not offering UK Visa and Sponsorship and therefore requires all applicants to be eligible to work within the UK / EU without restriction. If you are a non–EU candidate, you will be required to provide and attach all relevant eligibility documentation to your application at the time of applying. \n\nPlease note that successful candidate/s will be required to satisfactorily undergo security clearance checks. This will generally require the candidate to have lived in the UK for at least three out of the last five years, but applicants not meeting this criteria may be considered.\n\nWe are a “Disability Confident” employer, Mindful Employer, with an Athena Swan Bronze award for our work on gender equality and an LGBTi network.\n\nAllowances\nRRA/LTIP', false,'',false,'Exeter HQ', false),(7,7,'','permanent','full-time','2019-12-17T00:00:00.000Z','2019-12-20T00:00:00.000Z','2020-01-26T00:00:00.000Z',true,'https://www.metoffice.gov.uk/about-us/careers/vacancies','23673','40352','Salary Information\nSenior Scientist: £36,684 - £40,352 pa*\nScientist: £30,325 to £33,260 pa*\nFoundation Scientist: 23,673 - 26,119 pa*\n\n*Salary quoted is based on full-time salary (37 hours) and 27.5 days annual leave and 8 bank holidays.\n\nBackground\nNear term climate prediction is becoming a internationally high profile area of climate research. Making forecasts for the coming months, seasons and years is a complex task but our forecasts provide useful information for a wide range of users: government, humanitarian and commercial sectors and are continually improving.\n\nWe use an ensemble coupled ocean-atmosphere model system to make decadal forecasts. We are the WMO Lead Centre for Annual to Decadal Climate Prediction, and coordinate international activities to update, compile and combine global decadal predictions.\n\nThis role is focused on maintaining and developing our decadal climate predictions and our WMO Lead Centre activities in collaboration with international partners and the Copernicus Climate Change Service (C3S). You will be responsible for developing a database of multi-model decadal forecasts, improving our capability to provide, interpret and communicate forecasts via the Lead Centre website. There will also be opportunities to carry out scientific research on decadal predictions in this collaborative role.\n\nBenefits include flexible working, generous leave allowance, free car parking, tea and coffee and more. There are numerous clubs and activities and a gym on-site.\n\nJob Purpose\nTo deliver technical improvements and scientific research which enhance the Met Office’s capability and reputation in the field of decadal forecasting supporting the Met Office\s shared purpose (recognised as global leaders in weather and climate science and services in our changing world).\n\nJob Responsibilities\n• To maintain and enhance our provision of data and forecasts as the WMO Lead Centre for Annual to Decadal Climate Prediction.\n• To collaborate and liaise with our partners in the new C3S decadal prediction project.\n• To lead the documentation and publication of online decadal forecasts.\n• To work with others in our strategic area and other Met Office teams to enhance our technical and scientific capability.\n\nEssential Qualifications, Skills & Abilities\n1. A good background in a physical or mathematical science, (Foundation Scientist) / PhD or equivalent experience (Scientist) / post-doctoral research experience (Senior Scientist) in a relevant scientific discipline, or equivalent level of professional experience.\n2.Scientific programming experience (e.g. using Python, IDL, Fortran, C), commensurate with role level.\n3. Evidence of good communication skills (written, oral, presentation and listening) with ability to communicate scientific and technical information to a range of audiences.\n4. An ability to work well within a team to deliver shared objectives to deadlines, and to communicate effectively with technical and scientific colleagues.\n\nDesirable Qualifications, Skills & Abilities\n• Experience in developing web-based display and provision of scientific data.\n• A background understanding of initialised climate predictions.\n• Experience working with ensemble climate prediction data.\n• Knowledge of coupled atmosphere-ocean climate models.\n\nAdditional Supplementary Information\nFull-time, part-time and job share applications are invited. \n \nThe Met Office is an equal employer and flexible and UK homeworking requests will be considered. It is expected that you will need to be based in Exeter 100% of the induction period and thereafter around 75% of the week. \n \nThis role will nominally be based in Exeter but we will consider applicants wishing to work elsewhere within the UK as outlined above. This post may require applicants to travel to conferences or training events beyond Exeter and possibly internationally. \n\nTo apply, please click on the ‘apply’ button below.  \n\nKey Dates: Closing date 26/01/2020 with interviews expected W/C 03/02/2020. Please note that you will be notified if you are successful or unsuccessful.  \n\nShould you be offered an interview, please be aware there may be a selection exercise which could include a presentation, written test or a scenario-based activity. If you require any reasonable adjustments during these exercises, please include this information in your application.  \n\nPlease note, when joining the Met Office all new employees will start on the salary band minimum.  \n\nThis recruitment post is not offering UK Visa and Sponsorship and therefore requires all applicants to be eligible to work within the UK / EU without restriction. If you are a non–EU candidate, you will be required to provide and attach all relevant eligibility documentation to your application at the time of applying.  \n\nPlease note that successful candidate/s will be required to satisfactorily undergo security clearance checks. This will generally require the candidate to have lived in the UK for at least three out of the last five years, but applicants not meeting this criteria may be considered.  \n\nWe are a “Disability Confident” employer, Mindful Employer, with an Athena Swan Bronze award for our work on gender equality and an LGBTi network. ', false, '', false, 'flexible',false);

INSERT INTO contact_values(contact_id, contact_type, contact_value)
    VALUES(1,'Email','test@testing.com'),(1,'Telephone','0123456789');

-- INSERT INTO companies(company_name)
-- VALUES('Talent Ticker');

-- INSERT INTO adverts(company_id, contact_id, job_title, advert_ref, contract_type, full_time_part_time, date_posted, date_seen, closing_date, live, website, min_salary, max_salary, advert_description, agency, job_board, voluntary, job_location, applied)
--     VALUES(1, null, 'Software Engineer', 'abc123', 'Permanent', 'full-time', null, '2019-12-12', null, false, 'https://www.indeed.co.uk/jobs?q=software&l=cardiff&advn=998224676670214&vjk=e82b617fb725f81d', '£25,000', '£30,000', 'Dupont Consulting is proud to be recruiting on behalf of our client, Talent Ticker for a Platform Engineer to join their Head Office in Cardiff.

-- Talent Ticker is the world’s first Predictive Talent Management Market Intelligence platform. Talent Ticker uses Artificial Intelligence including deep learning and natural language processing to deliver a SaaS based platform that provides market insights for staffing firms to improve efficiencies, outreach and increase sales.

-- Talent Ticker are building a cutting-edge AI SaaS product that will be a leading tool to be used within global Human Capital and are building a brand that will be synonymous with names such as LinkedIn, Indeed, Workable and Zoom.

-- In under 1 year since inception they have successfully achieved their MVP, having launched Version 1 BETA in Jan 2019 and progressed to monetisation of the platform, surpassing initial revenue targets and approaching £250k ARR in the first quarter of monetisation. The business has recruited 18 members across their offices in Cardiff, London & New York, assembling a very strong team of Technology and Operations professionals with successful SAAS backgrounds and educations at Oxford, Cambridge, St Andrews and Stanford CA amongst others.

-- Given ther ambitious growth plans they are now looking for additional software engineers to help accelerate their product roadmap implementation.

-- You will be working on building the A.I. driven platform that provides the Talent Ticker website and 3rd party clients with accurate and relevant market intelligence.

-- Responsibilities

-- Contribute to the development of features from definition to deployment. These features may cover things such as:

-- o Data mining

-- o Data enrichment

-- o Data engineering

-- o Internal and external client APIs

-- o Building reports and monitoring

-- -Be a pro-active contributor on product features, technical design sessions, planning, bug washing, etc with an opportunity to lead on features with experience.

-- -Writing high quality software

-- -Deploying, running and supporting the services you build

-- -There is also an opportunity to contribute to and work on associated features as wanted/needed such as our A.I. and UEX.

-- Talent Ticker use a cutting-edge, cloud-focused tech stack, including (but certainly not limited to): Python 3.x, Serverless, AWS (e.g. EC2, Lambda, SQS/SNS, Fargate, Aurora), MongoDB, ElasticSearch & Terraform. BUT – they are advocates of using the right tools for the right job.

-- You must be able to work independently and be self-motivated, whilst also being able to work effectively in cross-functional teams. They are committed to innovation here and strongly encourage it with events and tools such as Hackathons, meetups, E-Learning, Learning lunches and Lightning Round Talks.

-- Useful/Desirable experience

-- - Python 3.x or another high-level programming language

-- - Micro-services architectures

-- - Both NoSQL (MongoDB, ElasticSearch) and SQL

-- - Cloud (especially AWS) services

-- - Source control software e.g. git

-- - BDD/TDD

-- - Agile methodologies – Scrum/Kanban

-- - Infrastructure as code e.g. Terraform

-- - CI/CD tooling

-- - Containers and their management tools e.g. ECS/Kubernetes/Fargate

-- - Messaging/Asynchronous frameworks/platforms

-- - Bachelor Degree or equivalent experience required

-- You will be part of a forward-thinking team within one the fastest growing tech start-ups in Wales.

-- Apart from being in this fast-paced environment some of the perks on offer are fantastic. You will have unlimited annual leave, daily coffee/tea, fresh fruit, healthy snacks, pension, flexible working hours and the chance to be awarded share options, not to mention a competitive basic salary.

-- ', true, 'indeed.co.uk', false, 'Cardiff'),
-- ('Method4','Experienced Full-Stack Developer','def456','Permanent','various',null,'2019-11-11',null,true,'https://www.indeed.co.uk/jobs?q=software&l=cardiff&advn=8174038496306901&vjk=985e024e4e3857c5','£30,000','£45,000','At Method4 we’re development people, we build brilliant and complex software solutions and make it look super easy. We have opportunities available for experienced full-stack developers to join our Agile development teams, working on software development projects for a wide variety of clients.

-- We’re based in a great location in the centre of Cardiff, a short walk from Cardiff Central Station. We know to create the best technology we need the best people, so we make a real effort to make Method4 not only a great place to work but a place where our people can do amazing things.

-- You’ll be involved with a wide range of technologies, developing digital platforms and cloud applications. If you’re keen to develop your career using the latest development tools and techniques you’ll benefit from the support of knowledgeable and friendly colleagues in a superb working environment, as well as access to training materials from Pluralsight and Microsoft Azure credits to experiment with the latest cloud technology.

-- Responsibilities:

-- Working closely with clients to develop complete software solutions to a high standard;
-- Involvement in the full project lifecycle, from requirements gathering and software design to release, end-to-end testing and system support;
-- Taking a leading role within one of our agile development teams working on multiple projects with varying deadlines;
-- Influencing architectural decisions, using the best and most suitable technologies available
-- We’re looking for:

-- An enthusiastic approach to work;
-- Excellent communication/interpersonal skills;
-- Pride in a job well done;
-- An eye for detail;
-- A keen interest in technology.
-- Essential skills:

-- Full stack development experience in Microsoft technologies;
-- Experience in analysis of system requirements;
-- Building complex .NET, MVC web applications;
-- Database development (including SQL);
-- Experience using Git;
-- JavaScript, CSS;
-- Development of software testing strategies.
-- Desirable but not essential skills:

-- Microsoft Azure development and deployment;
-- Agile development (for example SCRUM);
-- Experience of one or more modern front-end frameworks / libraries;
-- User Experience (UX) design;
-- Experience using Azure DevOps;
-- System architecture design.
-- Benefits: Pension scheme; 25 days holiday per annum (plus bank holidays) increasing by one day for every completed year up to 35 days; Pluralsight subscription; Visual studio enterprise subscription; bonus scheme; cycle to work scheme; charity and social events throughout the year; free freshly ground coffee and fruit.

-- Hours: Full (37.5 hours with flexible start and finish times each day) and part-time positions available, please state your preference on your application.

-- Job Types: Full-time, Part-time, Permanent

-- Salary: £30,000.00 to £45,000.00 /year

-- Flexible Working Options Available:

-- Flexitime
-- Part-time',false,'indeed.co.uk',false,'Cardiff', false);

-- INSERT INTO applications(advert_id, cover_letter)
-- VALUES(1, 'The quick brown fox jumps over the lazy dog');