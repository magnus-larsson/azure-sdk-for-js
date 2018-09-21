/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/azureFirewallsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a AzureFirewalls. */
export class AzureFirewalls {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a AzureFirewalls.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified Azure Firewall.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} azureFirewallName The name of the Azure Firewall.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, azureFirewallName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified Azure Firewall.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} azureFirewallName The name of the Azure Firewall.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, azureFirewallName: string): Promise<Models.AzureFirewallsGetResponse>;
  get(resourceGroupName: string, azureFirewallName: string, options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsGetResponse>;
  get(resourceGroupName: string, azureFirewallName: string, callback: msRest.ServiceCallback<Models.AzureFirewall>): void;
  get(resourceGroupName: string, azureFirewallName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewall>): void;
  get(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewall>): Promise<Models.AzureFirewallsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureFirewallName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AzureFirewallsGetResponse>;
  }


  /**
   * Creates or updates the specified Azure Firewall.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} azureFirewallName The name of the Azure Firewall.
   *
   * @param {AzureFirewall} parameters Parameters supplied to the create or update Azure Firewall
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
  createOrUpdate(resourceGroupName: string, azureFirewallName: string, parameters: Models.AzureFirewall, options?: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, azureFirewallName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AzureFirewallsCreateOrUpdateResponse>;
  }

  /**
   * Lists all Azure Firewalls in a resource group.
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
  list(resourceGroupName: string): Promise<Models.AzureFirewallsListResponse>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListResponse>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AzureFirewallsListResponse>;
  }

  /**
   * Gets all the Azure Firewalls in a subscription.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listAll(): Promise<Models.AzureFirewallsListAllResponse>;
  listAll(options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListAllResponse>;
  listAll(callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.AzureFirewallsListAllResponse>;
  }

  /**
   * Deletes the specified Azure Firewall.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} azureFirewallName The name of the Azure Firewall.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, azureFirewallName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        azureFirewallName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified Azure Firewall.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} azureFirewallName The name of the Azure Firewall.
   *
   * @param {AzureFirewall} parameters Parameters supplied to the create or update Azure Firewall
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
  beginCreateOrUpdate(resourceGroupName: string, azureFirewallName: string, parameters: Models.AzureFirewall, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        azureFirewallName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all Azure Firewalls in a resource group.
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
  listNext(nextPageLink: string): Promise<Models.AzureFirewallsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AzureFirewallsListNextResponse>;
  }

  /**
   * Gets all the Azure Firewalls in a subscription.
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
  listAllNext(nextPageLink: string): Promise<Models.AzureFirewallsListAllNextResponse>;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.AzureFirewallsListAllNextResponse>;
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AzureFirewallListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AzureFirewallListResult>): Promise<Models.AzureFirewallsListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.AzureFirewallsListAllNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.azureFirewallName,
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
      bodyMapper: Mappers.AzureFirewall
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls",
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
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewalls",
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
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.azureFirewallName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.azureFirewallName,
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
      ...Mappers.AzureFirewall,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AzureFirewall
    },
    201: {
      bodyMapper: Mappers.AzureFirewall
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
      bodyMapper: Mappers.AzureFirewallListResult
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
      bodyMapper: Mappers.AzureFirewallListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
