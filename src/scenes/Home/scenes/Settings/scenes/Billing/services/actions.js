import { createActions } from 'redux-actions';

const {
  getBillingInfo,
  getBillingInfoSucceed,
  getBillingInfoFailed,
  postLicense,
  postCoupon,
  postCouponSucceed,
  postCouponFailed,
  cancelSubscription,
  cancelSubscriptionSucceed,
  cancelSubscriptionFailed,
  updatePaymentInfo,
  updatePaymentInfoSucceed,
  updatePaymentInfoFailed,
  postSmsPlan,
  postSmsPlanSucceed,
  postSmsPlanFailed,
  getSmsPlan,
  getSmsPlanSucceed,
  getSmsPlanFailed
} = createActions({
  GET_BILLING_INFO: pageId => ({ pageId }),
  GET_BILLING_INFO_SUCCEED: billingInfo => ({ billingInfo }),
  GET_BILLING_INFO_FAILED: error => ({ error }),
  POST_LICENSE: (pageId, data) => ({ pageId, data }),
  POST_COUPON: (pageId, plan, coupon) => ({ pageId, plan, coupon }),
  POST_COUPON_SUCCEED: price => ({ price }),
  POST_COUPON_FAILED: error => ({ error }),
  CANCEL_SUBSCRIPTION: pageId => ({ pageId }),
  CANCEL_SUBSCRIPTION_SUCCEED: () => ({}),
  CANCEL_SUBSCRIPTION_FAILED: error => ({ error }),
  UPDATE_PAYMENT_INFO: (pageId, source) => ({ pageId, source }),
  UPDATE_PAYMENT_INFO_SUCCEED: billingInfo => ({ billingInfo }),
  UPDATE_PAYMENT_INFO_FAILED: error => ({ error }),
  POST_SMS_PLAN: (pageId, data) => ({ pageId, data }),
  POST_SMS_PLAN_SUCCEED: billingInfo => ({ billingInfo }),
  POST_SMS_PLAN_FAILED: error => ({ error }),
  GET_SMS_PLAN: (pageId) => ({ pageId }),
  GET_SMS_PLAN_SUCCEED: smsPlan => ({ smsPlan }),
  GET_SMS_PLAN_FAILED: error => ({ error })
});

export {
  getBillingInfo,
  getBillingInfoSucceed,
  getBillingInfoFailed,
  postLicense,
  postCoupon,
  postCouponSucceed,
  postCouponFailed,
  cancelSubscription,
  cancelSubscriptionSucceed,
  cancelSubscriptionFailed,
  updatePaymentInfo,
  updatePaymentInfoSucceed,
  updatePaymentInfoFailed,
  postSmsPlan,
  postSmsPlanSucceed,
  postSmsPlanFailed,
  getSmsPlan,
  getSmsPlanSucceed,
  getSmsPlanFailed
};
