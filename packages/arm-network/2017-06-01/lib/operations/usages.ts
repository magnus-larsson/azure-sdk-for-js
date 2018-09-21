/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/usagesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a Usages. */
export class Usages {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a Usages.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists compute usages for a subscription.
   *
   * @param {string} location The location where resource usage is queried.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(location: string): Promise<Models.UsagesListResponse>;
  list(location: string, options: msRest.RequestOptionsBase): Promise<Models.UsagesListResponse>;
  list(location: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  list(location: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.UsagesListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsagesListResponse>;
  }

  /**
   * Lists compute usages for a subscription.
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
  listNext(nextPageLink: string): Promise<Models.UsagesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.UsagesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.UsagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsagesListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/usages",
  urlParameters: [
    Parameters.location1,
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
      bodyMapper: Mappers.UsagesListResult
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
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
