import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'e2a5051cfbmsh9c9d47956724f15p1bc602jsn9f9583241572'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => createRequest(
        `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
      )
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;