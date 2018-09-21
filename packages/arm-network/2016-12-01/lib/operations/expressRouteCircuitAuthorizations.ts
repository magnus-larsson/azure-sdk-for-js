/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/expressRouteCircuitAuthorizationsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCircuitAuthorizations. */
export class ExpressRouteCircuitAuthorizations {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCircuitAuthorizations.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified authorization from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} authorizationName The name of the authorization.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, circuitName, authorizationName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified authorization from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} authorizationName The name of the authorization.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, circuitName: string, authorizationName: string): Promise<Models.ExpressRouteCircuitAuthorizationsGetResponse>;
  get(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorizationsGetResponse>;
  get(resourceGroupName: string, circuitName: string, authorizationName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
  get(resourceGroupName: string, circuitName: string, authorizationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): void;
  get(resourceGroupName: string, circuitName: string, authorizationName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitAuthorization>): Promise<Models.ExpressRouteCircuitAuthorizationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        authorizationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitAuthorizationsGetResponse>;
  }


  /**
   * Creates or updates an authorization in the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} authorizationName The name of the authorization.
   *
   * @param {ExpressRouteCircuitAuthorization} authorizationParameters Parameters supplied to the
   * create or update express route circuit authorization operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, circuitName, authorizationName, authorizationParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse>;
  }

  /**
   * Gets all authorizations in an express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the circuit.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, circuitName: string): Promise<Models.ExpressRouteCircuitAuthorizationsListResponse>;
  list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorizationsListResponse>;
  list(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
  list(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
  list(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AuthorizationListResult>): Promise<Models.ExpressRouteCircuitAuthorizationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitAuthorizationsListResponse>;
  }

  /**
   * Deletes the specified authorization from the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} authorizationName The name of the authorization.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, circuitName: string, authorizationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        authorizationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates an authorization in the specified express route circuit.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} circuitName The name of the express route circuit.
   *
   * @param {string} authorizationName The name of the authorization.
   *
   * @param {ExpressRouteCircuitAuthorization} authorizationParameters Parameters supplied to the
   * create or update express route circuit authorization operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: Models.ExpressRouteCircuitAuthorization, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        authorizationName,
        authorizationParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all authorizations in an express route circuit.
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
  listNext(nextPageLink: string): Promise<Models.ExpressRouteCircuitAuthorizationsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitAuthorizationsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AuthorizationListResult>): Promise<Models.ExpressRouteCircuitAuthorizationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitAuthorizationsListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.authorizationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitAuthorization
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.authorizationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/authorizations/{authorizationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.authorizationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "authorizationParameters",
    mapper: {
      ...Mappers.ExpressRouteCircuitAuthorization,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuitAuthorization
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuitAuthorization
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.AuthorizationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
