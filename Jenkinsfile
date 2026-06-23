pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')

        BACKEND_IMAGE = "kahboh/shoesly-backend:v1.${BUILD_NUMBER}"
        FRONTEND_IMAGE = "kahboh/shoesly-frontend:v1.${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm install || true'
                    sh 'npm test || true'
                }
            }
        }

        stage('Build Images') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./backend'
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                    echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                '''
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $BACKEND_IMAGE'
                sh 'docker push $FRONTEND_IMAGE'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    kubectl set image deployment/shoesly-backend \
                    shoesly-backend=$BACKEND_IMAGE

                    kubectl rollout status deployment/shoesly-backend
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}