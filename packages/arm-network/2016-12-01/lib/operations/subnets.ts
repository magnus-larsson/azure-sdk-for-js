/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/subnetsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a Subnets. */
export class Subnets {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a Subnets.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified subnet.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} subnetName The name of the subnet.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, virtualNetworkName, subnetName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified subnet by virtual network and resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} subnetName The name of the subnet.
   *
   * @param {SubnetsGetOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, virtualNetworkName: string, subnetName: string): Promise<Models.SubnetsGetResponse>;
  get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: Models.SubnetsGetOptionalParams): Promise<Models.SubnetsGetResponse>;
  get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, callback: msRest.ServiceCallback<Models.Subnet>): void;
  get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: Models.SubnetsGetOptionalParams, callback: msRest.ServiceCallback<Models.Subnet>): void;
  get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: Models.SubnetsGetOptionalParams, callback?: msRest.ServiceCallback<Models.Subnet>): Promise<Models.SubnetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        subnetName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SubnetsGetResponse>;
  }


  /**
   * Creates or updates a subnet in the specified virtual network.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} subnetName The name of the subnet.
   *
   * @param {Subnet} subnetParameters Parameters supplied to the create or update subnet operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options?: msRest.RequestOptionsBase): Promise<Models.SubnetsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, virtualNetworkName, subnetName, subnetParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SubnetsCreateOrUpdateResponse>;
  }

  /**
   * Gets all subnets in a virtual network.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, virtualNetworkName: string): Promise<Models.SubnetsListResponse>;
  list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<Models.SubnetsListResponse>;
  list(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
  list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
  list(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SubnetListResult>): Promise<Models.SubnetsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualNetworkName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SubnetsListResponse>;
  }

  /**
   * Deletes the specified subnet.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} subnetName The name of the subnet.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkName,
        subnetName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a subnet in the specified virtual network.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} virtualNetworkName The name of the virtual network.
   *
   * @param {string} subnetName The name of the subnet.
   *
   * @param {Subnet} subnetParameters Parameters supplied to the create or update subnet operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualNetworkName,
        subnetName,
        subnetParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all subnets in a virtual network.
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
  listNext(nextPageLink: string): Promise<Models.SubnetsListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.SubnetsListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SubnetListResult>): Promise<Models.SubnetsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SubnetsListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subnetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Subnet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
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
      bodyMapper: Mappers.SubnetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subnetName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualNetworkName,
    Parameters.subnetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "subnetParameters",
    mapper: {
      ...Mappers.Subnet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Subnet
    },
    201: {
      bodyMapper: Mappers.Subnet
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
      bodyMapper: Mappers.SubnetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
