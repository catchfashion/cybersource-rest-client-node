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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseErrorInformationDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseErrorInformationDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformationDetails);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseErrorInformationDetails) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseErrorInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseErrorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseErrorInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseErrorInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseErrorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseErrorInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseErrorInformation} The populated <code>PtsV2PaymentsPost201ResponseErrorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [PtsV2PaymentsPost201ResponseErrorInformationDetails]);
      }
    }
    return obj;
  }

  /**
   * The reason of the status.  Possible values:  - AVS_FAILED  - CONTACT_PROCESSOR  - EXPIRED_CARD  - PROCESSOR_DECLINED  - INSUFFICIENT_FUND  - STOLEN_LOST_CARD  - ISSUER_UNAVAILABLE  - UNAUTHORIZED_CARD  - CVN_NOT_MATCH  - EXCEEDS_CREDIT_LIMIT  - INVALID_CVN  - DECLINED_CHECK  - BLACKLISTED_CUSTOMER  - SUSPENDED_ACCOUNT  - PAYMENT_REFUSED  - CV_FAILED  - INVALID_ACCOUNT  - GENERAL_DECLINE  - INVALID_MERCHANT_CONFIGURATION - DECISION_PROFILE_REJECT - SCORE_EXCEEDS_THRESHOLD
   * @member {module:model/PtsV2PaymentsPost201ResponseErrorInformation.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The detail message related to the status and reason listed above.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/PtsV2PaymentsPost201ResponseErrorInformationDetails>} details
   */
  exports.prototype['details'] = undefined;


  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "AVS_FAILED"
     * @const
     */
    "AVS_FAILED": "AVS_FAILED",
    /**
     * value: "CONTACT_PROCESSOR"
     * @const
     */
    "CONTACT_PROCESSOR": "CONTACT_PROCESSOR",
    /**
     * value: "CV_FAILED"
     * @const
     */
    "CV_FAILED": "CV_FAILED",
    /**
     * value: "EXPIRED_CARD"
     * @const
     */
    "EXPIRED_CARD": "EXPIRED_CARD",
    /**
     * value: "PROCESSOR_DECLINED"
     * @const
     */
    "PROCESSOR_DECLINED": "PROCESSOR_DECLINED",
    /**
     * value: "INSUFFICIENT_FUND"
     * @const
     */
    "INSUFFICIENT_FUND": "INSUFFICIENT_FUND",
    /**
     * value: "STOLEN_LOST_CARD"
     * @const
     */
    "STOLEN_LOST_CARD": "STOLEN_LOST_CARD",
    /**
     * value: "ISSUER_UNAVAILABLE"
     * @const
     */
    "ISSUER_UNAVAILABLE": "ISSUER_UNAVAILABLE",
    /**
     * value: "UNAUTHORIZED_CARD"
     * @const
     */
    "UNAUTHORIZED_CARD": "UNAUTHORIZED_CARD",
    /**
     * value: "CVN_NOT_MATCH"
     * @const
     */
    "CVN_NOT_MATCH": "CVN_NOT_MATCH",
    /**
     * value: "EXCEEDS_CREDIT_LIMIT"
     * @const
     */
    "EXCEEDS_CREDIT_LIMIT": "EXCEEDS_CREDIT_LIMIT",
    /**
     * value: "INVALID_CVN"
     * @const
     */
    "INVALID_CVN": "INVALID_CVN",
    /**
     * value: "PAYMENT_REFUSED"
     * @const
     */
    "PAYMENT_REFUSED": "PAYMENT_REFUSED",
    /**
     * value: "INVALID_ACCOUNT"
     * @const
     */
    "INVALID_ACCOUNT": "INVALID_ACCOUNT",
    /**
     * value: "GENERAL_DECLINE"
     * @const
     */
    "GENERAL_DECLINE": "GENERAL_DECLINE",
    /**
     * value: "DECISION_PROFILE_REJECT"
     * @const
     */
    "DECISION_PROFILE_REJECT": "DECISION_PROFILE_REJECT",
    /**
     * value: "SCORE_EXCEEDS_THRESHOLD"
     * @const
     */
    "SCORE_EXCEEDS_THRESHOLD": "SCORE_EXCEEDS_THRESHOLD"  };


  return exports;
}));


