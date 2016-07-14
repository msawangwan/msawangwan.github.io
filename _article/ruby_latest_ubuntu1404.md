---
layout: default
title: article/ruby_latest_ubuntu14.04
show_quote:false
---

with ubuntu 14,04 (for whatever reason) you can't do

    :~$ apt-get ruby 2.3.0

to get the latest stable build of ruby. 

unless you use a ruby version manager, i believe you're stuck with ruby 1.9.3.

ubuntu 16.04 is just around the corner, so this may be an irrelvant
tip -- none-the-less, this was the simplest work-around on 14.04.

* * *

    :~$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
    :~$ \curl -sSL https://get.rvm.io | bash -s stable --rails
    :~$ source ~/.rvm/scripts/rvm

* * *

running these three commands simply installs **rvm** which is a version manager. so now simply run

    :~$ rvm list known
    :~$ rvm install ruby [specific_version]
    :~$ rvm list

* * *

the important command here is the second one. the first command lists the available versions to install, while
the third command lists the versions installed via rvm.

good luck.
