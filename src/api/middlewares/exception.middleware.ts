import { AxiosError, AxiosInstance } from 'axios';

/**
 * Attach interceptors for handling exceptions globally
 * 
 * @param instance - The Axios instance to attach the interceptors to
 */
export const attachExceptionInterceptor = (instance: AxiosInstance) => {
  // Request Interceptor (if you need to handle request before sending)
  instance.interceptors.request.use(
    (config) => {
      // Modify the request config before it's sent (e.g., add auth headers)
      return config;
    },
    (error) => {
      // Handle request error here
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  instance.interceptors.response.use(
    (response) => {
      // Any status code that falls within the range of 2xx will trigger this
      return response;
    },
    (error: AxiosError) => {
      // Handle response errors globally here
      if (error.response) {
        // Server responded with a status code outside 2xx range
        console.error('Error Response:', error.response.data);
        return Promise.reject(error.response.data);
      } else if (error.request) {
        // Request made but no response received
        console.error('No Response Received:', error.request);
        return Promise.reject({ message: 'No response from server, please try again later.' });
      } else {
        // Something went wrong in setting up the request
        console.error('Request Setup Error:', error.message);
        return Promise.reject({ message: error.message });
      }
    }
  );
};
