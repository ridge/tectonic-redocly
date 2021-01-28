#  Working with the RKS API

The RKS API is used to create, manage, and monitor Kubernetes clusters. The API includes functions for:

-  **Node Presets**  - This is a list (read-only) of suggested configurations of the worker nodes of the cluster. Alternatively, you can explicitly specify the minimal CPU, memory and storage requirements.

-  **Clusters**  - When you create a cluster you will specify at least one pool of worker nodes, and optional location and conformity constraints.

-  **Node Pools**- When you create a worker node pool you specify the CPU, memory and storage requirements or a node preset. In addition, you specify the desired number of nodes and you may optionally specify Kubernetes labels and taints. You may modify the desired number of nodes.

-  **Nodes**  - The API provides a view of the nodes that were created and allows you to delete a node that is no longer desirable.

-  **Tokens**  - Generate tokens for users for whom you want to grant access to the cluster.

-  **Load Balancers** - When you create a "Load Balancer" type service in Kubernetes, Ridge creates a load balancer in the data center, external to the cluster.

-  **Volumes**  - When you create a Persistent Volume Claim (PVC), Ridge creates a volume in the Data Center and attaches it to the desired node.

# API Server Status

##  Check if API Server is Ready to Serve Requests

If the API server is ready to serve requests, the response code 204 HTTP is returned.

# Kubernetes Versions

##  List Supported Kubernetes Versions

Returns a list of the supported Kubernetes versions.
<![if !supportLineBreakNewLine]>
<![endif]>

#  Node Presets

##  List Node Presets

Returns a list of the Kubernetes-node presets (suggested node sizes).


> Node Presets provide suggested VM specifications for the node. If you specify quantity values explicitly when creating a node pool, these override those from the preset.

>

- X-Small (xsmall): CPU Cores: 1, RAM (GiB): 1, Storage (GiB): 10|

- Small (small): CPU Cores: 2 , RAM (GiB): 2, Storage (GiB): 10

- Medium (medium): CPU Cores: 2, RAM (GiB): 4, Storage (GiB): 10

- Large (large): CPU Cores: 4, RAM (GiB): 8, Storage (GiB): 10

- X-Large (xlarge): CPU Cores: 8, RAM (GiB): 16, Storage (GiB): 10

- XX-Large: (xxlarge): CPU Cores: 16, RAM (GiB): 32, Storage (GiB): 10

#  Clusters

##  Introduction

When you create a new Kubernetes cluster, you must specify at least one pool of worker nodes, including the number of nodes you want the pool to include, as well as a maximum cost you are willing to pay initially. The initial maximum cost acts as a constraint on the location and creation of the cluster.

You can optionally specify desired or undesired locations for the cluster, qualities such as conformity constraints for the data center in which it is created, whether or not you want the cluster to have high availability, and if you want to require a specific Kubernetes version for the cluster, rather than the default version.

##  Cluster Operations

The operations that can be performed on Kubernetes Clusters are:

- List Kubernetes Clusters (GET)

- Create Kubernetes Cluster (POST)

- Describe a Kubernetes Cluster (GET)

- Update Kubernetes Cluster Parameters (PATCH)

- Delete a Cluster (DELETE)

##  List the Kubernetes Clusters

Returns a list of all Kubernetes clusters created in the project.

##  Create a Kubernetes Cluster

Creates a new Kubernetes cluster in the specified project. When you create a new cluster, you must also specify properties for at least one node pool. See Additional Information after Body Parameters for details of qualities and quantities needed for Cluster and Node Pool creation.

###  Variables: Qualities Used in Cluster Creation

If your cluster requires a specific certification for the data center in which it is created, you can add this as a quality, in the form of `certification_name:1`. The value of this quality is always `1`.

For example: `iso_27001: 1` requires that the data center have ISO 27001 certification.

`hipaa: 1` requires that the data center have HIPAA certification.

###  Variables: Quantities Used in Node Pool Creation

**cpu_cores:** The minimal number of CPU cores required for the node pool.

**ephemeral_storage:** The minimal amount of storage required for the node pool (in GiB).

**ram:** The minimal amount of RAM required for the node pool (in GiB).

Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.

###  Variables: Qualities Used in Node Pool Creation

**bare_metal:** Requires that the node pool use physical servers only, and not virtual machines, the value must always be `1`.

##  Describe a Kubernetes Cluster

Returns full details of the specified Kubernetes cluster.

##  Update Kubernetes Cluster Parameters

Lets you update the cluster's display name, the desired version, or its whitelist.

##  Delete a Cluster

Deletes the selected cluster including all its related resources.

