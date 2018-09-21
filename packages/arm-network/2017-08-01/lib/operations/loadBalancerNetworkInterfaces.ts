/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/loadBalancerNetworkInterfacesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancerNetworkInterfaces. */
export class LoadBalancerNetworkInterfaces {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancerNetworkInterfaces.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets associated load balancer network interfaces.
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
  list(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancerNetworkInterfacesListResponse>;
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerNetworkInterfacesListResponse>;
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): Promise<Models.LoadBalancerNetworkInterfacesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancerNetworkInterfacesListResponse>;
  }

  /**
   * Gets associated load balancer network interfaces.
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
  listNext(nextPageLink: string): Promise<Models.LoadBalancerNetworkInterfacesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerNetworkInterfacesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): Promise<Models.LoadBalancerNetworkInterfacesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancerNetworkInterfacesListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/networkInterfaces",
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
    200: {
      bodyMapper: Mappers.NetworkInterfaceListResult
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
      bodyMapper: Mappers.NetworkInterfaceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
