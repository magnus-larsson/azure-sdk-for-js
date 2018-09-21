/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/packetCapturesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a PacketCaptures. */
export class PacketCaptures {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a PacketCaptures.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Create and start a packet capture on the specified VM.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {PacketCapture} parameters Parameters that define the create packet capture operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  create(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options?: msRest.RequestOptionsBase): Promise<Models.PacketCapturesCreateResponse> {
    return this.beginCreate(resourceGroupName, networkWatcherName, packetCaptureName, parameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PacketCapturesCreateResponse>;
  }

  /**
   * Gets a packet capture session by name.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<Models.PacketCapturesGetResponse>;
  get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<Models.PacketCapturesGetResponse>;
  get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
  get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
  get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PacketCaptureResult>): Promise<Models.PacketCapturesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        packetCaptureName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PacketCapturesGetResponse>;
  }


  /**
   * Deletes the specified packet capture session.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, networkWatcherName, packetCaptureName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }


  /**
   * Stops a specified packet capture session.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  stop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName, networkWatcherName, packetCaptureName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }


  /**
   * Query the status of a running packet capture session.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the Network Watcher resource.
   *
   * @param {string} packetCaptureName The name given to the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<Models.PacketCapturesGetStatusResponse> {
    return this.beginGetStatus(resourceGroupName, networkWatcherName, packetCaptureName, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PacketCapturesGetStatusResponse>;
  }

  /**
   * Lists all packet capture sessions within the specified resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the Network Watcher resource.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, networkWatcherName: string): Promise<Models.PacketCapturesListResponse>;
  list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase): Promise<Models.PacketCapturesListResponse>;
  list(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<Models.PacketCaptureListResult>): void;
  list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureListResult>): void;
  list(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PacketCaptureListResult>): Promise<Models.PacketCapturesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PacketCapturesListResponse>;
  }

  /**
   * Create and start a packet capture on the specified VM.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {PacketCapture} parameters Parameters that define the create packet capture operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreate(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkWatcherName,
        packetCaptureName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified packet capture session.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkWatcherName,
        packetCaptureName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Stops a specified packet capture session.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the network watcher.
   *
   * @param {string} packetCaptureName The name of the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginStop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkWatcherName,
        packetCaptureName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Query the status of a running packet capture session.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkWatcherName The name of the Network Watcher resource.
   *
   * @param {string} packetCaptureName The name given to the packet capture session.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginGetStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkWatcherName,
        packetCaptureName,
        options
      },
      beginGetStatusOperationSpec,
      options);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName,
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
      bodyMapper: Mappers.PacketCaptureResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
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
      bodyMapper: Mappers.PacketCaptureListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName,
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
      ...Mappers.PacketCapture,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.PacketCaptureResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/stop",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName,
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
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginGetStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/packetCaptures/{packetCaptureName}/queryStatus",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.packetCaptureName,
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
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    202: {
      bodyMapper: Mappers.PacketCaptureQueryStatusResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
