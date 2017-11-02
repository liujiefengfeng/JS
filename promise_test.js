var assert = require('power-assert');

describe('Basic test', () => {
  context('When Callback high order func', () => {
    it('should use `done` for test', (done) => {
      setTimeout(function() {
        assert(true);
        done();
      }, 0);
    });
  });

  context('When promise object', () => {
    it('should use `done` for test?', (done) => {
      var promise = Promise.resolve(1);

      promise.then(function(value) {
        assert(value === 1);
        done();
      })
    });
  });

  context('When promise object', () => {
    it('should use `done` for test?', (done) => {
      var promise = Promise.resolve();

      promise.then(function(value) {
        assert(false);
      }).then(done, done)
    });
  });

  context('Promise test', () => {
    it('should return a promise object', () => {
      var promise = Promise.resolve(1);
      return promise.then((value) => {
        assert(value === 1)
      });
    });

    it('should be failed', () => {
      var promise = Promise.resolve();
      return promise.then(() => {
        assert(false);
      })
    });
  });
});
