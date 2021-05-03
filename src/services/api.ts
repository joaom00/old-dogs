export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body: {
  [key: string]: string;
}): { url: string; options: RequestInit } {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}

export function USER_GET(token: string): { url: string; options: RequestInit } {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  };
}
