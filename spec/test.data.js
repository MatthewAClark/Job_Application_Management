const post = {
    companies: {
      company_name: 'Sainsburys', 
      sector: 'food', 
      industry: 'retail', 
      company_url: 'www.sainsburys.com'
    },
    addresses: {
      company_id: 2,
      line_1: '3 Walkway Close',
      line_2: 'Framping',
      town_city: 'Bobminster',
      county_state: 'Malyshire',
      country: 'uk',
      postcode_zipcode: 'QW1 1WQ' 
    },
    contacts: {
        address_id: 2,
        contact_name: 'Brian May',
        contact_title: 'Mr',
        contact_position: 'Astronomer',
        tel_number1: '123',
        tel_number2: '456',
        fax: '789',
        email: 'brain.may@stars.com',
        contact_url: 'www.brianmay.com',
        reference: true,
        date_known: '1980-01-01',
        live: true
    },
    personal: {
        user_id: 2,
        contact_id: 2,
        personal_name: 'Freddie Mercury', 
        additional_info: 'mummu mia mummu mia let me go', 
        personal_profile: 'I will not let you go', 
        hobbies_interests: 'Making music', 
        ni_number: 'DE123456H'
    },
    school: {
        contact_id: 2,
        address_id: 4,
        school_name: 'Hogwarts College',
        school_type: '6th form',
        date_from: '2002-09-01',
        date_to: '2004-07-31'
    }
  }
  
  const get = {
    companies: [{
      company_name: 'Apple', 
      industry: 'Technology'},{
      company_name: 'Samsung',
      industry: 'Technology'
      }],
    addresses: [{
      line_1: 'Apple Store', 
      line_2: 'Princesshay',
      town_city: 'Exeter',
      county_state: 'Devon',
      country: 'uk',
      postcode_zipcode:'EX1 1GE'
      },{
        line_1: '63-66 Grand Arcade', 
        line_2: 'St Davids Dewi Sant',
        town_city: 'Cardiff',
        county_state: '',
        country: 'uk',
        postcode_zipcode:'CF10 2EL'
      },{
        line_1: 'Samsung Experience Store', 
        line_2: '70 Queen St',
        town_city: 'Cardiff',
        county_state: '',
        country: 'uk',
        postcode_zipcode:'CF10 2GQ'
      }],
    contacts: [{
        contact_id: 1, 
        contact_name: 'Joe Bloggs', 
        contact_title: 'Mr', 
        contact_position: 'Managing Director', 
        tel_number1: '01392123455', 
        tel_number2: '0775775777', 
        fax: '0147852369', 
        email: 'joe.bloggs@blogsnet.com', 
        contact_url: 'www.joebloggs.co.uk',
        reference: true,
        date_known: '2005-12-14',
        live: true
    },{
        contact_id: 2, 
        contact_name: 'Freddie Mercury', 
        contact_title: 'Mr', 
        contact_position: 'Rock Start', 
        tel_number1: '0124578963', 
        tel_number2: '0135798642', 
        fax: '', 
        email: 'wewillrocku@queen.com', 
        contact_url: 'www.freddie.com',
        reference: false,
        date_known: '1970-01-01',
        live: false
    }],
    personal: {
        user_id: 1,
        contact_id: 1,
        personal_name: 'Joe Bloggs', 
        additional_info: 'Wake me up when September ends', 
        personal_profile: 'I want to be a scientist', 
        hobbies_interests: 'I like making a mess', 
        ni_number: 'AB123456C'},
    schools: {
        contact_id: 1, 
        address_id: 3, 
        school_name: 'Hargots School', 
        school_type: 'Secondary', 
        date_from: '1997-09-01', 
        date_to: '2002-07-01'
    }
  }

  module.exports = {get, post};