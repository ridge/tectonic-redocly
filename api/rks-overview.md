# Working with the RKS API

The RKS API is used to create, manage, and monitor Kubernetes clusters. The API includes functions for:

-   **Node Presets**  - This is a list (read-only) of suggested configurations of the worker nodes of the cluster. Alternatively, you can explicitly specify the minimal CPU, memory and storage requirements.
-  **Clusters**  - When you create a cluster you will specify at least one pool of worker nodes, and optional location and conformity constraints.
-   **Node Pools**- When you create a worker node pool you specify the CPU, memory and storage requirements or a node preset. In addition, you specify the desired number of nodes and you may optionally specify Kubernetes labels and taints. You may modify the desired number of nodes.
-   **Nodes**  - The API provides a view of the nodes that were created and allows you to delete a node that is no longer desirable.
-   **Tokens**  - Generate tokens for users for whom you want to grant access to the cluster.
-   **Load Balancers** - When you create a "Load Balancer" type service in Kubernetes, Ridge creates a load balancer in the data center, external to the cluster.
-   **Volumes**  - When you create a Persistent Volume Claim (PVC), Ridge creates a volume in the Data Center and attaches it to the desired node.
# Node Presets  
  
## Overview
> Node Presets provide suggested VM specifications for the node. If you specify quantity values explicitly when creating a node pool, these override those from the preset.

>

  

- X-Small (xsmall): CPU Cores: 1, RAM (GiB): 1, Storage (GiB): 10|

- Small (small): CPU Cores: 2 , RAM (GiB): 2, Storage (GiB): 10

- Medium (medium): CPU Cores: 2, RAM (GiB): 4, Storage (GiB): 10

- Large (large): CPU Cores: 4, RAM (GiB): 8, Storage (GiB): 10

- X-Large (xlarge): CPU Cores: 8, RAM (GiB): 16, Storage (GiB): 10

- XX-Large: (xxlarge): CPU Cores: 16, RAM (GiB): 32, Storage (GiB): 10

# Clusters
## Overview

  

When you create a new Kubernetes cluster, you must specify at least one pool of worker nodes, including the number of nodes you want the pool to include, as well as a maximum cost you are willing to pay initially. The initial maximum cost acts as a constraint on the location and creation of the cluster.

  

You can optionally specify desired or undesired locations for the cluster, qualities such as conformity constraints for the data center in which it is created, whether or not you want the cluster to have high availability, and if you want to require a specific Kubernetes version for the cluster, rather than the default version.

  

## Operations

The operations that can be performed on Kubernetes Clusters are:

  

- Create Kubernetes Cluster (POST)

- List Kubernetes Clusters (GET)

- Describe a Kubernetes Cluster (GET)

- Update Kubernetes Cluster Parameters (PATCH)

- Delete a Cluster (DELETE)

- Describe a Kubernetes Cluster (GET)

  

## Updating Cluster Parameters

When updating a cluster, the parameters that can be updated are:

  

- display_name

- desired_version

- whitelist

  

## Deleting a Cluster

  

When you delete a cluster, all the related resources are deleted, including all nodes, volumes, and load balancers.

  

## Additional Information

The following quantities and qualities can be added to customize cluster and node pool specifications.

## Qualities Used in Cluster Creation

If your cluster requires a specific certification for the data center in which it is created, you can add this as a quality, in the form of `certification_name:1`. The value of this quality is always `1`.

For example: `iso_27001: 1` requires that the data center have ISO 27001 certification.

`hipaa: 1` requires that the data center have HIPAA certification.

  

### Quantities Used in Node Pool Creation

**cpu_cores:** The minimal number of CPU cores required for the node pool.

**ephemeral_storage:** The minimal amount of storage required for the node pool (in GiB).

**ram:** The minimal amount of RAM required for the node pool (in GiB).

Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.

  

### Qualities Used in Node Pool Creation

**bare_metal:** Requires that the node pool use physical servers only, and not virtual machines, the value must always be `1`.

# Node Pools
## Overview

Node pools are a set of nodes (VMs), with a common configuration. They may have a set of Kubernetes labels and taints applied to them, which may be used during pod scheduling.

  

When you create a node pool, whether during creation of a cluster, or afterward, you must include the CPU, memory, and storage requirements. You can do this either using one of the suggested node presets, or by specifying the requirements as quantities in the API.

  

If you require the worker nodes to be physical machines, you can specify this as a quality in the API.

  

For more information on quantities and qualities, see **Additional Information** in **Cluster**.

  

## Operations

The operations that can be performed on node pools are:

  

- Create a Node Pool for a Kubernetes Cluster (POST)

- List the Node Pools of a Kubernetes Cluster (GET)

- Get Information About a Node Pool (GET)

- Delete a Node Pool from a Cluster (DELETE)

- Update Node Pool Parameters (PATCH)

  

## Updating Node Pool Parameters

When updating node pool parameters, the parameters that can be updated are:

-  `display_name`

-  `desired_node_count`

  

## Deleting a Node Pool

When you delete a node pool, all nodes within the pool are deleted.

## Create  a Node Pool
## Additional Information

The following quantities and qualities can be added to customize node pool specifications.

### Quantities Used in Creating a Node Pool

**cpu_cores:** The minimal number of CPU cores required for the node pool.

**ephemeral_storage:** The minimal amount of storage required for the node pool (in GiB).

**ram:** The minimal amount of RAM required for the node pool (in GiB).

  

Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.

  

### Qualities Used in Creating a Node Pool

**bare_metal:** Requires that the node pool use physical servers only, and not virtual machines, the value must always be `1`

# List Worker Nodes for Cluster
Returns a list of the worker nodes of the specified Kubernetes cluster.

  

The Node states used for filtering are:

  

- starting

- running

- terminating

- terminated
# Nodes
## Overview

Any time you create a Node Pool, you must add at least one node in the pool. The number of nodes in a node pool can be updated by updating the `desired_node_count` parameter in the **Update Node Pool Parameters** function.

  

## Operations

The operations you can perform on worker nodes are:

* List the Worker Nodes of a Kubernetes Cluster (GET)

* Get Information About a Worker Node (GET)

* Shut Down a Worker Node in a Cluster (DELETE)
# Access Tokens
## Overview

Access Tokens are required to access clusters. You can grant and retract tokens, and a unique token is required for each member who accesses the cluster.

  

## Operations

The operations you can perform on access tokens are:

  

- List the Access Tokens for a Kubernetes Cluster (GET)

- Create a Token for a Kubernetes Cluster (POST)

- Get Information About a Cluster Token (GET)

- Delete a Cluster Token (DELETE)

# Load Balancers
## Overview
Defining a Kubernetes service of the "LoadBalancer" type creates a load balancer in the data center, external to the Cluster.

## List Load Balancers
When listing load balancers, you can optionally filter them by one or more of the following states:

-  `starting`

-  `running`

-  `updating`

-  `terminating`

-  `terminated`
# Volumes
## Overview

Volumes are created when a user creates PVCs in the Kubernetes cluster.
