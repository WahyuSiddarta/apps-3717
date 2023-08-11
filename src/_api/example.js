import {fetchWrapper} from '../_helpers/fetch-wrapper';

export const getBookingHistory = async (page, status, fcmToken) => {
  const url = `/api/v1/booking_history?page=${page}&status=${status}`;
  const response = await fetchWrapper.getPrivate(url, fcmToken);
  const {booking_history, next_page} = response?.data;

  return {
    results: booking_history,
    next: !!next_page ? page + 1 : undefined,
  };
};

export const getBookingHistoryDetail = param => {
  const {booking_id, mode, token_fcm} = param;
  if (!booking_id || !mode) return false;
  return mode === 'hotel'
    ? getBookingDetailRoom({booking_id, token_fcm})
    : getBookingDetailActivity({booking_id, token_fcm});
};

const getBookingDetailRoom = async ({booking_id, token_fcm}) => {
  const url = `/api/v1/booking_history/rooms?booking_id=${booking_id}`;
  const response = await fetchWrapper.getPrivate(url, token_fcm);
  return response?.data;
};

const getBookingDetailActivity = async ({booking_id, token_fcm}) => {
  const url = `/api/v1/booking_history/activity?booking_id=${booking_id}`;
  const response = await fetchWrapper.getPrivate(url, token_fcm);
  return response?.data;
};

export const getHotelReviews = async (hotel_id, page) => {
  const url = `/public/v1/hotel/${hotel_id}/reviews?page=${page}`;
  const response = await fetchWrapper.getPublic(url);
  const {reviews, next_page} = response?.data;

  return {
    results: reviews,
    next: !!next_page ? page + 1 : undefined,
  };
};

export const getHotelReviewSum = async hotel_id => {
  const url = `/public/v1/hotel/${hotel_id}/reviews_sum`;
  const response = await fetchWrapper.getPublic(url);
  return response?.data;
};

export const getPromos = async (page, query) => {
  const queryFormatted = new URLSearchParams(query);
  const url = `/public/v1/promo?page=${page}&${queryFormatted}`;
  const response = await fetchWrapper.getPublic(url);
  const {promo, next_page} = response?.data;

  return {
    results: promo,
    next: !!next_page ? page + 1 : undefined,
  };
};

export const getPromo = async promo_id => {
  const url = `/public/v1/promo/${promo_id}`;
  const response = await fetchWrapper.getPublic(url);
  return response?.data;
};

export const getNotifications = async (params, token_fcm) => {
  const queryFormatted = new URLSearchParams(params);
  const url = `/api/v1/notif?${queryFormatted}`;
  const response = await fetchWrapper.getPrivate(url, token_fcm);
  return response?.data;
};

export const getNotificationsCount = async (userId, token_fcm) => {
  if (!userId) return 0;
  const url = `/api/v1/notif/count/unread`;
  const response = await fetchWrapper.getPrivate(url, token_fcm);
  const count = response?.data ?? 0;
  return count;
};

export const getProfile = async token_fcm => {
  const url = `/api/v1/userprofile`;
  const response = await fetchWrapper.getPrivate(url, token_fcm);
  return response?.data;
};

export const getHotelDetail = async param => {
  const response = await fetchWrapper.getPublic(`/public/v1/hotel/${param}`);
  return response?.data;
};

export const getHotelDetailRoom = async (hotel_id, query) => {
  const queryFormatted = new URLSearchParams(query);
  const url = `/public/v1/hotel/${hotel_id}/rooms?${queryFormatted}`;
  const response = await fetchWrapper.getPublic(url);
  return response?.data;
};

export const getHotelList = async (page, query) => {
  const queryFormatted = new URLSearchParams(query);
  const url = `/public/v1/hotels?page=${page}&${queryFormatted}`;
  const response = await fetchWrapper.getPublic(url);
  const {hotels, next_page} = response?.data;

  return {
    results: hotels,
    next: !!next_page ? page + 1 : undefined,
  };
};

export const getHotelType = async () => {
  const response = await fetchWrapper.getPublic('/public/v1/list/hoteltype');
  return response?.data;
};

export const getHotelFavoriteList = async (pageParam, fcm_token) => {
  const url = `/api/v1/hotels/favorite?page=${pageParam}`;
  const response = await fetchWrapper.getPrivate(url, fcm_token);
  const {hotels_favorite, next_page} = response?.data;

  return {
    results: hotels_favorite,
    next: !!next_page ? page + 1 : undefined,
  };
};

export const getUserSummary = async (userId, fcm_token) => {
  if (!userId) return '';
  const url = '/api/v1/user_summary';
  const response = await fetchWrapper.getPrivate(url, fcm_token);
  return response?.data;
};
export const getVersion = async platform => {
  let result = {
    versions: -1,
    isForceUpdate: false,
  };

  if (platform === 'ios') {
  } else if (platform === 'android') {
    const response = await fetchWrapper.getPublic('/public/v1/system/android');
    const version = parseInt(response?.versions, 10);
    if (!isNaN(version)) {
      result.versions = version;
      result.isForceUpdate = response?.force_update;
    }
  }
  return result;
};

export const getStaticCountries = async () => {
  const response = await fetchWrapper.getPublic('/public/v1/list/countries');
  return response?.data;
};
