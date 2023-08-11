import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
  getBookingHistory,
  getNotifications,
  getProfile,
  getPromos,
  getPromo,
  getNotificationsCount,
  getHotelDetail,
  getHotelList,
  getUserSummary,
  getVersion,
  getHotelType,
  getHotelFavoriteList,
  getBookingHistoryDetail,
  getHotelReviews,
  getHotelReviewSum,
  getHotelDetailRoom,
  getStaticCountries,
} from '../_api';

const HOUR = 60;
const MINUTE = 60;
const SECONDS = 1000;

const SHORT_STALE_TIME = 3 * MINUTE * SECONDS;
const LONG_STALE_TIME = 1 * HOUR * MINUTE * SECONDS;
const LONG_CACHE_TIME = 1.1 * HOUR * MINUTE * SECONDS;

// PRIVATE USEQUERY
// useUserSummary
export const useBookingHistory = (status = 1, fcmToken, userId) => {
  return useInfiniteQuery({
    queryKey: ['bookingHistory', userId, status],
    queryFn: ({pageParam = 1}) =>
      getBookingHistory(pageParam, status, fcmToken),
    getNextPageParam: lastPage => lastPage.next,
    staleTime: SHORT_STALE_TIME,
  });
};
export const useBookingHistoryDetail = ({
  booking_id,
  mode,
  enabled = true,
  token_fcm,
}) => {
  return useQuery({
    queryKey: ['bookingHistoryDetail', booking_id],
    queryFn: () => getBookingHistoryDetail({booking_id, mode, token_fcm}),
    enabled,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};

export const usePromo = ({params}, enabled = true) => {
  return useInfiniteQuery({
    queryKey: ['promos', params],
    queryFn: ({pageParam = 1}) => getPromos(pageParam, params),
    getNextPageParam: lastPage => lastPage.next,
    staleTime: SHORT_STALE_TIME,
    enabled,
  });
};

export const usePromoDetail = (promo_id, enabled = true) => {
  return useQuery({
    queryKey: ['promoDetail', promo_id],
    queryFn: () => getPromo(promo_id),
    enabled,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};

export const useNotifications = (userId, params, token_fcm) => {
  return useQuery({
    queryKey: ['notifications', userId, params],
    queryFn: () => getNotifications(params, token_fcm),
    enabled: true,
    staleTime: SHORT_STALE_TIME,
    cacheTime: SHORT_STALE_TIME,
  });
};

export const useNotificationsCount = (userId, token_fcm) => {
  return useQuery({
    queryKey: ['notificationsCount', userId],
    queryFn: () => getNotificationsCount(userId, token_fcm),
    staleTime: SHORT_STALE_TIME,
    enabled: true,
  });
};

export const useProfile = (userId, token_fcm) => {
  return useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => getProfile(token_fcm),
    enabled: true,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};

export const useUserSummary = (userId, token_fcm, enabled = true) => {
  return useQuery({
    queryKey: ['userSummary', userId],
    queryFn: () => getUserSummary(userId, token_fcm),
    enabled,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};

export const useVersion = platform => {
  return useQuery({
    queryKey: ['version', platform],
    queryFn: () => getVersion(platform),
    enabled: true,
    staleTime: LONG_STALE_TIME,
    refetchInterval: 4 * HOUR * MINUTE * SECONDS,
  });
};

// TODO: change when mutation is use on hotelFav
export const useHotelFavoriteList = (userId, token_fcm) => {
  return useInfiniteQuery({
    queryKey: ['hotelFavorite', userId],
    queryFn: ({pageParam = 1}) => getHotelFavoriteList(pageParam, token_fcm),
    getNextPageParam: lastPage => lastPage.next,
    staleTime: SHORT_STALE_TIME,
  });
};

// no cache needed
export const useHotelList = ({params}) => {
  return useInfiniteQuery({
    queryKey: ['hotelList', params],
    queryFn: ({pageParam = 1}) => getHotelList(pageParam, params),
    getNextPageParam: lastPage => lastPage.next,
    enabled: true,
  });
};
export const useHotelDetail = (param, enabled) => {
  return useQuery({
    queryKey: ['hotelDetail', param],
    queryFn: () => getHotelDetail(param),
    enabled,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};
export const useHotelRoom = (hotel_id, {params}, enabled = true) => {
  return useQuery({
    queryKey: ['hotelDetailRoom', hotel_id, params],
    queryFn: () => getHotelDetailRoom(hotel_id, params),
    enabled,
  });
};

export const useAcomodationType = enabled => {
  return useQuery({
    queryKey: ['hotelType'],
    queryFn: () => getHotelType(),
    enabled,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};

export const useReviewList = (hotel_id, enabled) => {
  return useInfiniteQuery({
    queryKey: ['reviewList', hotel_id],
    queryFn: ({pageParam = 1}) => getHotelReviews(hotel_id, pageParam),
    enabled,
    staleTime: SHORT_STALE_TIME,
  });
};

export const useReviewSummary = (hotel_id, enabled) => {
  return useQuery({
    queryKey: ['reviewListSum', hotel_id],
    queryFn: ({pageParam = 1}) => getHotelReviewSum(hotel_id, pageParam),
    enabled,
    staleTime: SHORT_STALE_TIME,
  });
};

export const useStaticCountries = enabled => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => getStaticCountries(),
    enabled,
    staleTime: LONG_STALE_TIME,
    cacheTime: LONG_CACHE_TIME,
  });
};
