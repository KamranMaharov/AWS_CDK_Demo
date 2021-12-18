# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


## Deveopment commands
 * `npm install -g aws-cdk` install cdk cli globally for all users
 * `aws sts get-caller-identity` get AWS account id
 * `cdk bootstrap aws://[account_id]/[region_id]` bootstrap some storage container (e.g S3 bucket) in given account/region to hold resources required for CloudFormation deployment
 * `cdk init --language typescript` - create empty project, which will use Typescript for declaring cloud resources
 * `npm install @aws-cdk/aws-ec2` - install project-level dependency
 * `cdk deploy` - synthesize CloudFormation template files from CDK project and deploy them to Amazon account
 * `cdk destroy` - destroy deployed stack from Amazon account
