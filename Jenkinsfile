pipeline {
    agent any

    stages {

        stage('Build Backend') {
            steps {
                sh 'docker build -t interiorvision-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t interiorvision-frontend ./frontend'
            }
        }
    }
}