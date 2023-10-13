import { atom } from "recoil";

const activeStepIndexAtom = atom({
  key: 'activeStepIndex',
  default: 0,
});

export { activeStepIndexAtom };
