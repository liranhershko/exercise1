import crypto from 'crypto-js';

export function getMd5Hash(str) {
  str = str.trim();
  str = str.toLowerCase();
  return crypto.MD5(str).toString();
}
