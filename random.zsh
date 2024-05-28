#!/bin/zsh

eas_build_command="eas build --profile dev-preview --platform android"   
env="productio"  
if [[ "$env" == "production" ]]; then
    eas_build_command="${eas_build_command} --local --output=build/generated.apk"
fi

eval "$eas_build_command"
