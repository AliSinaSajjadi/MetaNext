import { atom } from 'recoil';

const phoneNumber = atom<string>({
  key: 'phoneNumberState',
  default: '', // Initial value of the state
});

export default phoneNumber;