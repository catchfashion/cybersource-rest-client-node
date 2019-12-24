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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseErrorInformation', 'model/PtsV2PaymentsReversalsPost201ResponseLinks', 'model/RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformation', 'model/RiskV1AuthenticationExemptionsPost201ResponseRiskInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseErrorInformation'), require('./PtsV2PaymentsReversalsPost201ResponseLinks'), require('./RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformation'), require('./RiskV1AuthenticationExemptionsPost201ResponseRiskInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.RiskV1AuthenticationExemptionsPost201Response = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseErrorInformation, root.CyberSource.PtsV2PaymentsReversalsPost201ResponseLinks, root.CyberSource.RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformation, root.CyberSource.RiskV1AuthenticationExemptionsPost201ResponseRiskInformation);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseErrorInformation, PtsV2PaymentsReversalsPost201ResponseLinks, RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformation, RiskV1AuthenticationExemptionsPost201ResponseRiskInformation) {
  'use strict';




  /**
   * The RiskV1AuthenticationExemptionsPost201Response model module.
   * @module model/RiskV1AuthenticationExemptionsPost201Response
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RiskV1AuthenticationExemptionsPost201Response</code>.
   * @alias module:model/RiskV1AuthenticationExemptionsPost201Response
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>RiskV1AuthenticationExemptionsPost201Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskV1AuthenticationExemptionsPost201Response} obj Optional instance to populate.
   * @return {module:model/RiskV1AuthenticationExemptionsPost201Response} The populated <code>RiskV1AuthenticationExemptionsPost201Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = PtsV2PaymentsReversalsPost201ResponseLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('riskInformation')) {
        obj['riskInformation'] = RiskV1AuthenticationExemptionsPost201ResponseRiskInformation.constructFromObject(data['riskInformation']);
      }
      if (data.hasOwnProperty('consumerAuthenticationInformation')) {
        obj['consumerAuthenticationInformation'] = RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformation.constructFromObject(data['consumerAuthenticationInformation']);
      }
      if (data.hasOwnProperty('errorInformation')) {
        obj['errorInformation'] = PtsV2PaymentsPost201ResponseErrorInformation.constructFromObject(data['errorInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsReversalsPost201ResponseLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC. 
   * @member {String} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status for authentication-exemptions 201. Value is: - AUTHENTICATION_EXEMPTIONS_SUCCESSFUL 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/RiskV1AuthenticationExemptionsPost201ResponseRiskInformation} riskInformation
   */
  exports.prototype['riskInformation'] = undefined;
  /**
   * @member {module:model/RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformation} consumerAuthenticationInformation
   */
  exports.prototype['consumerAuthenticationInformation'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseErrorInformation} errorInformation
   */
  exports.prototype['errorInformation'] = undefined;



  return exports;
}));


