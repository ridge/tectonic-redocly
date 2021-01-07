---
title: "Node Pools"
slug: "node-pools"
hidden: false
createdAt: "2020-12-27T13:07:57.692Z"
updatedAt: "2020-12-28T09:40:00.223Z"
---
## Overview
Node pools are a set of nodes (VMs), with a common configuration. They may have a set of Kubernetes labels and taints applied to them, which may be used during pod scheduling.

When you create a node pool, whether during creation of a cluster, or afterward, you must include the CPU, memory, and storage requirements. You can do this either using one of the suggested node presets, or by specifying the requirements as quantities in the API.

If you require the worker nodes to be physical machines, you can specify this as a quality in the API.

For more information on quantities and qualities, see **Additional Information** in [Create a Node Pool for a Kubernetes Cluster](ref:createclusternodepool).

## Operations
The operations that can be performed on node pools are:
- Create a Node Pool (POST)
- List the Node Pools for a Cluster (GET)
- Get information about a Node in a Node Pool (GET)
- Delete Node Pool (DELETE)
- Update Node Pool Parameters (PATCH)

## Updating Node Pool Parameters
When updating node pool parameters, the parameters that can be updated are:
- `display_name`
- `desired_node_count`

## Deleting a Node Pool
When you delete a node pool, all nodes within the pool are deleted.