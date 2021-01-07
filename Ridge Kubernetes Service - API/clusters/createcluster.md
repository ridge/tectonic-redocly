---
title: "Create a Kubernetes Cluster"
slug: "createcluster"
excerpt: "Creates a new Kubernetes cluster in the specified project. When you create a new cluster, you must also specify properties for at least one node pool. See Additional Information after Body Parameters for details of qualities and quantities needed for Cluster and Node Pool creation."
hidden: false
createdAt: "2020-12-27T13:07:58.650Z"
updatedAt: "2020-12-28T12:57:59.731Z"
---
## Additional Information
The following quantities and qualities can be added to customize cluster and node pool specifications.
[block:callout]
{
  "type": "info",
  "title": "Qualities Used in Cluster Creation",
  "body": "If your cluster requires a specific certification for the data center in which it is created, you can add this as a quality, in the form of `\"certification_name\":1`. The value of this quality is always `1`.\n\nFor example:\n* `\"iso_27001\": 1` requires that the data center have ISO 27001 certification.\n* `\"hipaa\": 1` requires that the data center have HIPAA certification.\n\nFor a full list of available certifications and the correct ID to use for each, see [Qualities](https://ridge.readme.io/reference/qualities)."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Quantities Used in Node Pool Creation",
  "body": "* `cpu_cores`: The minimal number of CPU cores required for the node pool.\n* `ephemeral_storage`: The minimal amount of storage required for the node pool (in GiB).\n* `ram`: The minimal amount of RAM required for the node pool (in GiB).\n\nNote that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Qualities Used in Node Pool Creation",
  "body": "* `bare_metal`: Requires that the node pool use physical servers only, and not virtual machines,  the value must always be `1`."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"node_pools\": [\n    {\n      \"desired_node_count\": 1,\n      \"name\": \"pool1\",\n      \"display_name\": \"Pool 1\",\n      \"quantities\": {\n        \"cpu_cores\": 1,\n        \"ephemeral_storage\": 4294967296,\n        \"ram\": 2147483648\n      },\n      \"initial_kubernetes_labels\": {\n        \"pool\": \"pool1\"\n      },\n      \"initial_taints\": [\n        \"workload_size=large:NoSchedule\"\n      ]\n    }\n  ],\n  \"initial_max_cost\": \"Unlimited\",\n  \"name\": \"test-cluster\",\n  \"display_name\": \"Test Cluster\",\n  \"desired_locations\": [\n    \"IL\"\n  ],\n  \"qualities\": {\n    \"iso_27001\": 1\n  },\n  \"highly_available\": false,\n  \"desired_version\": \"v1.17.6\"\n}",
      "language": "json",
      "name": "Create Cluster - Example"
    }
  ]
}
[/block]