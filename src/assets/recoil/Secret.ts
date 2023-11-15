import { atom } from 'recoil';

const secret = atom<string>({
  key: 'secretState',
  default: '',
});

export default secret;