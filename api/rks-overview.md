# Ridge Kubernetes Service API Overview
The [RKS](https://www.ridge.co/kubernetes) API is used to create, manage, and monitor Kubernetes clusters. The API includes functions for:
-  **Node Presets**  - This is a list (read-only) of suggested configurations of the worker nodes of the cluster. Alternatively, you can explicitly specify the minimal CPU, memory and storage requirements.
-  **Clusters**  - When you create a cluster you will specify at least one pool of worker nodes, and optional location and conformity constraints.
-  **Node Pools**- When you create a worker node pool you specify the CPU, memory and storage requirements or a node preset. In addition, you specify the desired number of nodes and you may optionally specify Kubernetes labels and taints. You may modify the desired number of nodes.
-  **Nodes**  - The API provides a view of the nodes that were created and allows you to delete a node that is no longer desirable.
-  **Tokens**  - Generate tokens for users for whom you want to grant access to the cluster.
-  **Load Balancers** - When you create a "Load Balancer" type service in Kubernetes, Ridge creates a load balancer in the data center, external to the cluster.
-  **Volumes**  - When you create a Persistent Volume Claim (PVC), Ridge creates a volume in the Data Center and attaches it to the desired node.

## Kubernetes Versions
Ridge allows you to select the kubernetes version of your cluster. List the kubernetes versions to see which versions are currently supported.

##  Node Presets
Node Presets provide suggested VM specifications for the node. If you specify quantity values explicitly when creating a node pool, these override those from the preset. List the node presets to see the suggested node configurations. The list will be similar to this:
- X-Small (xsmall): CPU Cores: 1, RAM (GiB): 1, Storage (GiB): 10|
- Small (small): CPU Cores: 2 , RAM (GiB): 2, Storage (GiB): 10
- Medium (medium): CPU Cores: 2, RAM (GiB): 4, Storage (GiB): 10
- Large (large): CPU Cores: 4, RAM (GiB): 8, Storage (GiB): 10
- X-Large (xlarge): CPU Cores: 8, RAM (GiB): 16, Storage (GiB): 10
- XX-Large: (xxlarge): CPU Cores: 16, RAM (GiB): 32, Storage (GiB): 10

## Clusters
The cluster endpoints are used to manage the entire lifecycle of your kubernetes cluster.

### Cluster Operations
The operations that can be performed on Kubernetes Clusters are:
- List Kubernetes Clusters (GET)
- Create Kubernetes Cluster (POST)
- Describe a Kubernetes Cluster (GET)
- Update Kubernetes Cluster Parameters (PATCH)
- Delete a Cluster (DELETE)

### Cluster Creation Details
To create a kubernetes cluster you need to determine the following:
- Where you want the cluster to be created. You can specify this as a specific data center or provide more general location information such as a country or a city.
- Required data-center certifications
- Node pool(s)
- The kubernetes version
- Whether or not you would like the cluster to be highly available
- A Whitelist for controlling the source IPs from which the cluster's API is accessed
- An optional AWS role. This will grant the pods that are running in the cluster temporary AWS credentials. An AWS SDK running in the cluster will seamlessly retrieve these credentials from a metadata server that Ridge provisioned and configured on the cluster.

#### Variables: Qualities Used in Cluster Creation
If your cluster requires a specific certification for the data center in which it is created, you can add this as a quality, in the form of `certification_name:1`. The value of this quality is always `1`.
For example: `iso_27001: 1` requires that the data center have ISO 27001 certification.
Use the qualities endpoint in the Data Center API to get the list of certifications.

## Node Pools
Node pools are a set of nodes (VMs), with a common configuration. They may have a set of Kubernetes labels and taints applied to them, which may be used during pod scheduling.

### Operations
The operations that can be performed on node pools are:
- List the Node Pools of a Kubernetes Cluster (GET)
- Create a Node Pool for a Kubernetes Cluster (POST)
- Get Information About a Node Pool (GET)
- Delete a Node Pool from a Cluster (DELETE)
- Update Node Pool Parameters (PATCH)

### Node Pool Creation Details
The following can be specified during node pool creation:
- Quantitive characteristics of the node (e,g, the amount of RAM it should have)
- Whether or not the node should be bare metal
- Kubernetes labels and taints that should be applied to the nodes

#### Variables: Quantities Used in Node Pool Creation
- **cpu_cores:** The minimal number of CPU cores required for each node.
- **instance_storage:** The minimal amount of storage required for each node (in GiB).
- **ram:** The minimal amount of RAM required for each node (in GiB).
- **bandwidth:** The minimal amount of bandwidth required for each node (in Mbps).
Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.

#### Variables: Qualities Used in Node Pool Creation
- **bare_metal:** Requires that the node pool use physical servers only, and not virtual machines, the value must always be `1`.

### Scaling the node pool
To change the number of nodes in a pool, simply update the desired_node_count. Increasing the number will cause new nodes to added to the cluster. Decreasing the number will ensure,that when you delete the nodes you no longer need, new nodes will not be creates in their place.

## Nodes
The nodes that were created as part of a node pool.

### Operations
The operations you can perform on worker nodes are:
- List the Worker Nodes of a Kubernetes Cluster (GET)
- Get Information About a Worker Node (GET)
- Shut Down a Worker Node in a Cluster (DELETE)

### Node Status
A node can be in one of several states. The state can be used as a filter of the node list. The states are:
-  `starting`
-  `running`
-  `updating`
-  `terminating`
-  `terminated`

## Access Tokens
Access Tokens are required to access clusters. You can grant and retract tokens. A unique token is required for each member who accesses the cluster.

### Operations
The operations you can perform on access tokens are:
- List the Access Tokens for a Kubernetes Cluster (GET)
- Create a Token for a Kubernetes Cluster (POST)
- Get Information About a Cluster Token (GET)
- Delete a Cluster Token (DELETE)

## Load Balancers
Defining a Kubernetes service of the "LoadBalancer" type creates a load balancer in the data center, external to the Cluster.
You can use the API to list the existing load balancers. Optionally filter the list by the state of the load balancer:
-  `starting`
-  `running`
-  `updating`
-  `terminating`
-  `terminated`

## Volumes
Volumes are created when a user creates PVCs in the Kubernetes cluster.
Use the API to list the Persistent Volumes used by the cluster.
Optionally filter the list by one or more of the following states:
-  `starting`
-  `running`
-  `updating`
-  `terminating`
-  `terminated`
