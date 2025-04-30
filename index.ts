import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("first-bucket-ftr", {
    bucket: 'first-bucket-ftr',
    tags: {
        IaC: 'true',
    },
});

const secondBucket = new aws.s3.BucketV2("second-bucket-ftr", {
    bucket: 'second-bucket-ftr',
    tags: {
        IaC: 'true',
    },
})

const ecr = new aws.ecr.Repository("ecr-ftr", {
    name: 'ecr-ftr',
    imageTagMutability: 'IMMUTABLE',
    tags: {
        IaC: 'true',
    },
});

export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.id;
export const ecrRepositoryUrl = ecr.repositoryUrl;
