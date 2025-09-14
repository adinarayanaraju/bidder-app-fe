import { modulePath } from "./moduleConstant";

export const routeConstants = {
  HOME_PAGE: "/",
  SIGN_UP: `${modulePath.AUTH}/signup`,
  SIGN_IN: `${modulePath.AUTH}/signin`,
  FORGOT_PASSWORD: `${modulePath.AUTH}/forgot-password`,
  RESET_PASSWORD: `${modulePath.AUTH}/reset-password/:token`,
  VERIFY_ACCOUNT: `${modulePath.AUTH}/verify-account/:token`,
  AUCTION_DETAIL: `${modulePath.AUCTION}/detail`,
  AUCTION_CREATE: `${modulePath.AUCTION}/create`,
  PERMISSION_DENIED: `${modulePath.PERMISSION}`,
  AUCTION_LIST: `${modulePath.AUCTION}`,
  USER_PROFILE: `${modulePath.USER}/profile`,
  AUCTION_UPDATE: `${modulePath.AUCTION}/update`,
};
