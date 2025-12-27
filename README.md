Keyboard Efficiency Visualizer

Istructions for Linux:
  Requirements:
  -Text editor
  -Python3 ( dependency )

1. Clone the repository in your host
git clone https://github.com/ec-uni/KEV 

2. Set Virtual Enviroment  
python3 -m venv .env

3. Enter in the virtual enviroment
source .env/bin/activate

4. Install all the dependencies
pip install -r requirements.txt

5. Start your webserver ( just to be sure that works ) ( PS: -w stands for workers, the more cores you have, the more you can put )
python3 -m gunicorn -w 4 app:app

6. Open your website on your localhost ( this can vary if you change app.py )
http://127.0.0.1:8000

IF YOU WANT TO SELF HOST OUTSIDE YOUR LOCAL NETWORK

Get Sure to install and enable/start as service:
Caddy

Edit the /etc/caddy/Caddyfile

and put this:


ip:port (check yours) {
  root * /home/ema/coccinella/static
  file_server
  reverse_proxy /* 127.0.0.1:8000
  }


Then restart Caddy service
Get sure to have enabled port forwarding with the current local ip of your host machine, or whatever you host with...
and Enjoy.
