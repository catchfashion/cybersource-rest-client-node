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
    define(['ApiClient', 'model/Ptsv2payoutsClientReferenceInformation', 'model/Riskv1authenticationexemptionsAcquirerInformation', 'model/Riskv1authenticationexemptionsDeviceInformation', 'model/Riskv1authenticationexemptionsMerchantInformation', 'model/Riskv1authenticationexemptionsOrderInformation', 'model/Riskv1authenticationexemptionsPaymentInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2payoutsClientReferenceInformation'), require('./Riskv1authenticationexemptionsAcquirerInformation'), require('./Riskv1authenticationexemptionsDeviceInformation'), require('./Riskv1authenticationexemptionsMerchantInformation'), require('./Riskv1authenticationexemptionsOrderInformation'), require('./Riskv1authenticationexemptionsPaymentInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.AuthenticationExemptionsRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2payoutsClientReferenceInformation, root.CyberSource.Riskv1authenticationexemptionsAcquirerInformation, root.CyberSource.Riskv1authenticationexemptionsDeviceInformation, root.CyberSource.Riskv1authenticationexemptionsMerchantInformation, root.CyberSource.Riskv1authenticationexemptionsOrderInformation, root.CyberSource.Riskv1authenticationexemptionsPaymentInformation);
  }
}(this, function(ApiClient, Ptsv2payoutsClientReferenceInformation, Riskv1authenticationexemptionsAcquirerInformation, Riskv1authenticationexemptionsDeviceInformation, Riskv1authenticationexemptionsMerchantInformation, Riskv1authenticationexemptionsOrderInformation, Riskv1authenticationexemptionsPaymentInformation) {
  'use strict';




  /**
   * The AuthenticationExemptionsRequest model module.
   * @module model/AuthenticationExemptionsRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>AuthenticationExemptionsRequest</code>.
   * @alias module:model/AuthenticationExemptionsRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AuthenticationExemptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationExemptionsRequest} obj Optional instance to populate.
   * @return {module:model/AuthenticationExemptionsRequest} The populated <code>AuthenticationExemptionsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2payoutsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Riskv1authenticationexemptionsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('paymentInformation')) {
        obj['paymentInformation'] = Riskv1authenticationexemptionsPaymentInformation.constructFromObject(data['paymentInformation']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = Riskv1authenticationexemptionsDeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('merchantInformation')) {
        obj['merchantInformation'] = Riskv1authenticationexemptionsMerchantInformation.constructFromObject(data['merchantInformation']);
      }
      if (data.hasOwnProperty('acquirerInformation')) {
        obj['acquirerInformation'] = Riskv1authenticationexemptionsAcquirerInformation.constructFromObject(data['acquirerInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2payoutsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationexemptionsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationexemptionsPaymentInformation} paymentInformation
   */
  exports.prototype['paymentInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationexemptionsDeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationexemptionsMerchantInformation} merchantInformation
   */
  exports.prototype['merchantInformation'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationexemptionsAcquirerInformation} acquirerInformation
   */
  exports.prototype['acquirerInformation'] = undefined;



  return exports;
}));


