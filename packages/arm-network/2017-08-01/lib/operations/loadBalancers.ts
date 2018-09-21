/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/loadBalancersMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancers. */
export class LoadBalancers {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancers.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified load balancer.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, loadBalancerName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified load balancer.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {LoadBalancersGetOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancersGetResponse>;
  get(resourceGroupName: string, loadBalancerName: string, options: Models.LoadBalancersGetOptionalParams): Promise<Models.LoadBalancersGetResponse>;
  get(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
  get(resourceGroupName: string, loadBalancerName: string, options: Models.LoadBalancersGetOptionalParams, callback: msRest.ServiceCallback<Models.LoadBalancer>): void;
  get(resourceGroupName: string, loadBalancerName: string, options?: Models.LoadBalancersGetOptionalParams, callback?: msRest.ServiceCallback<Models.LoadBalancer>): Promise<Models.LoadBalancersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoadBalancersGetResponse>;
  }


  /**
   * Creates or updates a load balancer.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {LoadBalancer} parameters Parameters supplied to the create or update load balancer
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, loadBalancerName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LoadBalancersCreateOrUpdateResponse>;
  }

  /**
   * Gets all the load balancers in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(): Promise<Models.LoadBalancersListAllResponse>;
  listAll(options: msRest.RequestOptionsBase): Promise<Models.LoadBalancersListAllResponse>;
  listAll(callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  listAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerListResult>): Promise<Models.LoadBalancersListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.LoadBalancersListAllResponse>;
  }

  /**
   * Gets all the load balancers in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string): Promise<Models.LoadBalancersListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancersListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerListResult>): Promise<Models.LoadBalancersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancersListResponse>;
  }

  /**
   * Deletes the specified load balancer.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a load balancer.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {LoadBalancer} parameters Parameters supplied to the create or update load balancer
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: Models.LoadBalancer, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        loadBalancerName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all the load balancers in a subscription.
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
  listAllNext(nextPageLink: string): Promise<Models.LoadBalancersListAllNextResponse>;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancersListAllNextResponse>;
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerListResult>): Promise<Models.LoadBalancersListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.LoadBalancersListAllNextResponse>;
  }

  /**
   * Gets all the load balancers in a resource group.
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
  listNext(nextPageLink: string): Promise<Models.LoadBalancersListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancersListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerListResult>): Promise<Models.LoadBalancersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancersListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancer
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/loadBalancers",
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
      bodyMapper: Mappers.LoadBalancerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.LoadBalancerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.LoadBalancer,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancer
    },
    201: {
      bodyMapper: Mappers.LoadBalancer
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.LoadBalancerListResult
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
      bodyMapper: Mappers.LoadBalancerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
