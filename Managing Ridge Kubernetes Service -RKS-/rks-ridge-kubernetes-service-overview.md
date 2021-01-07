---
title: "RKS - Ridge Kubernetes Service - Overview"
slug: "rks-ridge-kubernetes-service-overview"
hidden: false
createdAt: "2021-01-05T16:13:22.335Z"
updatedAt: "2021-01-06T09:23:06.892Z"
---
#THIS PAGE IS A WORK IN PROGRESS - WE ARE SEPARATING OUT THE GENERIC RKS CONTENT FROM THE RKS CONTENT THAT IS SPECIFIC TO THE API
# Introduction
Ridge Kubernetes Service (RKS) offers developers a fully certified managed Kubernetes service similar to Google’s GKE or Amazon’s EKS. The system will set up your cluster and take care of its availability and maintenance. This allows developers to focus on workloads (i.e., their core applications), rather than on infrastructure.
[block:callout]
{
  "type": "info",
  "body": "[Managing RKS via Console](doc:managing-rks-via-console) \n[Managing RKS via API](doc:api)",
  "title": "See Also"
}
[/block]
# Overview of Working with the (RKS) API
The RKS API is used to create, manage, and monitor Kubernetes clusters. The API  includes the following resources
  * Node presets- This is a list (read-only) of suggested configurations of the worker nodes of the cluster. Alternatively, you can explicitly specify the minimal CPU, memory and storage requirements.
  * Clusters- When you create a cluster you will specify at least one pool of worker nodes,  a price constraint and optional location and conformity constraints.
  * Node pools- When you create a worker node pool you specify the CPU, memory and storage requirements or a node preset. In addition, you specify the desired number of nodes and you may optionally specify Kubernetes labels and taints. You may modify the desired number of nodes. 
  * Nodes- The API provides a view of the nodes that were created and allows you to delete a node that is no longer desirable,
  * Tokens- Generate tokens for users for whom you want to grant access to the cluster
  * Load Balancers- When you create a "Load Balancer" type service in Kubernetes, Ridge creates a load balancer in the data center, external to the cluster.
  * Volumes- When you create a Persistent Volume Claim (PVC), Ridge creates a volume in the Data Center and attaches it to the desired node.

# Creating a Cluster
When creating a cluster with the API, in addition to the basic details, you may specify a set of constraints that the Ridge Allocation Engine will use in order to choose the best-suited data center, before it provisions and creates the cluster.

## Geographic Location 
The Ridge Cloud is a collection of Data Centers that are located all over the world. You may list desired or undesired locations (such as countries, states, cities, or particular facilities). For example, you may want a cluster in any Data Center in San Jose, CA; or you may want to explicitly require the cluster to be created in a specific Data Center. 

## Node Pools 
Ridge Kubernetes worker nodes are grouped in node pools. You can add, remove or update a node pool. A node pool definition includes:
- The number of desired nodes
- CPU, memory and ephemeral storage size. Alternatively, you can use a Node Preset (similar to instance types that are often used in public clouds) - see [Node Presets](ref:node-presets).
- Whether or not the nodes need to be bare metal
- Kubernetes labels
- Kubernetes taints

## Conformity Requirements
The definition of each Ridge Data Centers includes details of conformity compliance, such as SOC2, ISO or HIPAA. When Creating a Cluster you can indicate a required compliance conformity.
## Cluster Provisioning 
The Ridge Allocation Engine chooses the best suited Data Center and creates the cluster by provisioning the machines, installing, and configuring them. The choice that it makes is based on cost and the constraints that were specified.

