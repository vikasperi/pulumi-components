import * as pulumi from '@pulumi/pulumi'
import { dynamicProvider } from './dynamic-resource-provider'

export interface EcsWaiterProps {
    clusterName: pulumi.Input<string>
    serviceName: pulumi.Input<string>
    desiredTaskDef: pulumi.Input<string>
    awsRegion?: pulumi.Input<string>
    assumeRole?: pulumi.Input<string>
    timeoutMs?: pulumi.Input<string>
}

export class EcsWaiter extends pulumi.dynamic.Resource {
    public readonly status!: pulumi.Output<string>
    public readonly failureMessage!: pulumi.Output<string>

    constructor(
        name: string,
        props: EcsWaiterProps,
        opts?: pulumi.CustomResourceOptions,
    ) {
        super(
            dynamicProvider,
            name,
            {
                status: undefined,
                failureMessage: undefined,
                ...props,
            },
            opts,
        )
    }
}