# Mauricio De La Quintana Website

## Requirements

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

## Installation

Install packages
```sh
npm i
```

And run:
```sh
gatsby develop
```
----
If you get an error of `pnglib`, execute:
```sh
sudo apt-get install libpng-dev
```
and
```sh
sudo npm install -g pngquant-bin --allow-root  --unsafe-perm=true
```
```sh
sudo npm i gatsby-image gatsby-transformer-sharp --unsafe-perm=true --allow-root
```

---

if not works
```
sudo wget -q -O /tmp/libpng12.deb http://mirrors.kernel.org/ubuntu/pool/main/libp/libpng/libpng12-0_1.2.54-1ubuntu1_amd64.deb \
  && dpkg -i /tmp/libpng12.deb \
  && rm /tmp/libpng12.deb
```
then, the issue will be solved.
