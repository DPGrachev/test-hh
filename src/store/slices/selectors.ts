import { CallFilters } from '../../types/Calls';
import { State } from '../types';

export const getFilters = (state: State): CallFilters => state.filters;