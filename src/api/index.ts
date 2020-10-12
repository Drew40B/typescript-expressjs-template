import ExampleApi from './example';

import { Router, Express } from 'express';

export let setupApis = (application: Express) => {

  console.log('Setting up APIs')
  const router = Router();
  const exampleApi = new ExampleApi(router);

  exampleApi.setupApi();

  application.use('/api', router);
};

export interface API {
  setupApi(): any;
}
