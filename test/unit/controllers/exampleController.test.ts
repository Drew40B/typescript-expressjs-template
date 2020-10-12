import * as  controller from '../../../src/api/example/controller';
import { createRequest, createResponse } from 'node-mocks-http';


describe('ExampleController', () => {
    describe('get', () => {
        it('happy path', async (done) => {

            const request = createRequest();
            const response = createResponse();

            controller.get(request, response);

            expect(response._getStatusCode()).toBe(200);
            done();
        });
    });
});