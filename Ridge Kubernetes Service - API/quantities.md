---
title: "Quantities"
slug: "quantities"
hidden: false
createdAt: "2020-12-28T09:54:04.975Z"
updatedAt: "2020-12-28T09:54:04.975Z"
---
The following code sample contains all the possible quantities that can be used in the Ridge Kubernetes Service API.
[block:code]
{
  "codes": [
    {
      "code": "[\n  {\n    \"id\": \"cpu_cores\",\n    \"display_name\": \"CPU cores\",\n    \"scope\": \"vm\",\n    \"pricing_unit\": 1\n  },\n  {\n    \"id\": \"ram\",\n    \"display_name\": \"RAM size\",\n    \"scope\": \"vm\",\n    \"unit\": \"bytes\",\n    \"pricing_unit\": 1073741824\n  },\n  {\n    \"id\": \"ephemeral_storage\",\n    \"display_name\": \"Ephemeral storage size\",\n    \"scope\": \"vm\",\n    \"unit\": \"bytes\",\n    \"pricing_unit\": 1073741824\n  },\n  {\n    \"id\": \"persistent_storage\",\n    \"display_name\": \"Persistent storage size\",\n    \"scope\": \"volume\",\n    \"unit\": \"bytes\",\n    \"pricing_unit\": 1073741824\n  },\n  {\n    \"id\": \"vms\",\n    \"display_name\": \"VM count\",\n    \"scope\": \"order\",\n    \"pricing_unit\": 1\n  },\n  {\n    \"id\": \"networks\",\n    \"display_name\": \"Network count\",\n    \"scope\": \"order\",\n    \"pricing_unit\": 1\n  },\n  {\n    \"id\": \"gateways\",\n    \"display_name\": \"Gateway count\",\n    \"scope\": \"order\",\n    \"pricing_unit\": 1\n  },\n  {\n    \"id\": \"forwarders\",\n    \"display_name\": \"Forwarder count\",\n    \"scope\": \"order\",\n    \"pricing_unit\": 1\n  },\n  {\n    \"id\": \"public_ips\",\n    \"display_name\": \"Public IP count\",\n    \"scope\": \"order\",\n    \"pricing_unit\": 1\n  }\n]",
      "language": "json"
    }
  ]
}
[/block]