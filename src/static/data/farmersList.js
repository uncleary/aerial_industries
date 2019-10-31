const farmersList = [
  {
    id: 1,
    imgLink: require('../img/farmer1.jpg'),
    farmerName: 'Musa Aliu',
    cropType: 'Maize',
    farmingStage: 'Pre-Emergence',
    location: {
      region: 'NorthEast',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
    details: {
      id: 1,
      coopId: 'Ogoja Agro District',
      sizeOfOps: '3 hectares',
      potentialSalesValue: '₦1,480,000',
      fundingTarget: '',
      currentFundingPercent: '43%',
      transactionUpdate:
        'First mover market guarantee at Mile 12 with Ike Agro',
      summary:
        'Projected yield increase of 40% from last yr 2018.  14yrs farming and transactional experience',
      section1: {
        title: 'On Track',
        percent: '40%',
        desc: 'increase in crop yield',
      },
      section2: {
        bigTitle: 'What a success story!',
        desc: [
          { key: '2019 precipitation', value: '96% projected' },
          { key: 'Pre-emergence service', value: 'Completed 07/03/19' },
          { key: 'Soil enhancer application', value: 'On Time 18/03/19' },
        ],
        fundingNeeds: [
          { key: 'Produce off-takers', value: 'Contracted' },
          { key: 'Logistics to marketplace', value: 'Not contracted' },
        ],
      },
      fundingDetails: [
        {
          status: 'Funded',
          funder: 'PLANET ASIA',
        },
        {
          status: 'Funded',
          funder: 'Cygnus',
        },
        {
          status: ' Not Funded',
          funder: 'No lead',
        },
        {
          status: 'Partially Funded',
          funder: 'Ian Persaveli',
        },
      ],
    },
  },
  {
    id: 2,
    imgLink: require('../img/farmer2.jpg'),
    farmerName: 'Maryam Kabiru',
    cropType: 'Maize',
    farmingStage: 'Foilage',
    location: {
      region: 'NorthEast',
      city: 'Abakiliki',
      coordinates: '6°19\'44"N 8°08\'37"E',
    },
    details: {
      id: 2,
      coopId: 'Ogoja Agro District',
      sizeOfOps: '3 hectares',
      potentialSalesValue: '₦1,480,000',
      fundingTarget: '',
      currentFundingPercent: '43%',
      transactionUpdate:
        'First mover market guarantee at Mile 12 with Ike Agro',
      summary:
        'Projected yield increase of 40% from last yr 2018.  14yrs farming and transactional experience',
      section1: {
        title: 'Expected',
        percent: '65%',
        desc: 'increase in crop yield',
      },
      section2: {
        bigTitle: 'Great savings!',
        desc: [
          { key: 'Seed supply', value: 'Optimum' },
          { key: 'Field clearance service', value: 'Completed 01/04/19' },
          { key: 'Soil enhancer application', value: 'Done 12/04/19' },
        ],
        fundingNeeds: [
          { key: 'Aerial mechanization', value: 'Contracted' },
          { key: 'Harvest labour service', value: 'Not contracted' },
          { key: 'Logistics to marketplace', value: 'Not contracted' },
        ],
      },
      fundingDetails: [
        {
          status: 'Funded',
          funder: 'PLANET ASIA',
        },
        {
          status: 'Partially Funded',
          funder: 'Cygnus',
        },
        {
          status: 'Not Funded',
          funder: 'No lead',
        },
        {
          status: 'Not Funded',
          funder: 'No lead',
        },
      ],
    },
  },
  {
    id: 3,
    imgLink: require('../img/farmer3.jpg'),
    farmerName: 'Okechukwu Obi',
    cropType: 'Rice, Maize',
    farmingStage: 'Harvest',
    location: {
      region: 'SouthEast',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
    details: {
      id: 3,
      coopId: 'Ogoja Agro District',
      sizeOfOps: '3 hectares',
      potentialSalesValue: '₦1,480,000',
      fundingTarget: '',
      currentFundingPercent: '43%',
      transactionUpdate:
        'First mover market guarantee at Mile 12 with Ike Agro',
      summary:
        'Projected yield increase of 40% from last yr 2018.  14yrs farming and transactional experience',
      section1: {
        title: 'Almost',
        percent: '70%',
        desc: 'increase in crop yield',
      },
      section2: {
        bigTitle: 'What a success story!',
        desc: [
          { key: '2019 precipitation', value: '96% projected' },
          { key: 'Pre-emergence service', value: 'Completed 07/03/19' },
          { key: 'Soil enhancer application', value: 'On Time 18/03/19' },
        ],
        fundingNeeds: [
          { key: 'Produce off-takers', value: 'Contracted' },
          { key: 'Logistics to marketplace', value: 'Not contracted' },
        ],
      },
      fundingDetails: [
        {
          status: 'Funded',
          funder: 'PLANET ASIA',
        },
        {
          status: 'Funded',
          funder: 'Cygnus',
        },
        {
          status: ' Not Funded',
          funder: 'No lead',
        },
        {
          status: 'Partially Funded',
          funder: 'Ian Persaveli',
        },
      ],
    },
  },
  {
    id: 3,
    imgLink: require('../img/farmer3.jpg'),
    farmerName: 'Okechukwu Obi',
    cropType: 'Rice, Maize',
    farmingStage: 'Pre-Harvest',
    location: {
      region: 'SouthEast',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
  },
  {
    id: 4,
    imgLink: require('../img/farmer4.jpg'),
    farmerName: 'Banjo Jide',
    cropType: 'Maize',
    farmingStage: 'Pre-Harvest',
    location: {
      region: 'SouthWest',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
  },
  {
    id: 5,
    imgLink: require('../img/farmer5.jpg'),
    farmerName: 'John A',
    cropType: 'Rice',
    farmingStage: 'Pre-Emergence',
    location: {
      region: 'SouthEast',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
  },
  {
    id: 6,
    imgLink: require('../img/farmer6.jpg'),
    farmerName: 'Hamza Beko',
    cropType: 'Rice',
    farmingStage: 'Post-Emergence',
    location: {
      region: 'SouthWest',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
  },
];

export default farmersList;
