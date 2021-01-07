---
title: "Create a Batch"
slug: "createbatch"
excerpt: "Creates a new batch in the current project. When you create a new batch, you must also specify properties for at least one container. See additional information after Body Params for details of qualities and quantities needed for batch and container creation."
hidden: false
createdAt: "2020-12-23T11:18:57.137Z"
updatedAt: "2020-12-29T12:14:08.645Z"
---
## Additional Information
The following quantities and qualities can be added to customize container specifications.
[block:callout]
{
  "type": "info",
  "body": "* `cpu_cores`: The minimal number of CPU cores required for each container.\n* `ephemeral_storage`: The minimal amount of storage required for each container (in GiB).\n* `ram`: The minimal amount of RAM required for each container (in GiB).\n\nNote that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.",
  "title": "Quantities Used in Batch Creation"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Qualities Used in Batch Creation",
  "body": "If your batch requires a specific certification for the data center in which it is created, you can add this as a quality, in the form of `\"certification_name\":1`. The value of this quality is always `1`.\n\nFor example:\n* `\"iso_27001\": 1` requires that the data center have ISO 27001 certification.\n* `\"hipaa\": 1` requires that the data center have HIPAA certification.\n\nFor a full list of available certifications and the correct ID to use for each, see [Qualities](https://ridge.readme.io/reference/qualities)."
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "{\n    \"desired_number\": 1,\n    \"container_image\": \"hub.docker.com/repository/docker/test-org/test-repo/test-image\",\n    \"max_price\": \"Unlimited\",\n    \"name\": \"batch1\",\n    \"docker_credentials_id\": \"zrrnmu18y9jtuyaqoej7oau1co\",\n    \"vcpus\": 2,\n    \"memory\": 4000,\n    \"ephemeral_storage\": 8000,\n    \"desired_locations\": [\n        \"DE\"\n    ],\n    \"aws_role\": {\n        \"role_arn\": \"arn:aws:iam::aws:policy/AmazonS3FullAccess\",\n        \"aws_access_key_id\": \"qqahn5n9zd7im9nszgtgmjfohe\"\n    }\n}",
      "language": "json"
    }
  ]
}
[/block]