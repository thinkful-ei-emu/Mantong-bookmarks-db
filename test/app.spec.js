const app = require('../src/app');

describe('App', () =>{
  it('GET / should return 200 a list of bookmarks', () =>{
    return supertest(app)
      .get('/')
      .expect(200, 'bookmarks');
  });
});
