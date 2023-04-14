"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendText = exports.sendLocation = exports.sendList = exports.sendFeed = exports.sendCustom = exports.sendCommerce = exports.default = void 0;

var _reactNative = require("react-native");

const {
  KakaoShareLink
} = _reactNative.NativeModules;
/**
 * ContentType
 * @description 카카오 링크 본문 내용 타입
 * @property title        제목
 * @property imageUrl     이미지 url
 * @property link         클릭 시 열리는 링크
 * @property description  설명 (Option)
 * @property imageWidth   이미지 가로 길이 (Option)
 * @property imageHeight  이미지 세로 길이 (Option)
 */

/**
 * sendCommerce
 * @param {CommerceTemplateType} commerceTemplate CommerceTemplate Item
 * @param {CallbackType} [callback] callback function
 * @returns {Promise<SendResultType>}
 */
const sendCommerce = (commerceTemplate, callback) => {
  return KakaoShareLink.sendCommerce(commerceTemplate).then(result => {
    if (callback && typeof callback === 'function') {
      callback(undefined, result);
    }

    return result;
  }).catch(error => {
    if (callback && typeof callback === 'function') {
      callback(error, undefined);
    }

    throw error;
  });
};
/**
 * sendList
 * @param {ListTemplateType} listTemplate ListTemplate Item
 * @param {CallbackType} [callback] callback function
 * @returns {Promise<SendResultType>}
 */


exports.sendCommerce = sendCommerce;

const sendList = (listTemplate, callback) => {
  return KakaoShareLink.sendList(listTemplate).then(result => {
    if (callback && typeof callback === 'function') {
      callback(undefined, result);
    }

    return result;
  }).catch(error => {
    if (callback && typeof callback === 'function') {
      callback(error, undefined);
    }

    throw error;
  });
};
/**
 * sendFeed
 * @param {FeedTemplateType} feedTemplate FeedTemplate Item
 * @param {CallbackType} [callback] callback function
 * @returns {Promise<SendResultType>}
 */


exports.sendList = sendList;

const sendFeed = (feedTemplate, callback) => {
  return KakaoShareLink.sendFeed(feedTemplate).then(result => {
    if (callback && typeof callback === 'function') {
      callback(undefined, result);
    }

    return result;
  }).catch(error => {
    if (callback && typeof callback === 'function') {
      callback(error, undefined);
    }

    throw error;
  });
};
/**
 * sendText
 * @param {TextTemplateType} textTemplate TextTemplate Item
 * @param {CallbackType} [callback] callback function
 * @returns {Promise<SendResultType>}
 */


exports.sendFeed = sendFeed;

const sendText = (textTemplate, callback) => {
  return KakaoShareLink.sendText(textTemplate).then(result => {
    if (callback && typeof callback === 'function') {
      callback(undefined, result);
    }

    return result;
  }).catch(error => {
    if (callback && typeof callback === 'function') {
      callback(error, undefined);
    }

    throw error;
  });
};
/**
 * sendLocation
 * @param {LocationTemplateType} locationTemplate LocationTemplate Item
 * @param {CallbackType} [callback] callback function
 * @returns {Promise<SendResultType>}
 */


exports.sendText = sendText;

const sendLocation = (locationTemplate, callback) => {
  return KakaoShareLink.sendLocation(locationTemplate).then(result => {
    if (callback && typeof callback === 'function') {
      callback(undefined, result);
    }

    return result;
  }).catch(error => {
    if (callback && typeof callback === 'function') {
      callback(error, undefined);
    }

    throw error;
  });
};
/**
 * sendCustom
 * @param {CustomTemplateType} customTemplate CustomTemplate Item
 * @param {CallbackType} [callback] callback function
 * @returns {Promise<SendResultType>}
 */


exports.sendLocation = sendLocation;

const sendCustom = (customTemplate, callback) => {
  return KakaoShareLink.sendCustom(customTemplate).then(result => {
    if (callback && typeof callback === 'function') {
      callback(undefined, result);
    }

    return result;
  }).catch(error => {
    if (callback && typeof callback === 'function') {
      callback(error, undefined);
    }

    throw error;
  });
};

exports.sendCustom = sendCustom;
var _default = KakaoShareLink;
exports.default = _default;
//# sourceMappingURL=index.js.map