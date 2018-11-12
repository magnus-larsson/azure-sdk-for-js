/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  NetworkWatcher,
  Resource,
  BaseResource,
  ErrorResponse,
  ErrorDetails,
  TagsObject,
  NetworkWatcherListResult,
  TopologyParameters,
  SubResource,
  Topology,
  TopologyResource,
  TopologyAssociation,
  VerificationIPFlowParameters,
  VerificationIPFlowResult,
  NextHopParameters,
  NextHopResult,
  SecurityGroupViewParameters,
  SecurityGroupViewResult,
  SecurityGroupNetworkInterface,
  SecurityRuleAssociations,
  NetworkInterfaceAssociation,
  SecurityRule,
  ApplicationSecurityGroup,
  SubnetAssociation,
  EffectiveNetworkSecurityRule,
  TroubleshootingParameters,
  TroubleshootingResult,
  TroubleshootingDetails,
  TroubleshootingRecommendedActions,
  QueryTroubleshootingParameters,
  FlowLogInformation,
  RetentionPolicyParameters,
  TrafficAnalyticsProperties,
  TrafficAnalyticsConfigurationProperties,
  FlowLogStatusParameters,
  ConnectivityParameters,
  ConnectivitySource,
  ConnectivityDestination,
  ProtocolConfiguration,
  HTTPConfiguration,
  HTTPHeader,
  ConnectivityInformation,
  ConnectivityHop,
  ConnectivityIssue,
  AzureReachabilityReportParameters,
  AzureReachabilityReportLocation,
  AzureReachabilityReport,
  AzureReachabilityReportItem,
  AzureReachabilityReportLatencyInfo,
  AvailableProvidersListParameters,
  AvailableProvidersList,
  AvailableProvidersListCountry,
  AvailableProvidersListState,
  AvailableProvidersListCity,
  NetworkConfigurationDiagnosticParameters,
  NetworkConfigurationDiagnosticProfile,
  NetworkConfigurationDiagnosticResponse,
  NetworkConfigurationDiagnosticResult,
  NetworkSecurityGroupResult,
  EvaluatedNetworkSecurityGroup,
  MatchedRule,
  NetworkSecurityRulesEvaluationResult,
  NetworkInterfaceTapConfiguration,
  VirtualNetworkTap,
  NetworkInterfaceIPConfiguration,
  ApplicationGatewayBackendAddressPool,
  ApplicationGatewayBackendAddress,
  BackendAddressPool,
  InboundNatRule,
  Subnet,
  NetworkSecurityGroup,
  NetworkInterface,
  InterfaceEndpoint,
  EndpointService,
  NetworkInterfaceDnsSettings,
  RouteTable,
  Route,
  ServiceEndpointPropertiesFormat,
  ServiceEndpointPolicy,
  ServiceEndpointPolicyDefinition,
  IPConfiguration,
  PublicIPAddress,
  PublicIPAddressSku,
  PublicIPAddressDnsSettings,
  IpTag,
  IPConfigurationProfile,
  ResourceNavigationLink,
  ServiceAssociationLink,
  Delegation,
  FrontendIPConfiguration,
  ApplicationGatewayBackendHttpSettings,
  ApplicationGatewayConnectionDraining,
  ApplicationGatewayIPConfiguration,
  ApplicationGatewayAuthenticationCertificate,
  ApplicationGatewayTrustedRootCertificate,
  ApplicationGatewaySslCertificate,
  ApplicationGatewayFrontendIPConfiguration,
  ApplicationGatewayFrontendPort,
  ApplicationGatewayHttpListener,
  ApplicationGatewayCustomError,
  ApplicationGatewayPathRule,
  ApplicationGatewayProbe,
  ApplicationGatewayProbeHealthResponseMatch,
  ApplicationGatewayRequestRoutingRule,
  ApplicationGatewayRedirectConfiguration,
  ApplicationGatewayUrlPathMap,
  ApplicationGateway,
  ApplicationGatewaySku,
  ApplicationGatewaySslPolicy,
  ApplicationGatewayWebApplicationFirewallConfiguration,
  ApplicationGatewayFirewallDisabledRuleGroup,
  ApplicationGatewayFirewallExclusion,
  ApplicationGatewayAutoscaleConfiguration,
  ApplicationGatewayFirewallRuleSet,
  ApplicationGatewayFirewallRuleGroup,
  ApplicationGatewayFirewallRule,
  ApplicationGatewayAvailableSslOptions,
  ApplicationGatewaySslPredefinedPolicy,
  AzureFirewallIPConfiguration,
  AzureFirewallApplicationRuleCollection,
  AzureFirewallRCAction,
  AzureFirewallApplicationRule,
  AzureFirewallApplicationRuleProtocol,
  AzureFirewallNatRuleCollection,
  AzureFirewallNatRCAction,
  AzureFirewallNatRule,
  AzureFirewallNetworkRuleCollection,
  AzureFirewallNetworkRule,
  AzureFirewall,
  AzureFirewallFqdnTag,
  DdosProtectionPlan,
  EndpointServiceResult,
  ExpressRouteCircuitAuthorization,
  RouteFilterRule,
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringConfig,
  ExpressRouteCircuitStats,
  RouteFilter,
  Ipv6ExpressRouteCircuitPeeringConfig,
  ExpressRouteConnectionId,
  ExpressRouteCircuit,
  ExpressRouteCircuitSku,
  ExpressRouteCircuitServiceProviderProperties,
  ExpressRouteServiceProvider,
  ExpressRouteServiceProviderBandwidthsOffered,
  ExpressRouteCrossConnectionPeering,
  ExpressRouteCrossConnection,
  ExpressRouteCircuitReference,
  ExpressRouteConnection,
  ExpressRouteCircuitPeeringId,
  ExpressRouteGateway,
  ExpressRouteGatewayPropertiesAutoScaleConfiguration,
  ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds,
  VirtualHubId,
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationBandwidths,
  ExpressRouteLink,
  ExpressRoutePort,
  LoadBalancingRule,
  Probe,
  InboundNatPool,
  OutboundRule,
  LoadBalancer,
  LoadBalancerSku,
  ContainerNetworkInterfaceConfiguration,
  ContainerNetworkInterface,
  Container,
  ContainerNetworkInterfaceIpConfiguration,
  NetworkProfile,
  ConnectionMonitorResult,
  ConnectionMonitorSource,
  ConnectionMonitorDestination,
  PublicIPPrefix,
  PublicIPPrefixSku,
  ReferencedPublicIpAddress,
  PatchRouteFilterRule,
  PatchRouteFilter,
  BgpServiceCommunity,
  BGPCommunity,
  VirtualNetworkPeering,
  AddressSpace,
  VirtualNetwork,
  DhcpOptions,
  VirtualNetworkGatewayIPConfiguration,
  VpnClientRootCertificate,
  VpnClientRevokedCertificate,
  VirtualNetworkGateway,
  VirtualNetworkGatewaySku,
  VpnClientConfiguration,
  IpsecPolicy,
  BgpSettings,
  LocalNetworkGateway,
  VirtualNetworkGatewayConnection,
  TunnelConnectionHealth,
  ConnectionSharedKey,
  VirtualNetworkGatewayConnectionListEntity,
  VirtualNetworkConnectionGatewayReference,
  P2SVpnServerConfigVpnClientRootCertificate,
  P2SVpnServerConfigVpnClientRevokedCertificate,
  P2SVpnServerConfigRadiusServerRootCertificate,
  P2SVpnServerConfigRadiusClientRootCertificate,
  P2SVpnServerConfiguration,
  VirtualWAN,
  VpnSite,
  DeviceProperties,
  HubVirtualNetworkConnection,
  VirtualHub,
  VirtualHubRouteTable,
  VirtualHubRoute,
  VpnConnection,
  VpnGateway,
  P2SVpnGateway,
  VpnClientConnectionHealth
} from "../models/mappers";
