import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CallAdaptForClient, CallFilters, CallFromServer, GetCallsResponse } from '../types/Calls';

const BACK_URL = process.env.REACT_APP_BACKEND_URL;
const TOKEN = process.env.REACT_APP_TOKEN || '';

const adaptCallToClient = (callFromServer: CallFromServer): CallAdaptForClient => {
  return {
    id: callFromServer.id,
    partnershipId: callFromServer['partnership_id'],
    record: callFromServer.record,
    date: callFromServer.date,
    dateNotime: callFromServer['date_notime'],
    time: callFromServer.time,
    toNumber: callFromServer['to_number'],
    inOut: callFromServer['in_out'],
    source: callFromServer.source,
    personAvatar: callFromServer['person_avatar']
  };
};

export const callsApi = createApi({
  reducerPath: 'callsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACK_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', TOKEN);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCalls: builder.query<CallAdaptForClient[], CallFilters>({
      query: ({date, inOut, order}) => ({
        url: `/getList?date_start=${date[0]}&date_end=${date[1]}&in_out=${inOut === 0 || inOut === 1 ? inOut : ''}&sort_by=date&order=${order}`,
        method: 'POST',
      }),
      transformResponse: (response: GetCallsResponse) => response.results.map((call) => adaptCallToClient(call))
    }),
    getRecord: builder.mutation<string, CallAdaptForClient>({
      query: ({record, partnershipId}) => ({
        url: `/getRecord?record=${record}&partnership_id=${partnershipId}`,
        method: 'POST',
        responseHandler: (response) => response.blob(),
      }),
      transformResponse: (response: Blob) => URL.createObjectURL(
        response
      )
    }),
  }),
});

export const {
  useGetCallsQuery,
  useGetRecordMutation,
} = callsApi;
