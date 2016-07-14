---
layout: default
title: article/ruby_latest_ubuntu1404
show_quote: false
---

with ubuntu 14,04 (for whatever reason) you can't do

* * *

    :~$ sudo apt-get ruby 2.3.0

* * *

to get the latest stable build of ruby.

you're kinda' stuck with 1.9.3 unless you use a version manager.

ubuntu 16.04 is just around the corner, so this may be an irrelevant
tip -- none-the-less, i found this to be the simplest work-around on 14.04

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

the important command here is the second one.
the first command lists possible versions to install, while
the third command lists the versions on the system managed by rvm.

good luck.
