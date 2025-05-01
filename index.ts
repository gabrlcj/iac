import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("bucket-ftr-1", {
    bucket: 'bucket-ftr-1',
    tags: {
        IaC: 'true',
    },
});

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

export const ecrName = ecr.id;
export const ecrRepositoryUrl = ecr.repositoryUrl;
export const ecrImageTagMutability = ecr.imageTagMutability;
