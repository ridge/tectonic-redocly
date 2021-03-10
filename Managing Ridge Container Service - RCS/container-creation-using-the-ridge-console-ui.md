---
title: "Managing RCS via Console"
slug: "container-creation-using-the-ridge-console-ui"
hidden: false
createdAt: "2020-12-29T12:03:03.339Z"
updatedAt: "2021-01-06T09:25:52.849Z"
---
#WIP - WORK IN PROGRESS
#This page is not complete!
# Overview
When you create a new batch of containers, you can specify a set of constraints that the Ridge Allocation Engine should use to select the best suited data center.

You can specify the following when creating a batch of containers:
- The number of desired containers
- The docker image
- CPU, memory and instance storage size. Alternatively, specify one of the container presets (similar to instance types that are often used in public clouds)

## Creating a New Batch
To create a new batch using the Ridge console UI:
1. From the Ridge console homepage, go to the Containers page, and click **Create Batch**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/04e0cb8-Create_Batch_UI.png",
        "Create_Batch_UI.png",
        689,
        1031,
        "#fafafa"
      ]
    }
  ]
}
[/block]
2. Enter the required and desired specifications for the batch of containers according to the table below. Note that parameters in **bold** are required.
[block:parameters]
{
  "data": {
    "h-0": "Parameter Name",
    "0-0": "Batch name",
    "h-1": "Description",
    "h-2": "Example",
    "1-0": "**Container image**",
    "2-0": "Elasticsearch endpoint",
    "3-0": "Requested locations",
    "4-0": "**Number of containers**",
    "5-0": "Minimal Configuration",
    "6-0": "Resources",
    "7-0": "Entry Point",
    "8-0": "Arguments",
    "0-1": "A unique name for the batch.",
    "0-2": "batch1",
    "1-1": "The path where the container image can be found.",
    "1-2": "hub.docker.com/repository/docker/test-org/test-repo/test-image",
    "2-1": "The URL of an Elastic Search instance. All logs of the container will be sent to this URL.",
    "2-2": "http://elasticsearch.example.com:9200",
    "3-1": "Select specific locations to require or exclude in creation of the batch.\nRequired or excluded locations can be a country, region, or city, OR you can request a specific data center.",
    "4-1": "The desired number of containers.",
    "4-2": "2",
    "9-0": "Environment Variables",
    "5-1": "The preset container type. This is overridden if you give specific CPU, memory and instance storage requirements in the Resources section.",
    "6-1": "The minimal number of CPU cores, RAM (in GiB), and storage (in GiB) that are required for the container.",
    "6-2": "CPU Cores: 1\nRAM (GiB): 2\nStorage (GiB): 4",
    "7-1": "An entry point that overrides the default one provided by the container image.",
    "8-1": "Arguments that override the default ones provided by the container image. If you define arguments, but do not define an entry point, the default one is used with these arguments.",
    "9-1": "A list of environment variables to be passed to the containers. Each environment variable must be specified as a key and value.",
    "5-2": ""
  },
  "cols": 3,
  "rows": 10
}
[/block]
3. Click **Create Batch**.
