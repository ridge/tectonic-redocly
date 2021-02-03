# Ridge Container Service API Overview
The RCS API is used to create, manage, and monitor Batches and Containers. The API includes functions for:
-  **Container Presets** - This is a list (read-only) of suggested, predefined Container specifications that you can reference when you create a batch of containers. Alternatively, you can explicitly specify the Container specification: number of CPU Cores, amount of ephemeral storage and RAM.
-  **Batches** - When you create a batch you will specify at least one pool of worker nodes, and optional location and conformity constraints.
-  **Containers**- Containers are created when you create or update a batch.

## Container Presets
Container Presets provide suggested specifications for the container. If you specify quantity values explicitly when creating a batch of containers, these override any preset values.
Use **List Container Presets**  to fetch a detailed list of Container Presets.

### Preset Example for a Small Container Preset
 - CPU Cores: 1
 - RAM (GiB): 1
 - Storage (GiB) 1

## Batches
When you create a new batch of containers, you must specify how many containers you want the batch to include (with a minimum of at least 1 container), the container image, and the maximum cost you are willing to pay initially. The initial maximum cost acts as a constraint on the location and creation of the batch.

You must also specify the required container specifications, either by selecting one of the provided container presets, or by setting your own custom specifications.

You can optionally add qualities such as conformity constraints for the data center in which it is created, desired or undesired locations for the batch, an Elasticsearch endpoint, and environment variables to be passed to the container.

### Batch Operations
The operations that can be performed on batches are:
* List Batches (GET)
* Create a Batch (POST)
* Describe a Batch (GET)
* Update a Batch (PATCH)
* Delete a Batch (DELETE)

### Creating a Batch
When you create a batch, you must configure the following parameters:
- `container_image`
- `desired_number`
You must also configure **either** the `container_preset` parameter, **or** the following three parameters (within the **Quantities** parameter):
- `vcpus`
- `memory`
- `ephemeral_storage`
For detailed explanations of all the required and optional parameters, see Create a Batch.

#### Variables: Quantities Used in Container Creation
When creating a batch of containers, you must specify the minimum requirements for each container. To customize these requirements, you can specify quantity values in the API request.
The quantity values you can specify are:
* `cpu_cores`: The minimal number of CPU cores required for each container.
* `ephemeral_storage`: The minimal amount of storage required for each container (in GiB).
* `ram`: The minimal amount of RAM required for each container (in GiB).
Note that if the data center does not have the exact configuration requested, the actual configuration may be different, however it will not be less than the minimum specified here.

#### Variables: Qualities Used in Container Creation
If your batch requires a specific certification for the data center in which it is created, you can add this as a quality, in the form of `"certification_name":1`. The value of this quality is always `1`.


For example:


`"iso_27001": 1` requires that the data center have ISO 27001 certification.
`"hipaa": 1` requires that the data center have HIPAA certification.


Use the qualities endpoint in the Data Center API to get the list of certifications.

### Updating Batch Parameters
The batch parameters that can be updated are:
- `name`
- `display_name`
- `aws_role`

### Deleting a Batch
When you delete a batch, all the related resources are deleted.

## Containers
Containers are created when you create or update a batch. The number of containers in a batch can be updated by updating the `desired_number` parameter in the Update a Batch function.

### Container Operations
The operations you can perform on containers are:
* List the Containers in a Batch (GET)
* Describe a Container (GET)
* Terminate a Container (DELETE)
For List Containers, the states that can be used for filtering are:
- `creating`
- `starting`
- `running`
- `terminating`
