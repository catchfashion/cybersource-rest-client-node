/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount model module.
   * @module model/Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount</code>.
   * @alias module:model/Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount} The populated <code>Riskv1authenticationsRiskInformationBuyerHistoryCustomerAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastChangeDate')) {
        obj['lastChangeDate'] = ApiClient.convertToType(data['lastChangeDate'], 'String');
      }
      if (data.hasOwnProperty('creationHistory')) {
        obj['creationHistory'] = ApiClient.convertToType(data['creationHistory'], 'String');
      }
      if (data.hasOwnProperty('modificationHistory')) {
        obj['modificationHistory'] = ApiClient.convertToType(data['modificationHistory'], 'String');
      }
      if (data.hasOwnProperty('passwordHistory')) {
        obj['passwordHistory'] = ApiClient.convertToType(data['passwordHistory'], 'String');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'String');
      }
      if (data.hasOwnProperty('passwordChangeDate')) {
        obj['passwordChangeDate'] = ApiClient.convertToType(data['passwordChangeDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Date the cardholder’s account was last changed. This includes changes to the billing or shipping address, new payment accounts or new users added. Recommended for Discover ProtectBuy. 
   * @member {String} lastChangeDate
   */
  exports.prototype['lastChangeDate'] = undefined;
  /**
   * The values from the enum can be: - GUEST - NEW_ACCOUNT - EXISTING_ACCOUNT 
   * @member {String} creationHistory
   */
  exports.prototype['creationHistory'] = undefined;
  /**
   * This field is applicable only in case of EXISTING_ACCOUNT in creationHistory. Possible values: - ACCOUNT_UPDATED_NOW - ACCOUNT_UPDATED_PAST 
   * @member {String} modificationHistory
   */
  exports.prototype['modificationHistory'] = undefined;
  /**
   * This only applies for EXISTING_ACCOUNT in creationHistory. The values from the enum can be: - PASSWORD_CHANGED_NOW - PASSWORD_CHANGED_PAST - PASSWORD_NEVER_CHANGED 
   * @member {String} passwordHistory
   */
  exports.prototype['passwordHistory'] = undefined;
  /**
   * Date the cardholder opened the account. Recommended for Discover ProtectBuy. This only applies for EXISTING_ACCOUNT in creationHistory. 
   * @member {String} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * Date the cardholder last changed or reset password on account. Recommended for Discover ProtectBuy. This only applies for PASSWORD_CHANGED_PAST in passwordHistory. 
   * @member {String} passwordChangeDate
   */
  exports.prototype['passwordChangeDate'] = undefined;



  return exports;
}));


