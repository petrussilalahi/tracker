import {Buffer} from 'buffer'

const username = 'karaf';
const password = 'karaf';

const credentials = `${username}:${password}`;
const base64Credentials = Buffer.from(credentials, 'utf-8').toString('base64');

const authHeaderValue = 'Basic ' + `${base64Credentials}`;

interface Config {
  headers: {
    'Content-Type': string;
    'Authorization': string;
  };
}

const config: Config = {
  headers: {
    'Content-Type': 'application/json',
     Authorization: authHeaderValue,
  },
};

async function baseApi(endpoint: string, data: any): Promise<Response> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response;
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.log('handle error', error);
    throw new Error(error);
  }
}

export default baseApi;