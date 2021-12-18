import * as cdk from '@aws-cdk/core';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';

export class CdkDemoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const vpc = new Vpc(this, 'MainVpc',{
    	maxAzs: 2,
    	subnetConfiguration:  [
    	  {
    	    cidrMask: 24,
    	    name: 'public-subnet',
    	    subnetType: SubnetType.PUBLIC
    	  },
    	]
  	});
  }
}
