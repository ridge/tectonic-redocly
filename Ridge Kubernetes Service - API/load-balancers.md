---
title: "Load Balancers"
slug: "load-balancers"
hidden: false
createdAt: "2020-12-27T13:07:57.695Z"
updatedAt: "2020-12-28T12:16:25.707Z"
---
## Overview
Defining a Kubernetes service of the "LoadBalancer" type creates a load balancer in the data center, external to the Cluster.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "When listing load balancers, you can optionally filter them by one or more of the following states:\n- `starting`\n- `running`\n- `updating`\n- `terminating`\n- `terminated`"
}
[/block]