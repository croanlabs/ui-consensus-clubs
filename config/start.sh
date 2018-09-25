docker build --no-cache -t consensusclubs/ui-consensus-clubs:v1.0.0 ../consensusgame

DEFAULT_ENVIRONMENT='development'
if [ -z $ENVIRONMENT ]; then
  ENVIRONMENT=$DEFAULT_ENVIRONMENT
  echo 'Environment not specified. Set to default: ' $DEFAULT_ENVIRONMENT
else
  echo 'Environment is' $ENVIRONMENT
fi

kubectl create -f ui-deployment.yaml
if [ "$ENVIRONMENT" == 'development' ]; then
  kubectl create -f ui-nodeport.yaml
else
  kubectl create -f ui-load-balancer.yaml
fi
