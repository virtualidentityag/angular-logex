describe('filterSensitiveValues Spec', function () {
  var tempConfig;
  beforeEach(function () {
    tempConfig = angular.copy(filterConfig);
    filterConfig.logFilters = ['password'];
  });
  afterEach(function () {
    filterConfig = angular.copy(tempConfig);
  });

  describe('filterSensitiveValues Spec - test filterSensitiveValues, 6 levels deep nesting - ', function () {
    it('should filter values at 6 levels deep in an array', function () {
      var val = [
        [
          [
            [
              [
                [
                  {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                  {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                  {
                    password: [
                      {password: 'dwqd23edwq'}
                    ], config: 3
                  },
                  "some random string"
                ]
              ]
            ]
          ]
        ]
      ];

      var expected = [
        [
          [
            [
              [
                [
                  {password: filterConfig.filterString, card: '2332414124'},
                  {password: filterConfig.filterString, card: '2332414124'},
                  {
                    password: [
                      {password: filterConfig.filterString}
                    ], config: 3
                  },
                  "some random string"
                ]
              ]
            ]
          ]
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values at 6 levels deep in an object', function () {
      var val = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: '<fwefr23r>f</fwefr23r>', card: '2332414124'
                  }
                }
              }
            }
          }
        }
      };

      var expected = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: filterConfig.filterString, card: '2332414124'
                  }
                }
              }
            }
          }
        }
      };

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

  });

  describe('filterSensitiveValues Spec - test filterSensitiveValues, 7 levels deep nesting - ', function () {
    it('should filter values at 7 levels deep in an array', function () {
      var val = [
        [
          [
            [
              [
                [
                  [
                    {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                    {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                    {
                      password: [
                        {password: 'dwqd23edwq'}
                      ], config: 3
                    },
                    "some random string"
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var expected = [
        [
          [
            [
              [
                [
                  [
                    {password: filterConfig.filterString, card: '2332414124'},
                    {password: filterConfig.filterString, card: '2332414124'},
                    {
                      password: [
                        {password: filterConfig.filterString}
                      ], config: 3
                    },
                    "some random string"
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values at 7 levels deep in an object', function () {
      var val = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: '<fwefr23r>f</fwefr23r>', card: '2332414124'
                    }
                  }
                }
              }
            }
          }
        }
      };

      var expected = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: filterConfig.filterString, card: '2332414124'
                    }
                  }
                }
              }
            }
          }
        }
      };

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

  });

  describe('filterSensitiveValues Spec - test filterSensitiveValues, 8 levels deep nesting - ', function () {
    it('should filter values at 8 levels deep in an array', function () {
      var val = [
        [
          [
            [
              [
                [
                  [
                    [
                      {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                      {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                      {
                        password: [
                          {password: 'dwqd23edwq'}
                        ], config: 3
                      },
                      "some random string"
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var expected = [
        [
          [
            [
              [
                [
                  [
                    [
                      {password: filterConfig.filterString, card: '2332414124'},
                      {password: filterConfig.filterString, card: '2332414124'},
                      {
                        password: [
                          {password: filterConfig.filterString}
                        ], config: 3
                      },
                      "some random string"
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values at 8 levels deep in an object', function () {
      var val = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: {
                        password: '<fwefr23r>f</fwefr23r>', card: '2332414124'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      var expected = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: {
                        password: filterConfig.filterString, card: '2332414124'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });
  });

  describe('filterSensitiveValues Spec - test filterSensitiveValues, 9 levels deep nesting - ', function () {
    it('should filter values at 9 levels deep in an array', function () {
      var val = [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                        {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                        {
                          password: [
                            {password: 'dwqd23edwq'}
                          ], config: 3
                        },
                        "some random string"
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var expected = [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        {password: filterConfig.filterString, card: '2332414124'},
                        {password: filterConfig.filterString, card: '2332414124'},
                        {
                          password: [
                            {password: filterConfig.filterString}
                          ], config: 3
                        },
                        "some random string"
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values at 9 levels deep in an object', function () {
      var val = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: {
                        password: {
                          password: '<fwefr23r>f</fwefr23r>', card: '2332414124'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      var expected = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: {
                        password: {
                          password: filterConfig.filterString, card: '2332414124'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });
  });
  describe('filterSensitiveValues Spec - test filterSensitiveValues, 10 levels deep nesting - ', function () {
    it('should filter values at 9 levels deep in an array', function () {
      var val = [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [
                          {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                          {password: '<fwefr23r>f</fwefr23r>', card: '2332414124'},
                          {
                            password: [
                              {password: 'dwqd23edwq'}
                            ], config: 3
                          },
                          "some random string"
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var expected = [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [
                          {password: filterConfig.filterString, card: '2332414124'},
                          {password: filterConfig.filterString, card: '2332414124'},
                          {
                            password: [
                              {password: filterConfig.filterString}
                            ], config: 3
                          },
                          "some random string"
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ];

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });

    it('should filter values at 10 levels deep in an object', function () {
      var val = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: {
                        password: {
                          password: {
                            password: '<fwefr23r>f</fwefr23r>', card: '2332414124'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      var expected = {
        password: {
          password: {
            password: {
              password: {
                password: {
                  password: {
                    password: {
                      password: {
                        password: {
                          password: {
                            password: filterConfig.filterString, card: '2332414124'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };

      var result = filterSensitiveValues(val);
      expect(result).toEqual(expected);
    });
  });


});
