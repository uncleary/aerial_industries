const farmersList = [
  {
    id: 1,
    imgLink: '../static/img/farmer1.jpg',
    farmerName: 'Musa Aliu',
    cropType: 'Maize',
    farmingStage: 'Pre-Emergence',
    location: {
      region: 'NorthEast',
      city: 'Ogoja',
      coordinates: '6°39\'03"N 8°47\'49"E',
    },
    timeline: [
      {
        text: 'Wrote my first blog post ever on Medium',
        date: 'March 03 2017',
        category: {
          tag: 'medium',
          color: '#018f69',
        },
        link: {
          url:
            'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Read more',
        },
      },
    ],
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
    imgLink: '../static/img/farmer2.jpg',
    farmerName: 'Kunle Kabiru',
    cropType: 'Maize',
    farmingStage: 'Post-Emergence',
    region: 'NorthEast',
  },
  {
    id: 3,
    imgLink: '../static/img/farmer3.jpg',
    farmerName: 'Okechukwu Obi',
    cropType: 'Rice, Maize',
    farmingStage: 'Pre-Harvest',
    region: 'SouthEast',
  },
  {
    id: 4,
    imgLink: '../static/img/farmer4.jpg',
    farmerName: 'Banjo Jide',
    cropType: 'Maize',
    farmingStage: 'Pre-Harvest',
    region: 'SouthWest',
  },
  {
    id: 5,
    imgLink: '../static/img/farmer5.jpg',
    farmerName: 'John A',
    cropType: 'Rice',
    farmingStage: 'Pre-Emergence',
    region: 'SouthEast',
  },
  {
    id: 6,
    imgLink: '../static/img/farmer6.jpg',
    farmerName: 'Hamza Beko',
    cropType: 'Rice',
    farmingStage: 'Post-Emergence',
    region: 'SouthWest',
  },
];

export default farmersList;
