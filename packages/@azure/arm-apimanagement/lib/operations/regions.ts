/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/regionsMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a Regions. */
export class Regions {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a Regions.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all azure regions in which the service exists.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegionsListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.RegionsListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.RegionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegionListResult>): void;
  listByService(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegionListResult>, callback?: msRest.ServiceCallback<Models.RegionListResult>): Promise<Models.RegionsListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.RegionsListByServiceResponse>;
  }

  /**
   * Lists all azure regions in which the service exists.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RegionsListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RegionsListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RegionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RegionListResult>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RegionListResult>, callback?: msRest.ServiceCallback<Models.RegionListResult>): Promise<Models.RegionsListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.RegionsListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/regions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RegionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RegionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};