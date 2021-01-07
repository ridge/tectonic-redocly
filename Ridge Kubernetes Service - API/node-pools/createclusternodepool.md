---
title: "Create a Node Pool for a Kubernetes Cluster"
slug: "createclusternodepool"
excerpt: "Lets you create additional node pools for a cluster. For details of qualities and quantities used in Node Pool creation, see Additional Information below the body parameters."
hidden: false
createdAt: "2020-12-27T13:07:58.662Z"
updatedAt: "2020-12-28T12:57:59.893Z"
---
## Additional Information
The following quantities and qualities can be added to customize node pool specifications.
[block:callout]
{
  "type": "info",
  "title": "Quantities Used in Creating a Node Pool",
  "body": "* `cpu_cores`: The minimal number of CPU cores required for the node pool.\n* `ephemeral_storage`: The minimal amount of storage required for the node pool (in GiB).\n* `ram`: The minimal amount of RAM required for the node pool (in GiB).\n\nNote that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Qualities Used in Creating a Node Pool",
  "body": "* `bare_metal`: Requires that the node pool use physical servers only, and not virtual machines,  the value must always be `1`."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n  \"id\": \"ibp566nxx5zx6sy59wpjz3xmya\",\n  \"name\": \"pool1\",\n  \"path\": \"/orgs/test-org/projects/test/clusters/test-cluster/node-pools/pool1\",\n  \"org_id\": \"di86ihycue5875pb7d5ybfhn9r\",\n  \"project_id\": \"fmgiyiqtajxoj59i4hgaubt4tc\",\n  \"cluster_id\": \"rozyaxyphmbiw5tbgq4sonooje\",\n  \"created_at\": \"2020-12-16T13:08:48.563Z\",\n  \"updated_at\": \"2020-12-16T13:08:48.563Z\",\n  \"display_name\": \"Pool 1\",\n  \"desired_node_count\": 1,\n  \"quantities\": {\n    \"cpu_cores\": 1,\n    \"ephemeral_storage\": 4294967296,\n    \"ram\": 2147483648\n  },\n  \"initial_kubernetes_labels\": {\n    \"pool\": \"pool1\"\n  },\n  \"initial_taints\": [\n    \"workload_size=large:NoSchedule\"\n  ],\n  \"node_counts\": {\n    \"running\": 1\n  }\n}",
      "language": "json",
      "name": "Example of Node Pool Request"
    }
  ]
}
[/block]