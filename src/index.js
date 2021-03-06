import PartialReducer from './PartialReducer';
import shallowEqual from './shallowEqual';
// import observe from './observe';
import observeStore from './observeStore';
import * as normalized from './normalized';
import createSchema from './createSchema';
import createIndex, { Order } from './createIndex';
import createAreStatePropsEqual from './createAreStatePropsEqual';
import shallowArrayEquals from './shallowArrayEquals';

export {
  createSchema,
  createIndex,
  Order,

  PartialReducer,
  // observe,
  observeStore,
  shallowEqual,
  normalized,

  shallowArrayEquals,
  createAreStatePropsEqual,
};
