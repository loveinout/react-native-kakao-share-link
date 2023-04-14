import { NativeModules } from 'react-native';
const {
  KakaoShareLink
} = NativeModules;
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
export const sendCommerce = (commerceTemplate, callback) => {
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

export const sendList = (listTemplate, callback) => {
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

export const sendFeed = (feedTemplate, callback) => {
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

export const sendText = (textTemplate, callback) => {
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

export const sendLocation = (locationTemplate, callback) => {
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

export const sendCustom = (customTemplate, callback) => {
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
export default KakaoShareLink;
//# sourceMappingURL=index.js.map