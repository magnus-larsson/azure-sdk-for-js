/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/groupUserMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a GroupUser. */
export class GroupUser {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a GroupUser.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of the members of the group, specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupUserListResponse>
   */
  list(resourceGroupName: string, serviceName: string, groupId: string, options?: Models.GroupUserListOptionalParams): Promise<Models.GroupUserListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, groupId: string, callback: msRest.ServiceCallback<Models.UserCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serviceName: string, groupId: string, options: Models.GroupUserListOptionalParams, callback: msRest.ServiceCallback<Models.UserCollection>): void;
  list(resourceGroupName: string, serviceName: string, groupId: string, options?: Models.GroupUserListOptionalParams | msRest.ServiceCallback<Models.UserCollection>, callback?: msRest.ServiceCallback<Models.UserCollection>): Promise<Models.GroupUserListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        groupId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.GroupUserListResponse>;
  }

  /**
   * Checks that user entity specified by identifier is associated with the group entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupUserCheckEntityExistsResponse>
   */
  checkEntityExists(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options?: msRest.RequestOptionsBase): Promise<Models.GroupUserCheckEntityExistsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  checkEntityExists(resourceGroupName: string, serviceName: string, groupId: string, uid: string, callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkEntityExists(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  checkEntityExists(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.GroupUserCheckEntityExistsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        groupId,
        uid,
        options
      },
      checkEntityExistsOperationSpec,
      callback) as Promise<Models.GroupUserCheckEntityExistsResponse>;
  }

  /**
   * Adds a user to the specified group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupUserCreateResponse>
   */
  create(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options?: msRest.RequestOptionsBase): Promise<Models.GroupUserCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  create(resourceGroupName: string, serviceName: string, groupId: string, uid: string, callback: msRest.ServiceCallback<Models.UserContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserContract>): void;
  create(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserContract>, callback?: msRest.ServiceCallback<Models.UserContract>): Promise<Models.GroupUserCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        groupId,
        uid,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.GroupUserCreateResponse>;
  }

  /**
   * Remove existing user from existing group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, groupId: string, uid: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param uid User identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, groupId: string, uid: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        groupId,
        uid,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of the members of the group, specified by its identifier.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GroupUserListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GroupUserListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UserCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UserCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.UserCollection>, callback?: msRest.ServiceCallback<Models.UserCollection>): Promise<Models.GroupUserListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.GroupUserListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.groupId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter0,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UserCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const checkEntityExistsOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users/{uid}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.groupId,
    Parameters.uid,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users/{uid}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.groupId,
    Parameters.uid,
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
      bodyMapper: Mappers.UserContract
    },
    201: {
      bodyMapper: Mappers.UserContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users/{uid}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.groupId,
    Parameters.uid,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.UserCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
