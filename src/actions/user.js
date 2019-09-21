import { UPDATE_NAME, UPDATE_AGE, UPDATE_JOB } from './types';

export const updateName = name => {
  return { type: UPDATE_NAME, name: name };
};

export const updateAge = () => {
  return { type: UPDATE_AGE };
};

export const updateJob = () => {
  return { type: UPDATE_JOB };
};
