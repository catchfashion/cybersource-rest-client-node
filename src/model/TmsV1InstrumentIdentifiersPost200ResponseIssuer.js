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
    root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseIssuer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TmsV1InstrumentIdentifiersPost200ResponseIssuer model module.
   * @module model/TmsV1InstrumentIdentifiersPost200ResponseIssuer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsV1InstrumentIdentifiersPost200ResponseIssuer</code>.
   * @alias module:model/TmsV1InstrumentIdentifiersPost200ResponseIssuer
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TmsV1InstrumentIdentifiersPost200ResponseIssuer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsV1InstrumentIdentifiersPost200ResponseIssuer} obj Optional instance to populate.
   * @return {module:model/TmsV1InstrumentIdentifiersPost200ResponseIssuer} The populated <code>TmsV1InstrumentIdentifiersPost200ResponseIssuer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('paymentAccountReference')) {
        obj['paymentAccountReference'] = ApiClient.convertToType(data['paymentAccountReference'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier associated with a specific cardholder PAN
   * @member {String} paymentAccountReference
   */
  exports.prototype['paymentAccountReference'] = undefined;



  return exports;
}));


