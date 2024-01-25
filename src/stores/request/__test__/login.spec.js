// Import necessary dependencies and the function to be tested
import { setActivePinia, createPinia } from 'pinia' 
import { login } from '@/stores/request/main.js';
import { describe, it, expect, beforeEach,globalThis } from 'vitest';
// Mocking the global bannerStore
const bannerStore = {
  setMessage: jest.fn(),
};

// Mocking the global fetch function
globalThis.fetch = jest.fn();

// Unit tests
describe('login function', () => {
  beforeEach(() => {
    // Clear the mock calls before each test
    jest.clearAllMocks();
  });

  it('should return status "ok" and token on successful login', async () => {
    // Mock successful response from fetch
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'fakeToken' }),
    });

    const result = await login({ username: 'testUser', password: 'testPassword' });

    expect(result).toEqual({ status: 'ok', token: 'fakeToken' });
    expect(bannerStore.setMessage).toHaveBeenCalledWith('Logowanie powiodło się', 'success');
  });

  it('should return status "error" on failed login', async () => {
    // Mock failed response from fetch
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Authentication failed' }),
    });

    const result = await login({ username: 'testUser', password: 'testPassword' });

    expect(result).toEqual({ status: 'error' });
    expect(bannerStore.setMessage).toHaveBeenCalledWith('Logowanie nie powiodło się', 'error');
  });

  it('should handle network error', async () => {
    // Mock network error from fetch
    fetch.mockRejectedValueOnce(new Error('Network error'));

    const result = await login({ username: 'testUser', password: 'testPassword' });

    expect(result).toBeUndefined();
    expect(bannerStore.setMessage).toHaveBeenCalledWith('Error: Network error', 'error');
  });
});
