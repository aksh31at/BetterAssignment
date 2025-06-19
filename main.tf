terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

resource "aws_instance" "akshat-chat-server" {
  ami           = "ami-02b3c03c6fadb6e2c" # Verified Amazon Linux 2 AMI for us-east-1
  instance_type = var.instance_type
  key_name      = var.key_name
  vpc_security_group_ids = [aws_security_group.chat_sg.id]
  user_data     = file("E:/Assignment/terraform/install_docker.sh") # Corrected path syntax

  tags = {
    Name = var.instance_name
  }
}

resource "aws_security_group" "chat_sg" {
  name        = "buzz-chat-sg"
  description = "Security group for chat application"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 4000
    to_port     = 4000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}