import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("bucket-ftr", {
    bucket: 'bucket-ftr',
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

export const bucketName = bucket.id;
export const bucketTags = bucket.tags;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.id;
export const ecrRepositoryUrl = ecr.repositoryUrl;