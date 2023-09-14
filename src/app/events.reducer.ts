import { createReducer, on } from '@ngrx/store';
import { EventInput } from "@fullcalendar/core";
import * as EventActions from './actions';

export interface EventState {
  events: EventInput[];
}

const initialState: EventState = {
  events: [],
};

const eventReducer = createReducer(
  initialState,
  on(EventActions.deleteEvent, (state, { id }) => {
    return {
      ...state,
      events: state.events.filter(event => event.id !== id),
    };
  })
);

export function reducer(state: EventState | undefined, action: any) {
  return eventReducer(state, action);
}