# Cluster Monitoring and Auto-healing
Once the cluster is up, Ridge will monitor it 24/7 to make sure it is fully operational. In case of any malfunction or failure, the system will activate the cluster’s auto-healing mechanism and try to reach a stable state again by ensuring the control plane (master nodes) and worker nodes are all running and healthy. 
In case the system identifies an unhealthy node by monitoring the state in the cluster, the system will create another node instead, provision, and configure the node so that eventually it will join the cluster and Kubernetes will become stable again. 
[block:callout]
{
  "type": "info",
  "title": "Notes",
  "body": "- Requires no user intervention and, in most cases, the user will not realize a problem has occurred\n- When creating a cluster with high availability, the cluster control plane has three master nodes, therefore a failure of up to 2 master nodes will have no impact on the cluster’s operation."
}
[/block]
# Load Balancers
## Service Description 
Ridge Kubernetes cluster is composed of a highly available control plane that consists of three master nodes and a highly available load-balancer, created outside the cluster, that directs the user’s management traffic to the master nodes (to allow users to interact with Kubernetes API). The address of this load balancer is the endpoint of the cluster - provided to the user by our API or console (Kubeconfig can be generated and downloaded from the Ridge console).
Users can also request external load balancers from within the Kubernetes cluster by creating services of type LoadBalancer. Similar to other managed Kubernetes solutions, each Ridge cluster is installed with a Ridge Cloud-controller component that monitors for internal Kubernetes state changes and interacts with the Ridge Cloud to try and reconcile the desired state, so that when a user makes a load balancer request Ridge can handle and provide the load balancer.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ebe4ac7-Service_Description.png",
        "Service Description.png",
        611,
        407,
        "#f8f7f7"
      ]
    }
  ]
}
[/block]
## Basic Load Balancer Flow
When developers create a service of type “LoadBalancer” on the cluster, Ridge’s Cloud Controller will attempt to fulfill this request by sending the Ridge Cloud a request to create (and also modify and delete) a load balancer. The Ridge Cloud will create and configure a load balancer in the relevant Data Center and will send back to the cloud-provider the IP address that was allocated which in turn will report it back to Kubernetes.
Note, this entire process is done in a seamless manner and totally transparent to the developer - all the developer needs to care about is the desired state, a load balancer that can forward the data to the application in a secure manner.
Developers are able to see the state of the load balancer using Ridge’s API or UI console. Being part of the managed cluster offering, these load balancers will be deleted when the cluster is deleted. 
Load balancers may incur additional fees as they consume a routable IP and compute resources.
The user only needs to manage load balancing services via the Kubernetes API. **All the rest takes place automatically.** 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9f3281b-Basic_Flow.png",
        "Basic Flow.png",
        605,
        202,
        "#f3f0f1"
      ]
    }
  ]
}
[/block]
# Persistent Storage
## Service Description
RKS supports Persistent Volumes (PV) in all Data Centers that offer block storage. Each cluster is configured with storage classes which represent the block storage types that are available for consumption as PVs in the specific Data Center.
Ridge configures Kubernetes to use Ridge’s CSI as its storage interface, the CSI drivers are seamlessly installed on each cluster so that the experience to developers is transparent.

## Basic Persistent Storage Flow
When the developer creates a Persistent Volume Claim (PVC), Ridge CSI interacts with the cluster to retrieve the desired configuration as requested by the user and sends Ridge Cloud a request to fulfill the desired claim. Ridge Cloud will create a volume in the Data Center and attach it to the desired node. Once the volume is attached to the node, Ridge CSI drivers will take care of mounting and formatting the requested volumes to the pod - all seamless to the user.
Like all resources in the system, the user will be charged for the volume that is created until the volume is deleted.
The user only needs to manage PVCs via the Kubernetes API. **All the rest takes place automatically.**

## Auto-Healing
In case a node fails, the system shall detach all volumes that were attached to it. Kubernetes will reschedule the pods to a different node and the system will be notified through Ridge CSI driver to attach the volumes to the new node.

# Cluster Scaling
## Service Description 
Ridge offers three ways to scale a running cluster:
- Update existing node pool using Ridge API or UI console 
- Create a new node pool using Ridge API or UI console
<!-- * Activate Ridge auto-scaling-->

## Scaling Using the API 
### Update Existing Node Pool
Developers can scale an existing node pool by modifying the number of nodes in the pool:
- Increasing the number of desired worker nodes will result in the system bringing up new nodes (scaling up the cluster).
- Decreasing the number of worker nodes will not automatically remove nodes from the cluster. The developer will need to select the nodes to remove - giving the developer control over which node should be drained and deleted. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Deleting a specific node from the pool, without changing the desired amount in the pool, will trigger the creation of a new node (system will try to reconcile to a stable desired state as determined by the developer)."
}
[/block]
### Create a New Node Pool 
Creating a new node pool is as simple as calling an API that describes the new node pool (in a similar way to the cluster creation), see [Creating a Cluster](doc:rks-overview#creating-a-cluster).

<!--### Autoscaling 
Each Ridge cluster is preinstalled with the Cluster Autoscaler (CA). The CA is a Kubernetes tool that automatically adjusts the size of the Kubernetes cluster when one of the following scenarios occurs:
- There are pods that failed to run in the cluster due to insufficient resources
- There are nodes in the cluster that have been underutilized for an extended period of time and their pods can be placed on other existing nodes
The CA is configured to use Ridge cloud-provider installed on the cluster. The CA decides when and which node pool needs to be expanded, it will use the node pool definition to create an additional node of the same type. The node pool definition allows the user to specify a minimum and maximum size for the pool. Autoscaling will keep the node pool size within these limits.-->