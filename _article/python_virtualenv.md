---
layout: default
title: article/python_virtualenv
show_quote: false
---

virtualenv is package manger for python.

    

when developing, it's a good habit to install packages
on a per project basis. supposedly this helps with
dependency management. use virtualenv.

    

first install virtualenv (globally):

    $~: pip install virtualenv

then install a wrapper which makes working with venvs more pleasent:

    $~: pip install virtualenvwrapper-win

now you can create virtual envionrments:

    $~: mkvirtualenv [name_of_env]

switch between envs:

    $~: workon [name_of_env]

exit an env:

    $~: deactivate

delete an env:

    $~: rmvirtualenv [name_of_env]

list all envs:

    $~: lsvirtualenv

- [http://docs.python-guide.org/en/latest/dev/virtualenvs/](see this article for more detailed explaination)
