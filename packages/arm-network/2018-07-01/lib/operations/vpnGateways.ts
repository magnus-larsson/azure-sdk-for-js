/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/vpnGatewaysMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VpnGateways. */
export class VpnGateways {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VpnGateways.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the details of a virtual wan vpn gateway.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, gatewayName: string): Promise<Models.VpnGatewaysGetResponse>;
  get(resourceGroupName: string, gatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysGetResponse>;
  get(resourceGroupName: string, gatewayName: string, callback: msRest.ServiceCallback<Models.VpnGateway>): void;
  get(resourceGroupName: string, gatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VpnGateway>): void;
  get(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VpnGateway>): Promise<Models.VpnGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        gatewayName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VpnGatewaysGetResponse>;
  }


  /**
   * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {VpnGateway} vpnGatewayParameters Parameters supplied to create or Update a virtual wan
   * vpn gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: Models.VpnGateway, options?: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, gatewayName, vpnGatewayParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VpnGatewaysCreateOrUpdateResponse>;
  }


  /**
   * Updates virtual wan vpn gateway tags.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {TagsObject} vpnGatewayParameters Parameters supplied to update a virtual wan vpn gateway
   * tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateTags(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName, gatewayName, vpnGatewayParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VpnGatewaysUpdateTagsResponse>;
  }


  /**
   * Deletes a virtual wan vpn gateway.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, gatewayName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all the VpnGateways in a resource group.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByResourceGroup(resourceGroupName: string): Promise<Models.VpnGatewaysListByResourceGroupResponse>;
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysListByResourceGroupResponse>;
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): Promise<Models.VpnGatewaysListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.VpnGatewaysListByResourceGroupResponse>;
  }

  /**
   * Lists all the VpnGateways in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(): Promise<Models.VpnGatewaysListResponse>;
  list(options: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysListResponse>;
  list(callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): Promise<Models.VpnGatewaysListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VpnGatewaysListResponse>;
  }

  /**
   * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {VpnGateway} vpnGatewayParameters Parameters supplied to create or Update a virtual wan
   * vpn gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: Models.VpnGateway, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        vpnGatewayParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates virtual wan vpn gateway tags.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {TagsObject} vpnGatewayParameters Parameters supplied to update a virtual wan vpn gateway
   * tags.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginUpdateTags(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        vpnGatewayParameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Deletes a virtual wan vpn gateway.
   *
   * @param {string} resourceGroupName The resource group name of the VpnGateway.
   *
   * @param {string} gatewayName The name of the gateway.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, gatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        gatewayName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all the VpnGateways in a resource group.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByResourceGroupNext(nextPageLink: string): Promise<Models.VpnGatewaysListByResourceGroupNextResponse>;
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysListByResourceGroupNextResponse>;
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): Promise<Models.VpnGatewaysListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.VpnGatewaysListByResourceGroupNextResponse>;
  }

  /**
   * Lists all the VpnGateways in a subscription.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listNext(nextPageLink: string): Promise<Models.VpnGatewaysListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VpnGatewaysListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ListVpnGatewaysResult>): Promise<Models.VpnGatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VpnGatewaysListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnGateways",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "vpnGatewayParameters",
    mapper: {
      ...Mappers.VpnGateway,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    201: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "vpnGatewayParameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VpnGateway
    },
    201: {
      bodyMapper: Mappers.VpnGateway
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.gatewayName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
