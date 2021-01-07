---
title: "Batches"
slug: "batches"
hidden: false
createdAt: "2020-12-23T12:06:21.172Z"
updatedAt: "2020-12-30T11:07:38.848Z"
---
## Overview
When you create a new batch of containers, you must specify how many containers you want the batch to include (with a minimum of at least 1 container), the container image, and the maximum cost you are willing to pay initially. The initial maximum cost acts as a constraint on the location and creation of the batch.
You must also specify the required container specifications, either by selecting one of the provided container presets, or by setting your own custom specifications.

You can optionally add qualities such as conformity constraints for the data center in which it is created, desired or undesired locations for the batch, an Elasticsearch endpoint, and environment variables to be passed to the container.

## Operations
The operations that can be performed on batches are:
- List Batches (GET)
- Create a Batch (POST)
- Describe a Batch (GET)
- Update a Batch (PATCH)
- Delete a Batch (DELETE)

## Creating a Batch
When you create a batch, you must configure the following parameters:
- `container_image`
- `max_price`
- `desired_number`

You must also configure **either** the `container_preset` parameter, **or** the following three parameters:
- `vcpus`
- `memory`
- `ephemeral_storage`

For detailed explanations of all the required and optional parameters, see [Create a Batch](ref:createbatch).

## Updating Batch Parameters
When updating a batch, the parameters that can be updated are:
- name
- display_name
- aws_role

## Deleting a Batch
When you delete a batch, all the related resources are deleted.