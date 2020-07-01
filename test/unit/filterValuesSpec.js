describe('filterSensitiveValues Spec', function () {
  var tempConfig;
  beforeEach(function () {
    tempConfig = angular.copy(filterConfig);
    filterConfig.logFilters = ['password'];
  });
  afterEach(function () {
    filterConfig = angular.copy(tempConfig);
  });

  describe('filterSensitiveValues Spec - test filterSensitiveValues function - ', function () {

    it('should filter values for specified keys', function () {
      var val = [
        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124', config: {}, list: []}
      ];
      var expected = [
        {password: defaultFilterString, card: '2332414124', config: {}, list: []}
      ];
      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should not filter values for specified keys when an object is not found in log args', function () {
      var val = ["<fwefr23r>f</fwefr23r>"];
      var result = filterSensitiveValues(val);
      expect(result).toEqual(val);
    });

    it('should not filter values when key not found in object', function () {
      var val = [
        {passwordField: '<fwefr23r>f</fwefr23r>', card: '2332414124', config: {}, list: []}
      ];
      var result = filterSensitiveValues(val);
      expect(result).toEqual(val);
    });

    it('should not filter values for specified keys when an array is not received', function () {
      var val = "<fwefr23r>f</fwefr23r>";
      var result = filterSensitiveValues(val);
      expect(result).toEqual(val);
    });

    it('should filter values for specified keys within multiple log arguments', function () {
      var val = [
        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
        "some random string"
      ];

      var expected = [
        {password: filterConfig.filterString, card: '2332414124'},
        {password: filterConfig.filterString, card: '2332414124'},
        "some random string"
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values for specified keys within nested arrays', function () {
      var val = [
        [
          {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
          {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
          "some random string"
        ]
      ];

      var expected = [
        [
          {password: filterConfig.filterString, card: '2332414124'},
          {password: filterConfig.filterString, card: '2332414124'},
          "some random string"
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values for specified keys within nested objects', function () {
      var val = [
        [
          {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
          {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
          {password: {password: 'dwqd23edwq'}},
          "some random string"
        ]
      ];

      var expected = [
        [
          {password: filterConfig.filterString, card: '2332414124'},
          {password: filterConfig.filterString, card: '2332414124'},
          {password: {password: filterConfig.filterString}},
          "some random string"
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values for specified keys within nested objects with arrays as values of properties', function () {
      var val = [
        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
        {
          password: [
            {password: 'dwqd23edwq'}
          ], config: 3
        },
        "some random string"
      ];

      var expected = [
        {password: filterConfig.filterString, card: '2332414124'},
        {password: filterConfig.filterString, card: '2332414124'},
        {
          password: [
            {password: filterConfig.filterString}
          ], config: 3
        },
        "some random string"
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should not modify original object', function () {
      filterConfig.logFilters = ['id', 'email', 'device_id', 'token', 'password'];

      var originalReq = [{
        id : '9223c3d3-9a75-4554-86f8-c2e5f1f00e0d',
        name : 'ferron',
        email : 'ferron@logextender.com',
        device_id : 'c2e5f1f00e0d',
        token : '2332414124',
        password : 'dwqd23edwq'
      }];

      var reqCopy = [];

      angular.copy(originalReq, reqCopy);

      var result = filterSensitiveValues(reqCopy);

      expect(reqCopy).toEqual(originalReq);
      expect(result).toEqual([{
        id : filterConfig.filterString,
        name : 'ferron',
        email : filterConfig.filterString,
        device_id : filterConfig.filterString,
        token : filterConfig.filterString,
        password : filterConfig.filterString
      }]);
    });
  });
});
