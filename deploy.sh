yarn build
tar -zvcf dist.tar.gz dist
scp -i july-kp.pem dist.tar.gz ubuntu@ec2-52-77-229-221.ap-southeast-1.compute.amazonaws.com:~/
