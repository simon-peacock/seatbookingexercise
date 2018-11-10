#!/usr/bin/env groovy

pipeline {
    agent { label 'dennis-node' }
    triggers { githubPush() }
    options { disableConcurrentBuilds() }
    stages {
        stage('Unit Test') {
           steps {
                sh '''
                    yarn && yarn test 
                '''
           }
        }
    }
}

