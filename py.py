import boto3
s3 = boto3.client("s3")

def handler(request):
    data = s3.list_objects(
        Bucket='sigma.smoketest',
        MaxKeys=10,
        Prefix=''
    )
    return data