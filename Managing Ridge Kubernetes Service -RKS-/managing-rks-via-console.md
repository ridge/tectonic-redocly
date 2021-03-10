---
title: "Managing RKS via Console"
slug: "managing-rks-via-console"
hidden: false
createdAt: "2021-01-05T15:57:54.281Z"
updatedAt: "2021-01-05T16:00:34.381Z"
---
# Managing Kubernetes Clusters with the Ridge Console
Clicking on Kubernetes in the left side menu brings you to the Clusters page, where you can see a list of any existing Kubernetes clusters. You can then manage existing clusters or add new ones.



# Creating a Cluster
Creating a Kubernetes cluster includes these steps:
- Part 1 - Setting Cluster Name, Location, and High Availability Requirements
- Part 2 - Configuring Node Pool
- Part 3 - Creating Access Tokens


## Setting Cluster Name, Location, and High Availability Requirements
To create a cluster:
1. From the left side menu, click **Kubernetes** and then click **Create Cluster**.
![Ridge Kubernetes cluster list UI](https://i.imgur.com/UwAXHpE.png)
2. Enter Cluster Name and Locations and select whether your Cluster requires High Availability or not. See explanations in Cluster Parameters table below.
![Create cluster form](https://i.imgur.com/kXLGzIK.png)

### Cluster Parameters
The  parameters you can specify when creating a new cluster are:
| Parameter | Description |
| --------- | ----------- |
| **Cluster Name**          | A human readable name for your cluster. Underneath the cluster name, Ridge also displays the full API path to access the cluster.            |
| **Cluster Availability**          | If you uncheck this box, the cluster will be created with only one master node, and will not have high availability. By default, high availability is checked, and the cluster is created with three master nodes.            |
| **Requested Locations**          | You can require or exclude data center locations, filtering by country, region, or city. If you want your cluster created in a specific data center, select **Explicit Resource Pools**, and search for the specific data center where you want to create the cluster.            |

## Configuring a Node Pool
A node pool is a group of worker nodes that share identical sizing, and labels and taints in Kubernetes.
You can configure a node pool either when you create a new Kubernetes cluster, or from the Node Pools tab of an existing cluster.
:::info
Note that you **must** create at least one node pool as part of creating a cluster.
:::

To configure a node pool:
1. In the Create Cluster page, scroll to the lower half of the page. Alternately, from the cluster list, select a cluster, then click **Add Node Pool**.
![](https://i.imgur.com/LqxBY6j.png)
3. Enter a node pool name, number of nodes, and select the minimum configuration and resources required by your node pool (see **Node Pool Parameters** below).
4. Optionally add taints and labels to the node pool.
5. Select if the cluster requires a physical machine.
6. Click **Create Cluster** (or from the New Node Pool page, click **Add Node Pool**).

### Node Pool Parameters
The parameters you can specify for the node pool are:
| Parameter                 | Description |
| ------------------------- | ----------- |
| **Node Pool Name**        | A human readable name for your node pool. As with the cluster name, Ridge displays the full API path to access the node pool underneath the node pool name.            |
| **Number of Nodes**       | You must have a minimum of one node per node pool.            |
| **Minimal Configuration** | You can either select a preset configuration for the nodes in the pool, or in the Resources section, you can customize the minimum resources you require for each node.            |
| **Resources**                          | If you prefer to customize the node pool resources, select the minimum number of CPU cores, GiB of RAM, and GiB of instance storage each node requires.            |
| **Bare metal only**                          | Check this box if you require the node pool to use physical machines only.            |
| **Taints and Labels**                      | Ridge supports all of the Kubernetes features, and you can optionally specify initial taints and labels to be added to the node pool.        |

:::info
Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.
:::

After you create the cluster, Ridge begins creating and provisioning. For a highly available cluster, it creates three master nodes, the worker nodes, provisions the machines, network, security rules, and creates a cluster that is fully isolated from the world. You can then access the cluster and use the Kubernetes API to interact with and deploy applications on top of it.

![Cluster Info in UI](https://i.imgur.com/c3w9BLm.png)
# Creating an Access Token
To access a cluster you need to create an Access Token. This creates a kubeconfig file for the member of the organization who needs to access the cluster. For more information about members and Identity and Access Management, see [IAM](http://link.needs.adding).

To create an access token:
1. On the Access Control tab of the cluster's main page, click **Add Token**.
![Cluster Access Control tab](https://i.imgur.com/Z3LPdxG.png)
3. Select a member of the organization from the dropdown list.
4. Enter a human readable display name for the token. As with the cluster and node pool names, Ridge displays the full API path to access the token underneath the token name.
![Create Token page with display name and API path highlighted](https://i.imgur.com/nzXRdmD.png)
6. Click **Create Token**.

Creating a token generates a Kubernetes configuration file, which you can copy or download.
You can revoke a token at any time by clicking the trash can in the UI. A token is also revoked if, for any reason, the member to whom it granted access is deleted from the Identity and Access Management system.

# Viewing Load Balancers and Persistent Volumes
When you start deploying workloads on a cluster, Kubernetes begins consuming resources from Ridge.

## Load Balancers
When you deploy an application on the cluster, one of the services created is a service of the type LoadBalancer. This service prompts Ridge to create a load balancer in the data center, external to the cluster. You can view the cluster's load balancers on the **Load Balancers** tab of the cluster page.
Ridge maintains, provisions, and monitors the load balancer throughout the life of the cluster, as well as configuring its ports and white lists.

![load balancers tab in the console UI](https://i.imgur.com/cFcynzW.png)

## Persistent Volumes
When you deploy an application to the cluster, Ridge also creates a persistent volume claim (PVC). Kubernetes then requests to create persistent volumes, attaches them to the cluster, and binds them to the pods.

You can see the persistent volumes created for the cluster on the **Persistent Volumes** tab of the cluster page in the Ridge console.

![persistent volumes tab in the console UI](https://i.imgur.com/jCfBGTW.png)
