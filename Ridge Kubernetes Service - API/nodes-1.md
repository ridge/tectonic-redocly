---
title: "Nodes"
slug: "nodes-1"
hidden: false
createdAt: "2020-12-27T13:07:57.693Z"
updatedAt: "2020-12-28T12:01:53.390Z"
---
## Overview
Any time you create a Node Pool, you must add at least one node in the pool. The number of nodes in a node pool can be updated by updating the `desired_node_count` parameter in the [Update Node Pool Parameters](ref:updateclusternodepool) function.

## Operations
The operations you can perform on worker nodes are: 
- List worker nodes (GET)
- Get information about a specific node (GET)
- Delete a worker node (DELETE)