When you delete a cluster, all the related resources are deleted, including all nodes, volumes, and load balancers.

#  Node Pools

##  Introduction

Node pools are a set of nodes (VMs), with a common configuration. They may have a set of Kubernetes labels and taints applied to them, which may be used during pod scheduling.

When you create a node pool, whether during creation of a cluster, or afterward, you must include the CPU, memory, and storage requirements. You can do this either using one of the suggested node presets, or by specifying the requirements as quantities in the API.

If you require the worker nodes to be physical machines, you can specify this as a quality in the API.

##  Operations

The operations that can be performed on node pools are:

- List the Node Pools of a Kubernetes Cluster (GET)

- Create a Node Pool for a Kubernetes Cluster (POST)

- Get Information About a Node Pool (GET)

- Delete a Node Pool from a Cluster (DELETE)

- Update Node Pool Parameters (PATCH)

##  List the Node Pools of a Kubernetes Cluster

Returns a list of node pools created for the specified cluster.

##  Create a Node Pool for a Kubernetes Cluster

Lets you create additional node pools for a cluster. For details of qualities and quantities used in Node Pool creation, see Additional Information below the body parameters.

###  Variables: Quantities Used in Node Pool Creation

**cpu_cores:** The minimal number of CPU cores required for the node pool.

**ephemeral_storage:** The minimal amount of storage required for the node pool (in GiB).

**ram:** The minimal amount of RAM required for the node pool (in GiB).

Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.

###  Variables: Qualities Used in Node Pool Creation

**bare_metal:** Requires that the node pool use physical servers only, and not virtual machines, the value must always be `1`.

##  Get Information About a Node Pool

Returns all information about the specified node pool.

## Delete a Node Pool from a Cluster

Deletes the specified node pool including all the resources within. Note that the system tries to maintain the desired number of nodes. Therefore, deleting a node without reducing the desired number of nodes will trigger the creation of a new node.

##  Update Node Pool Parameters

Lets you update the display_name and desired_node_count parameters for the specified node pool.

# List Worker Nodes for Cluster

Returns a list of the worker nodes of the specified Kubernetes cluster.

#  Nodes

##  Introduction

Any time you create a Node Pool, you must add at least one node in the pool. The number of nodes in a node pool can be updated by updating the `desired_node_count` parameter in the **Update Node Pool Parameters** function.

##  Operations

The operations you can perform on worker nodes are:

* List the Worker Nodes of a Kubernetes Cluster (GET)

* Get Information About a Worker Node (GET)

* Shut Down a Worker Node in a Cluster (DELETE)

## List the Worker Nodes of a Kubernetes Cluster

Returns a list of the worker nodes of the specified Kubernetes cluster.

The Node states used for filtering are:

-  `starting`

-  `running`

-  `updating`

-  `terminating`

-  `terminated`

##  Get Information About a Worker Node

Returns all the information about the specified worker node.

##  Shut Down a Worker Node in a Cluster

Lets you shut down a specific worker node within a node pool.

#  Access Token

## Introduction

Access Tokens are required to access clusters. You can grant and retract tokens, and a unique token is required for each member who accesses the cluster.

##  Operations

The operations you can perform on access tokens are:

- List the Access Tokens for a Kubernetes Cluster (GET)

- Create a Token for a Kubernetes Cluster (POST)

- Get Information About a Cluster Token (GET)

- Delete a Cluster Token (DELETE)

##  List the Access Tokens for a Kubernetes Cluster

Returns a list of all the access tokens granted to members for cluster access.

##  Create a Token for a Kubernetes Cluster

Lets you generate an access token for a member to access the cluster.

##  Get Information About a Cluster Token

Returns all information about the specified access token.

##  Delete a Cluster Token

Deletes the specified access token.

# Load Balancers

##  Introduction

Defining a Kubernetes service of the "LoadBalancer" type creates a load balancer in the data center, external to the Cluster.

##  List Cluster's External Load Balancers

Returns a list of the load balancers created in the data center when services of the 'LoadBalancer' type were created in the cluster.

When listing load balancers, you can optionally filter them by one or more of the following states:

-  `starting`

-  `running`

-  `updating`

-  `terminating`

-  `terminated`

#  Volumes

##  Introduction

Volumes are created when a user creates PVCs in the Kubernetes cluster.

## List Cluster's Persistent Volumes

Returns a list of the Persistent Volumes used by the cluster.

When listing persistent volumes, you can optionally filter them by one or more of the following states:

-  `starting`

-  `running`

-  `updating`

-  `terminating`

-  `terminated`
