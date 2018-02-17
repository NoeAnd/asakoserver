# asakoserver
- installation:


    echo "Install node"
    sudo apt-get install npm -y
    sudo npm install n -g
    sudo n latest

- Install git


    sudo apt-get install git

- Configure remote ssh on git
    
https://help.github.com/articles/connecting-to-github-with-ssh/

- Download asacoserver repository


    git init
    git remote add origin git@github.com:NoeAnd/asakoserver.git
    git push -u origin master