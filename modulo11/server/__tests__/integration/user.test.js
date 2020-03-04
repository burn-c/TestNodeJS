import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Carlos Oliveira',
        email: 'carlos@burn.com.br',
        password_hash: '12345',
      });

    expect(response.body).toHaveProperty('id');
  });
});
