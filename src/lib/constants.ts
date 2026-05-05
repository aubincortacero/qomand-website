export const APP_URL = "https://app.qomand.fr";
export const REGISTER_URL = `/sign-up`;
export const LOGIN_URL = `/sign-in`;

export const APP_ROUTES = {
  dashboard: `${APP_URL}/dashboard`,
  menu: `${APP_URL}/dashboard/menu`,
  orders: `${APP_URL}/dashboard/orders`,
  tables: `${APP_URL}/dashboard/tables`,
  settings: `${APP_URL}/dashboard/settings`,
  website: `${APP_URL}/dashboard/website`,
  subscribe: `${APP_URL}/subscribe`,
} as const;

export const PRICING = {
  monthly: 20,
  commissionPercent: 1,
  trialDays: 14,
} as const;
