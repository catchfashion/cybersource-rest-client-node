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
    define(['ApiClient', 'model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification = factory(root.CyberSource.ApiClient, root.CyberSource.TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy);
  }
}(this, function(ApiClient, TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy) {
  'use strict';




  /**
   * The TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification model module.
   * @module model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification</code>.
   * @alias module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification} obj Optional instance to populate.
   * @return {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification} The populated <code>TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationPersonalIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('issuedBy')) {
        obj['issuedBy'] = TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy.constructFromObject(data['issuedBy']);
      }
    }
    return obj;
  }

  /**
   * Customer's identification number.  **Important**: Contact your TeleCheck representative to learn whether this field is required or optional. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Type of personal identification.  **Important**: Contact your TeleCheck representative to learn whether this field is required or optional.  Valid values: - driver license 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformationIssuedBy} issuedBy
   */
  exports.prototype['issuedBy'] = undefined;



  return exports;
}));


