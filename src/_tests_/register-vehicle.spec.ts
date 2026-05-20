import { RegisterVehicle } from '../controllers/register-vehicle';

describe('Register Vehicle', () => {
    test('is the name does not exist return 400', () => {
        const sut = new RegisterVehicle(); // System Under Test
        const httpRequest = {
            body: {
                name: 'Nissan',
                model: 'Versa',
                year: 2020
            }
        };
        const httpResponse = sut.handle(httpRequest);
        expect(httpResponse.statusCode).toBe(400);
    });
});
