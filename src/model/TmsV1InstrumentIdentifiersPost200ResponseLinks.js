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
    define(['ApiClient', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments', 'model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments'), require('./TmsV1InstrumentIdentifiersPost200ResponseLinksSelf'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseLinks = factory(root.CyberSource.ApiClient, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments, root.CyberSource.TmsV1InstrumentIdentifiersPost200ResponseLinksSelf);
  }
}(this, function(ApiClient, TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments, TmsV1InstrumentIdentifiersPost200ResponseLinksSelf) {
  'use strict';




  /**
   * The TmsV1InstrumentIdentifiersPost200ResponseLinks model module.
   * @module model/TmsV1InstrumentIdentifiersPost200ResponseLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsV1InstrumentIdentifiersPost200ResponseLinks</code>.
   * @alias module:model/TmsV1InstrumentIdentifiersPost200ResponseLinks
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TmsV1InstrumentIdentifiersPost200ResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinks} obj Optional instance to populate.
   * @return {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinks} The populated <code>TmsV1InstrumentIdentifiersPost200ResponseLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = TmsV1InstrumentIdentifiersPost200ResponseLinksSelf.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('paymentInstruments')) {
        obj['paymentInstruments'] = TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments.constructFromObject(data['paymentInstruments']);
      }
      if (data.hasOwnProperty('ancestor')) {
        obj['ancestor'] = TmsV1InstrumentIdentifiersPost200ResponseLinksSelf.constructFromObject(data['ancestor']);
      }
      if (data.hasOwnProperty('successor')) {
        obj['successor'] = TmsV1InstrumentIdentifiersPost200ResponseLinksSelf.constructFromObject(data['successor']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksPaymentInstruments} paymentInstruments
   */
  exports.prototype['paymentInstruments'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf} ancestor
   */
  exports.prototype['ancestor'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPost200ResponseLinksSelf} successor
   */
  exports.prototype['successor'] = undefined;



  return exports;
}));


