import axios, { AxiosInstance } from 'axios';

class HomeService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    });
  }
}

const homeServiceInstance = new HomeService();
export default homeServiceInstance;