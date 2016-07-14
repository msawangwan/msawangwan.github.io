---
layout: default
title: article/scp_basics
show_quote: false
---

Transferring files over the network via ssh connection.

* * *

Logged in as local, copying from local to remote

    :~$ scp /local/target/resource/to/copy [-p][port] remote@remoteip:/target/dest/dir

Logged in as remote, copying from local to remote

    :~$ scp local@localip:/local/target/resource/to/copy /target/dest/dir

* * *

More to come ...
