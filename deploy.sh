yarn build
tar -zvcf dist.tar.gz dist
scp -i testKeyPair.pem dist.tar.gz ubuntu@ec2-54-169-128-181.ap-southeast-1.compute.amazonaws.com:~/
