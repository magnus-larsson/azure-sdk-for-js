/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { NetworkManagementClientContext } from "./networkManagementClientContext";


class NetworkManagementClient extends NetworkManagementClientContext {
  // Operation groups
  networkInterfaces: operations.NetworkInterfaces;
  applicationGateways: operations.ApplicationGateways;
  expressRouteCircuitAuthorizations: operations.ExpressRouteCircuitAuthorizations;
  expressRouteCircuitPeerings: operations.ExpressRouteCircuitPeerings;
  expressRouteCircuits: operations.ExpressRouteCircuits;
  expressRouteServiceProviders: operations.ExpressRouteServiceProviders;
  loadBalancers: operations.LoadBalancers;
  networkSecurityGroups: operations.NetworkSecurityGroups;
  securityRules: operations.SecurityRules;
  networkWatchers: operations.NetworkWatchers;
  packetCaptures: operations.PacketCaptures;
  publicIPAddresses: operations.PublicIPAddresses;
  routeFilters: operations.RouteFilters;
  routeFilterRules: operations.RouteFilterRules;
  routeTables: operations.RouteTables;
  routes: operations.Routes;
  bgpServiceCommunities: operations.BgpServiceCommunities;
  usages: operations.Usages;
  virtualNetworks: operations.VirtualNetworks;
  subnets: operations.Subnets;
  virtualNetworkPeerings: operations.VirtualNetworkPeerings;
  virtualNetworkGateways: operations.VirtualNetworkGateways;
  virtualNetworkGatewayConnections: operations.VirtualNetworkGatewayConnections;
  localNetworkGateways: operations.LocalNetworkGateways;

  /**
   * @class
   * Initializes a new instance of the NetworkManagementClient class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} subscriptionId - The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, subscriptionId, baseUri, options);
    this.networkInterfaces = new operations.NetworkInterfaces(this);
    this.applicationGateways = new operations.ApplicationGateways(this);
    this.expressRouteCircuitAuthorizations = new operations.ExpressRouteCircuitAuthorizations(this);
    this.expressRouteCircuitPeerings = new operations.ExpressRouteCircuitPeerings(this);
    this.expressRouteCircuits = new operations.ExpressRouteCircuits(this);
    this.expressRouteServiceProviders = new operations.ExpressRouteServiceProviders(this);
    this.loadBalancers = new operations.LoadBalancers(this);
    this.networkSecurityGroups = new operations.NetworkSecurityGroups(this);
    this.securityRules = new operations.SecurityRules(this);
    this.networkWatchers = new operations.NetworkWatchers(this);
    this.packetCaptures = new operations.PacketCaptures(this);
    this.publicIPAddresses = new operations.PublicIPAddresses(this);
    this.routeFilters = new operations.RouteFilters(this);
    this.routeFilterRules = new operations.RouteFilterRules(this);
    this.routeTables = new operations.RouteTables(this);
    this.routes = new operations.Routes(this);
    this.bgpServiceCommunities = new operations.BgpServiceCommunities(this);
    this.usages = new operations.Usages(this);
    this.virtualNetworks = new operations.VirtualNetworks(this);
    this.subnets = new operations.Subnets(this);
    this.virtualNetworkPeerings = new operations.VirtualNetworkPeerings(this);
    this.virtualNetworkGateways = new operations.VirtualNetworkGateways(this);
    this.virtualNetworkGatewayConnections = new operations.VirtualNetworkGatewayConnections(this);
    this.localNetworkGateways = new operations.LocalNetworkGateways(this);
  }
  // methods on the client.

  /**
   * Checks whether a domain name in the cloudapp.net zone is available for use.
   *
   * @param {string} location The location of the domain name.
   *
   * @param {NetworkManagementClientCheckDnsNameAvailabilityOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  checkDnsNameAvailability(location: string): Promise<Models.CheckDnsNameAvailabilityResponse>;
  checkDnsNameAvailability(location: string, options: Models.NetworkManagementClientCheckDnsNameAvailabilityOptionalParams): Promise<Models.CheckDnsNameAvailabilityResponse>;
  checkDnsNameAvailability(location: string, callback: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): void;
  checkDnsNameAvailability(location: string, options: Models.NetworkManagementClientCheckDnsNameAvailabilityOptionalParams, callback: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): void;
  checkDnsNameAvailability(location: string, options?: Models.NetworkManagementClientCheckDnsNameAvailabilityOptionalParams, callback?: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): Promise<Models.CheckDnsNameAvailabilityResponse> {
    return this.sendOperationRequest(
      {
        location,
        options
      },
      checkDnsNameAvailabilityOperationSpec,
      callback) as Promise<Models.CheckDnsNameAvailabilityResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkDnsNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/CheckDnsNameAvailability",
  urlParameters: [
    Parameters.location0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.domainNameLabel,
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DnsNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

export {
  NetworkManagementClient,
  NetworkManagementClientContext,
  Models as NetworkManagementModels,
  Mappers as NetworkManagementMappers
};
export * from "./operations";
