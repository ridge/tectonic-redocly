---
title: "Clusters"
slug: "clusters"
hidden: false
createdAt: "2020-12-27T13:07:57.690Z"
updatedAt: "2020-12-28T09:35:01.725Z"
---
## Overview
When you create a new Kubernetes cluster, you must specify at least one pool of worker nodes, including the number of nodes you want the pool to include, as well as a maximum cost you are willing to pay initially. The initial maximum cost acts as a constraint on the location and creation of the cluster.

You can optionally specify desired or undesired locations for the cluster, qualities such as conformity constraints for the data center in which it is created, whether or not you want the cluster to have high availability, and if you want to require a specific Kubernetes version for the cluster, rather than the default version.

## Operations
The operations that can be performed on Kubernetes Clusters are:
- Create Cluster (POST)
- List Clusters (GET)
- Describe a Cluster (GET)
- Update a Cluster (PATCH)
- Delete a Cluster (DELETE)
- Describe a Cluster’s Certificate (GET)

## Updating Cluster Parameters
When updating a cluster, the parameters that can be updated are:
- display_name
- desired_version
- whitelist


## Deleting a Cluster
When you delete a cluster, all the related resources are deleted, including all nodes, volumes, and load balancers.