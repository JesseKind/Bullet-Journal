import { EventInput } from "@fullcalendar/core";
import { createAction, props } from "@ngrx/store";

export const deleteEvent = createAction('[Fullcalendar] Delete Event', props<{ id: string }>());
